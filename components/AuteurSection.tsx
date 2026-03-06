'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './AuteurSection.module.css';

const TAG_KEYS = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'] as const;

export default function AuteurSection() {
  const t = useTranslations('auteur');
  const locale = useLocale();
  const shouldReduce = useReducedMotion();
  const [bioOpen, setBioOpen] = useState(false);

  const reveal = (delay = 0) =>
    shouldReduce
      ? { initial: { opacity: 1, y: 0 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const, delay }, viewport: { once: true, margin: '-80px' } };

  const isFr = locale === 'fr';

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

          {/* ── Biographie courte ── */}
          <motion.p className={styles.bioCourte} {...reveal(0.35)}>
            {isFr ? (
              <>
                Né à Nice en 1973. Ingénieur ENSTA et économiste (Sorbonne), lauréat du{' '}
                <a href="https://www.siam.org/programs-initiatives/prizes-awards/activity-group-prizes/siam-activity-group-on-optimization-best-paper-prize/prize-history/" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>prix SIAM 2002</a>
                {' '}en optimisation mathématique. Ancien chercheur à Northwestern University et Argonne National Laboratory (Chicago). Ancien directeur général de Powernext. Auteur des sagas{' '}
                <em>Siècle bleu</em> et <em>Révolution bleue</em>. Fondateur de Biosphere Economics et de l'ONG{' '}
                <a href="https://www.onehome.org" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>OneHome</a>.
                {' '}Ancien président de l'
                <a href="https://www.futurs-souhaitables.org" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>Institut des Futurs souhaitables</a>.
                {' '}Plus de 400 conférences. Son but : réconcilier l'humanité et la biosphère.
              </>
            ) : (
              <>
                Born in Nice in 1973. Engineer (ENSTA) and economist (Sorbonne), laureate of the{' '}
                <a href="https://www.siam.org/programs-initiatives/prizes-awards/activity-group-prizes/siam-activity-group-on-optimization-best-paper-prize/prize-history/" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>SIAM Prize 2002</a>
                {' '}in mathematical optimization. Former researcher at Northwestern University and Argonne National Laboratory (Chicago). Former CEO of Powernext. Author of the{' '}
                <em>Blue Century</em> and <em>Blue Revolution</em> sagas. Founder of Biosphere Economics and the NGO{' '}
                <a href="https://www.onehome.org" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>OneHome</a>.
                {' '}Former president of the{' '}
                <a href="https://www.futurs-souhaitables.org" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>Institut des Futurs souhaitables</a>.
                {' '}Over 400 talks. His goal: reconcile humanity and the biosphere.
              </>
            )}
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
                {isFr ? (
                  <>
                    <p>
                      Ancien chercheur en mathématiques à Northwestern University et à l'Argonne National Laboratory (ministère de l'Énergie américain) à Chicago, il est lauréat du{' '}
                      <a href="https://www.siam.org/programs-initiatives/prizes-awards/activity-group-prizes/siam-activity-group-on-optimization-best-paper-prize/prize-history/" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>prix SIAM 2002</a>
                      {' '}en optimisation mathématique, récompense triennale du meilleur article de recherche mondial dans ce domaine.
                    </p>
                    <p>
                      Après avoir dirigé Powernext jusqu'en 2019, il fonde Biosphere Economics et préside l'ONG{' '}
                      <a href="https://www.onehome.org" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>OneHome</a>
                      {' '}(vidéos de la Terre filmées depuis l'espace). Administrateur et ancien président de l'
                      <a href="https://www.futurs-souhaitables.org" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>Institut des futurs souhaitables</a>
                      {' '}(2019–2023).
                    </p>
                    <p>
                      Auteur des sagas <em>Siècle Bleu</em> (Actes Sud, 2021 & 2022) et <em>Révolution bleue</em> (Eyrolles, 2024 & 2025, revolutionbleue.fr).
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Former mathematics researcher at Northwestern University and Argonne National Laboratory (US Department of Energy) in Chicago, he is laureate of the{' '}
                      <a href="https://www.siam.org/programs-initiatives/prizes-awards/activity-group-prizes/siam-activity-group-on-optimization-best-paper-prize/prize-history/" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>SIAM Prize 2002</a>
                      {' '}in mathematical optimization, a triennial award for the best research article worldwide in that field.
                    </p>
                    <p>
                      After leading Powernext until 2019, he founded Biosphere Economics and chairs the NGO{' '}
                      <a href="https://www.onehome.org" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>OneHome</a>
                      {' '}(videos of Earth filmed from space). Board member and former president of the{' '}
                      <a href="https://www.futurs-souhaitables.org" target="_blank" rel="noopener noreferrer" className={styles.bioLink}>Institut des futurs souhaitables</a>
                      {' '}(2019–2023).
                    </p>
                    <p>
                      Author of the <em>Blue Century</em> saga (Actes Sud, 2021 & 2022) and the <em>Blue Revolution</em> series (Eyrolles, 2024 & 2025, revolutionbleue.fr).
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Tags thématiques ── */}
          <motion.div className={styles.tags} {...reveal(0.5)}>
            {TAG_KEYS.map(key => (
              <span key={key} className={styles.tag}>{t(key).toUpperCase()}</span>
            ))}
          </motion.div>

          {/* ── Liens réseaux ── */}
          <motion.div className={styles.links} {...reveal(0.58)}>
            <a href="https://www.linkedin.com/in/jpgoux/" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="LinkedIn">
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="3"/>
                <line x1="8" y1="11" x2="8" y2="17"/>
                <line x1="8" y1="7" x2="8" y2="7.5"/>
                <path d="M12 17v-4a2 2 0 0 1 4 0v4"/>
                <line x1="12" y1="11" x2="12" y2="17"/>
              </svg>
              <span>{t('linkedin')}</span>
            </a>
            <a href="https://www.instagram.com/jpgoux" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="Instagram">
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
              </svg>
              <span>{t('instagram')}</span>
            </a>
            <a href="https://www.youtube.com/jpgoux" target="_blank" rel="noopener noreferrer" className={styles.link} aria-label="YouTube">
              <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="5" width="20" height="14" rx="3"/>
                <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none"/>
              </svg>
              <span>{t('youtube')}</span>
            </a>
            <a href="mailto:contact@revolutionbleue.earth" className={styles.linkContact} aria-label="Contact par email">
              <svg className={styles.iconContact} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 8l10 6 10-6"/>
              </svg>
              <span>{t('contact')}</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
