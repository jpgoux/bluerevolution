'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './CharteSection.module.css';

const MISSIONS = ['01','02','03','04','05','06','07','08','09','10'] as const;

export default function CharteSection() {
  const t = useTranslations('charte');
  const shouldReduce = useReducedMotion();

  const revealText = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay },
        };

  const revealBox = (index: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.1 },
          transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as const,
            delay: index * 0.04,
          },
        };

  return (
    <section className={styles.section} id="charte">
      <div className={styles.inner}>

        {/* ── En-tête ── */}
        <div className={styles.intro}>
          <motion.span className={`eyebrow ${styles.eyebrow}`} {...revealText(0)}>
            {t('eyebrow')}
          </motion.span>
          <motion.h2 className={styles.h2} {...revealText(0.06)}>
            {t('titre')}
          </motion.h2>
          <motion.p className={styles.subtitle} {...revealText(0.12)}>
            {t('intro')}
          </motion.p>
        </div>

        {/* ── Grille 5×2 ── */}
        <div className={styles.grid}>
          {MISSIONS.map((num, i) => {
            const key = `m${num}` as const;
            return (
              <motion.div
                key={num}
                className={styles.box}
                {...revealBox(i)}
              >
                <span className={styles.num}>{num}</span>
                <span className={styles.title}>{t(key)}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
