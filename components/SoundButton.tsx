'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import styles from './SoundButton.module.css';

const FADE_DURATION = 3000;
const TARGET_VOLUME  = 0.35;
const TICK_MS        = 50;

function WaveIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <circle cx="1.8" cy="6" r="1.4" fill="currentColor" />
      <path d="M 4.5 3.5 Q 6.8 6 4.5 8.5"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M 7.5 1.2 Q 11.2 6 7.5 10.8"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      <path d="M 11 0 Q 15.8 6 11 12"
        stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.32" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="3.2" height="11" rx="1" fill="currentColor" />
      <rect x="6.3" y="0.5" width="3.2" height="11" rx="1" fill="currentColor" />
    </svg>
  );
}

export default function SoundButton() {
  const locale     = useLocale();
  const labelPlay  = locale === 'en' ? 'LISTEN' : 'ÉCOUTER';
  const labelPause = 'PAUSE';

  const [active,   setActive]   = useState(false);
  const [inviting, setInviting] = useState(false);
  const [volume,   setVolume]   = useState(TARGET_VOLUME);

  const audioRef   = useRef<HTMLAudioElement | null>(null);
  const fadeRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const sliderRef  = useRef<HTMLInputElement | null>(null);
  const activeRef  = useRef(false);   // ref toujours à jour pour les event listeners
  const duckedRef  = useRef(false);   // true = son éteint par la vidéo
  const volumeRef  = useRef(TARGET_VOLUME);

  // Synchronise les refs avec les states
  useEffect(() => { activeRef.current = active; }, [active]);
  useEffect(() => { volumeRef.current = volume; }, [volume]);

  useEffect(() => {
    const audio = new Audio('/audio/la11.mp3');
    audio.loop   = true;
    audio.volume = 0;
    audioRef.current = audio;

    const t1 = setTimeout(() => setInviting(true),  2000);
    const t2 = setTimeout(() => setInviting(false), 5000);

    // Ducking : la vidéo Paul Gardner commande le son ambiant
    const DUCK_MS = 600;

    const onAmbientPause = () => {
      if (!audioRef.current || !activeRef.current) return;
      duckedRef.current = true;
      const dec = audioRef.current.volume / (DUCK_MS / TICK_MS);
      clearFade();
      fadeRef.current = setInterval(() => {
        if (!audioRef.current) return;
        const next = Math.max(audioRef.current.volume - dec, 0);
        audioRef.current.volume = next;
        if (next <= 0) clearFade();
      }, TICK_MS);
    };

    const onAmbientResume = () => {
      if (!audioRef.current || !duckedRef.current) return;
      duckedRef.current = false;
      const target = volumeRef.current;
      const inc = target / (DUCK_MS / TICK_MS);
      clearFade();
      fadeRef.current = setInterval(() => {
        if (!audioRef.current) return;
        const next = Math.min(audioRef.current.volume + inc, target);
        audioRef.current.volume = next;
        if (next >= target) clearFade();
      }, TICK_MS);
    };

    window.addEventListener('ambient:pause',  onAmbientPause);
    window.addEventListener('ambient:resume', onAmbientResume);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('ambient:pause',  onAmbientPause);
      window.removeEventListener('ambient:resume', onAmbientResume);
      audio.pause();
      audio.src = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Met à jour la variable CSS --vol-pct pour le fill du track
  useEffect(() => {
    sliderRef.current?.style.setProperty('--vol-pct', `${volume * 100}%`);
  }, [volume]);

  function clearFade() {
    if (fadeRef.current !== null) {
      clearInterval(fadeRef.current);
      fadeRef.current = null;
    }
  }

  function fadeIn() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 3;
    audio.volume = volume;
    audio.play().catch(() => {});
  }

  function fadeOut() {
    const audio = audioRef.current;
    if (!audio) return;
    const decrement = audio.volume / (FADE_DURATION / TICK_MS);
    clearFade();
    fadeRef.current = setInterval(() => {
      if (!audioRef.current) return;
      const next = Math.max(audioRef.current.volume - decrement, 0);
      audioRef.current.volume = next;
      if (next <= 0) {
        clearFade();
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, TICK_MS);
  }

  function handleClick() {
    setInviting(false);
    if (active) {
      fadeOut();
      setActive(false);
    } else {
      fadeIn();
      setActive(true);
    }
  }

  function handleVolume(e: React.ChangeEvent<HTMLInputElement>) {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  }

  const btnCls = [
    styles.btn,
    active              ? styles.active   : '',
    inviting && !active ? styles.inviting : '',
  ].filter(Boolean).join(' ');

  return (
    <motion.div
      className={styles.wrap}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut', delay: 1.2 }}
    >
      <button
        className={btnCls}
        onClick={handleClick}
        aria-label={active ? 'Couper la musique' : 'Lancer la musique'}
        aria-pressed={active}
      >
        {active ? <PauseIcon /> : <WaveIcon />}
        <span className={styles.label}>
          {active ? labelPause : labelPlay}
        </span>
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            className={styles.volumeWrap}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <input
              ref={sliderRef}
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolume}
              className={styles.volumeSlider}
              aria-label="Volume"
              style={{ '--vol-pct': `${volume * 100}%` } as React.CSSProperties}
            />
            <span className={styles.trackLabel}>Moby – <em>LA11</em></span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
