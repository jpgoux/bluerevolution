'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import styles from './ScrollCue.module.css';

export default function ScrollCue() {
  const t = useTranslations('seuil');

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
  };

  return (
    <motion.button
      className={styles.cue}
      onClick={scrollDown}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut', delay: 7 }}
      aria-label={t('scroll_cue')}
    >
      <span className={styles.label}>{t('scroll_cue')}</span>
      <div className={styles.line} />
    </motion.button>
  );
}
