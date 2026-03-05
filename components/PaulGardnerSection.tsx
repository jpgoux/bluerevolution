'use client';

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

  const videoInner = (
    <>
      <Image
        src="/paul-gardner-hero.jpg"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: 'cover' }}
        className={styles.heroImg}
      />
      <div className={styles.videoOverlay} aria-hidden="true" />
      <div className={styles.play} aria-hidden="true">
        {/* Play triangle */}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <span className={styles.videoTag}>{t('video_label')}</span>
    </>
  );

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
              className={`btn-primary ${styles.btnPrimary}`}
              onClick={() => videoUrl && window.open(videoUrl, '_blank')}
              aria-disabled={!videoUrl}
              data-cursor="true"
            >
              <span aria-hidden="true">▶</span>
              {t('btn_trailer')}
            </button>

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

        {/* ── Colonne droite : placeholder vidéo 16/9 ── */}
        <motion.div className={styles.videoWrap} {...reveal(0.08)}>
          {videoUrl ? (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.videoBox}
              aria-label={t('video_aria')}
              data-cursor="true"
            >
              {videoInner}
            </a>
          ) : (
            <div className={styles.videoBox} aria-label={t('video_label')}>
              {videoInner}
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
