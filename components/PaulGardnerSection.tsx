'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './PaulGardnerSection.module.css';

type Props = {
  videoUrl?: string | null;
  pdfUrl?: string | null;
};

export default function PaulGardnerSection({ videoUrl, pdfUrl }: Props) {
  const t = useTranslations('paul');
  const shouldReduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const reveal = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 36 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.12 },
          transition: {
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay,
          },
        };

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      window.dispatchEvent(new CustomEvent('ambient:pause'));
    } else {
      v.pause();
      setPlaying(false);
      window.dispatchEvent(new CustomEvent('ambient:resume'));
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
    else if ((v as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen) {
      (v as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen!();
    }
  };

  return (
    <section className={styles.section} id="paul-gardner">
      <div className={styles.grid}>

        {/* ── Colonne gauche : texte ── */}
        <div className={styles.text}>
          <motion.span className={`eyebrow ${styles.eyebrow}`} {...reveal(0)}>
            {t('eyebrow')}
          </motion.span>

          <motion.h2 className={styles.h2} {...reveal(0.05)}>
            {t('titre')}
          </motion.h2>

          <motion.p className={styles.para} {...reveal(0.1)}>
            {t('para1')}
          </motion.p>

          <motion.p className={`${styles.para} ${styles.para2}`} {...reveal(0.15)}>
            {t('para2')}
          </motion.p>

          <motion.div className={styles.actions} {...reveal(0.2)}>
            <button
              className={`btn-ghost ${styles.btnGhost}`}
              onClick={() => pdfUrl && window.open(pdfUrl, '_blank')}
              aria-disabled={!pdfUrl}
              data-cursor="true"
            >
              {t('btn_prologue')}
            </button>
          </motion.div>
        </div>

        {/* ── Colonne droite : vidéo ── */}
        <motion.div className={styles.videoWrap} {...reveal(0.08)}>
          <div
            className={styles.videoBox}
            onClick={videoUrl ? handlePlay : undefined}
            role={videoUrl ? 'button' : undefined}
            aria-label={t('video_aria')}
            style={{ cursor: videoUrl ? 'pointer' : 'default' }}
          >
            {videoUrl ? (
              <video
                ref={videoRef}
                src={videoUrl}
                poster="/paul-gardner-hero.jpg"
                className={styles.heroVideo}
                playsInline
                preload="none"
                onEnded={() => {
                  setPlaying(false);
                  window.dispatchEvent(new CustomEvent('ambient:resume'));
                }}
              />
            ) : (
              <Image
                src="/paul-gardner-hero.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className={styles.heroImg}
              />
            )}
            <div className={styles.videoOverlay} aria-hidden="true" />
            {!playing && (
              <div className={styles.playWrap} aria-hidden="true">
                <div className={styles.play}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className={styles.playLabel}>{t('btn_trailer')}</span>
              </div>
            )}
            {videoUrl && (
              <button
                className={styles.fullscreenBtn}
                onClick={handleFullscreen}
                aria-label="Plein écran"
                title="Plein écran"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M16 21h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              </button>
            )}
          </div>
        <span className={styles.videoTag}>{t('video_label')}</span>
        </motion.div>

      </div>
    </section>
  );
}
