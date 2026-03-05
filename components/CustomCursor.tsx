'use client';

import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const dotRef      = useRef<HTMLDivElement>(null);
  const ringWrapRef = useRef<HTMLDivElement>(null);
  const ringRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if ('ontouchstart' in window) return;

    const dot      = dotRef.current;
    const ringWrap = ringWrapRef.current;
    const ring     = ringRef.current;
    if (!dot || !ringWrap || !ring) return;

    let visible = false;

    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Dot suit le curseur immédiatement — pas de transition
      dot.style.transform = `translate(${x - 2.5}px, ${y - 2.5}px)`;

      if (!visible) {
        // Premier mouvement : téléporter le ring (sans transition) pour éviter
        // qu'il glisse depuis le coin supérieur gauche
        ringWrap.style.transition = 'none';
        ringWrap.style.transform  = `translate(${x}px, ${y}px)`;
        dot.style.opacity      = '1';
        ringWrap.style.opacity = '1';
        visible = true;
        // Réactiver la transition CSS après la téléportation
        requestAnimationFrame(() => {
          ringWrap.style.transition = '';
        });
        return;
      }

      // Ring wrapper : la transition CSS gère le trailing (hardware-accelerated)
      ringWrap.style.transform = `translate(${x}px, ${y}px)`;
    };

    const onEnter = () => ring.classList.add(styles.hovered);
    const onLeave = () => ring.classList.remove(styles.hovered);

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) onEnter();
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) onLeave();
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout',  onOut);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout',  onOut);
    };
  }, []);

  return (
    <>
      {/* Point — suit immédiatement */}
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />

      {/* Wrapper positionné par JS — CSS transition crée le trailing */}
      <div ref={ringWrapRef} className={styles.ringWrap} aria-hidden="true">
        {/* Anneau visuel — centré dans le wrapper, scale au hover */}
        <div ref={ringRef} className={styles.ring} />
      </div>
    </>
  );
}
