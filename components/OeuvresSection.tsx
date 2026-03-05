'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './OeuvresSection.module.css';

/* ── Données statiques — couleurs et gradient de couverture ── */
const BOOKS = [
  { key: 'rb1', type: 'Roman',  accentRgb: '80, 130, 230',  dormant: false },
  { key: 'rb2', type: 'Roman',  accentRgb: '50, 90, 175',   dormant: false },
  { key: 'sb1', type: 'Roman',  accentRgb: '210, 75, 55',   dormant: false },
  { key: 'sb2', type: 'Roman',  accentRgb: '195, 95, 25',   dormant: false },
  { key: 'plb', type: 'Essai',  accentRgb: '0, 80, 200',    dormant: true  },
] as const;

type BookKey = (typeof BOOKS)[number]['key'];

export default function OeuvresSection() {
  const t = useTranslations('oeuvres');
  const shouldReduce = useReducedMotion();

  const reveal = (index: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.1 },
          transition: {
            duration: 0.85,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay: index * 0.08,
          },
        };

  const revealText = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] as const, delay },
        };

  return (
    <section className={styles.section} id="oeuvres">
      <div className={styles.inner}>

        {/* ── En-tête ── */}
        <div className={styles.intro}>
          <motion.span className={`eyebrow ${styles.eyebrow}`} {...revealText(0)}>
            {t('eyebrow')}
          </motion.span>
          <motion.h2 className={styles.h2} {...revealText(0.07)}>
            {t('titre')}
          </motion.h2>
        </div>

        {/* ── Rangée 1 : 4 premiers livres ── */}
        <div className={styles.row4}>
          {BOOKS.slice(0, 4).map((book, i) => {
            const key = book.key as BookKey;
            return (
              <motion.div key={key} className={styles.bookWrap} {...reveal(i)}>
                {/* Couverture */}
                <div
                  className={styles.cover}
                  style={{ '--accent-rgb': book.accentRgb } as React.CSSProperties}
                >
                  <Image
                    src={`/covers/${key}.png`}
                    alt={t(`${key}_titre`)}
                    fill
                    sizes="(max-width: 768px) 45vw, 22vw"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    unoptimized
                  />
                  {/* Overlay page dédiée — visible au hover */}
                  <div className={styles.coverOverlay} aria-hidden="true">
                    <span className={styles.coverOverlayLabel}>Découvrir →</span>
                  </div>
                  <div className={styles.coverShine} />
                </div>
                {/* Méta sous la couverture */}
                <div className={styles.metaWrap}>
                  <p className={styles.meta}>
                    <span className={styles.metaType}>{book.type}</span>
                    <span className={styles.metaSep}>·</span>
                    <span className={styles.metaYear}>{t(`${key}_annee`)}</span>
                  </p>
                  <p className={styles.metaPublisher}>{t(`${key}_publisher`)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Rangée 2 : livre dormant centré ── */}
        <motion.div className={styles.row1} {...reveal(4)}>
          <div className={styles.bookWrap}>
            <div className={`${styles.cover} ${styles.coverDormant}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/covers/plb.svg"
                alt={t('plb_titre')}
                className={styles.coverSvg}
              />
              <div className={styles.dormantVeil} />
              <div className={styles.coverShine} />
            </div>
            <div className={styles.metaWrap}>
              <p className={styles.meta}>
                <span className={`${styles.metaType} ${styles.metaTypeDormant}`}>Essai</span>
                <span className={styles.metaSep}>·</span>
                <span className={`${styles.metaYear} ${styles.metaYearDormant}`}>
                  {t('plb_annee')}
                </span>
              </p>
              <p className={`${styles.metaPublisher} ${styles.metaTypeDormant}`}>
                {t('plb_badge')}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
