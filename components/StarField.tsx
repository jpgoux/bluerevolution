'use client';

import { useEffect, useRef } from 'react';
import styles from './StarField.module.css';

type Star = {
  x: number;
  y: number;
  r: number;
  op: number;
  sp: number;
  ph: number;
  bio: boolean;
};

export default function StarField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── Détection des capacités ──────────────────────────────────
    const isMobile = window.innerWidth <= 768;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Sur mobile : moins d'étoiles, pas de halo radial (coûteux sur GPU)
    const STAR_COUNT = isMobile ? 160 : 300;
    const SKIP_GLOW = isMobile;
    // Throttle à 30fps sur mobile pour préserver la batterie
    const FRAME_MS = isMobile ? 1000 / 30 : 0;

    // DPR plafonné à 2 — évite 9× pixels sur iPhone Pro (DPR=3)
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // ── Dimensions CSS / physiques ───────────────────────────────
    let cssW = window.innerWidth;
    let cssH = window.innerHeight;

    const applySize = () => {
      cssW = window.innerWidth;
      cssH = window.innerHeight;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      // Remet le scale absolu après chaque resize (canvas.width réinitialise)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    applySize();

    // ── Debounce resize — l'address bar iOS déclenche resize en continu ──
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(applySize, 150);
    };
    window.addEventListener('resize', onResize);

    // ── Étoiles ─────────────────────────────────────────────────
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.1 + 0.2,
      op: Math.random() * 0.55 + 0.08,
      sp: Math.random() * 0.007 + 0.002,
      ph: Math.random() * Math.PI * 2,
      bio: Math.random() < 0.1,
    }));

    // ── RAF handles — initialisés à 0 (cancelAnimationFrame(0) = no-op) ──
    let drawRaf = 0;
    let fadeRaf = 0;
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    let t = 0;
    let canvasOpacity = 0;
    let lastFrameTime = 0;
    // Throttle à 30fps pendant les 8 premières secondes pour libérer le GPU
    // pendant le pic des animations Framer Motion dans la hero section
    const startTime = performance.now();
    const HERO_THROTTLE_MS = 1000 / 30; // 30fps pendant la phase hero
    const HERO_DURATION_MS = 8000;       // durée des animations Framer Motion

    if (prefersReducedMotion) {
      // ── Rendu statique — pas d'animation, une seule passe ──────
      stars.forEach((s) => {
        const sx = s.x * cssW;
        const sy = s.y * cssH;
        ctx.beginPath();
        ctx.arc(sx, sy, s.bio ? s.r * 2 : s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.bio
          ? `rgba(0,210,255,${s.op * 0.55})`
          : `rgba(195,210,255,${s.op * 0.55})`;
        ctx.fill();
      });
    } else {
      // ── Boucle animée ────────────────────────────────────────────
      const draw = (timestamp: number) => {
        // Throttle FPS : mobile = 30fps fixe, hero desktop = 30fps les 8 premières secondes
        const inHeroPhase = !isMobile && (performance.now() - startTime < HERO_DURATION_MS);
        const frameLimit = FRAME_MS > 0 ? FRAME_MS : (inHeroPhase ? HERO_THROTTLE_MS : 0);
        if (frameLimit > 0 && timestamp - lastFrameTime < frameLimit) {
          drawRaf = requestAnimationFrame(draw);
          return;
        }
        lastFrameTime = timestamp;

        ctx.clearRect(0, 0, cssW, cssH);

        stars.forEach((s) => {
          const pulse =
            s.op + Math.sin(t * s.sp + s.ph) * (s.bio ? 0.38 : 0.1);
          const op = Math.max(0, pulse) * canvasOpacity;
          const sx = s.x * cssW;
          const sy = s.y * cssH;

          // Halo bioluminescent — desktop uniquement (createRadialGradient coûteux)
          if (s.bio && !SKIP_GLOW) {
            const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 7);
            g.addColorStop(0, `rgba(0,191,255,${op})`);
            g.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(sx, sy, s.r * 7, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
          }

          // Point principal — bio stars légèrement plus grandes sur mobile
          const radius = s.bio && SKIP_GLOW ? s.r * 2.2 : s.r;
          ctx.beginPath();
          ctx.arc(sx, sy, radius, 0, Math.PI * 2);
          ctx.fillStyle = s.bio
            ? `rgba(0,210,255,${op})`
            : `rgba(195,210,255,${op})`;
          ctx.fill();
        });

        t += 0.4;
        drawRaf = requestAnimationFrame(draw);
      };

      drawRaf = requestAnimationFrame(draw);

      // Apparition progressive des étoiles après 800ms
      let fadeStart = 0;
      fadeTimer = setTimeout(() => {
        const fade = (ts: number) => {
          if (!fadeStart) fadeStart = ts;
          canvasOpacity = Math.min((ts - fadeStart) / 3000, 1);
          if (canvasOpacity < 1) fadeRaf = requestAnimationFrame(fade);
        };
        fadeRaf = requestAnimationFrame(fade);
      }, 800);
    }

    return () => {
      cancelAnimationFrame(drawRaf);
      cancelAnimationFrame(fadeRaf);
      clearTimeout(fadeTimer);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={ref} className={styles.canvas} aria-hidden="true" />;
}
