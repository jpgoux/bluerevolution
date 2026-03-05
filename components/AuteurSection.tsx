'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './AuteurSection.module.css';

const TAGS = [
  'Transition écologique',
  'Énergie',
  'Économie',
  'Prospective',
  'Espace',
  'Récits',
];

export default function AuteurSection() {
  const t = useTranslations('auteur');
  const shouldReduce = useReducedMotion();
  const [bioOpen, setBioOpen] = useState(false);

  const reveal = (delay = 0) =>
    shouldReduce
      ? { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const, delay }, viewport: { once: true, margin: '-80px' } };

  return (
    <section className={styles.section} id="s-auteur">
      <div className={styles.grid}>

        {/* ── Photo ── */}
        <motion.div className={styles.photoWrap} {...reveal(0)}>
          <div className={styles.photo}>
            <Image
              src="/jean-pierre-goux.png"
              alt={t('photo_alt')}
              fill
              sizes="200px"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              unoptimized
            />
          </div>
        </motion.div>

        {/* ── Texte ── */}
        <div className={styles.text}>
          <motion.span className={styles.eyebrow} {...reveal(0.1)}>
            {t('eyebrow')}
          </motion.span>

          <motion.h2 {...reveal(0.18)}>{t('nom')}</motion.h2>

          <motion.p className={styles.role} {...reveal(0.25)}>
            <em>{t('titre')}</em>
          </motion.p>

          <motion.a href="https://www.jpgoux.com" target="_blank" rel="noopener noreferrer" className={styles.site} {...reveal(0.3)}>
            {t('site')}
          </motion.a>

          <motion.p className={styles.bioCourte} {...reveal(0.35)}>
            {t('bio_courte')}
          </motion.p>

          {/* ── Toggle bio complète ── */}
          <motion.button
            className={styles.toggleBtn}
            onClick={() => setBioOpen(o => !o)}
            aria-expanded={bioOpen}
            {...reveal(0.42)}
          >
            {t(bioOpen ? 'bio_toggle_close' : 'bio_toggle_open')}
            <span className={styles.toggleArrow} aria-hidden="true">
              {bioOpen ? '▲' : '▼'}
            </span>
          </motion.button>

          <AnimatePresence initial={false}>
            {bioOpen && (
              <motion.div
                key="bio-full"
                className={styles.bioFull}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p>{t('bio_para1')}</p>
                <p>{t('bio_para2')}</p>
                <p>{t('bio_para3')}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Tags thématiques ── */}
          <motion.div className={styles.tags} {...reveal(0.5)}>
            {TAGS.map(tag => (
              <span key={tag} className={styles.tag}>{tag.toUpperCase()}</span>
            ))}
          </motion.div>

          {/* ── Liens réseaux ── */}
          <motion.div className={styles.links} {...reveal(0.58)}>
            <a href="https://www.linkedin.com/in/jpgoux/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              {t('linkedin')}
            </a>
            <a href="https://www.instagram.com/jgoux" target="_blank" rel="noopener noreferrer" className={styles.link}>
              {t('instagram')}
            </a>
            <a href="https://www.youtube.com/jpgoux" target="_blank" rel="noopener noreferrer" className={styles.link}>
              {t('youtube')}
            </a>
            <a href="mailto:contact@revolutionbleue.earth" className={styles.linkContact}>
              {t('contact')}
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
