'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import StarField from '@/components/StarField';
import CustomCursor from '@/components/CustomCursor';
import NavConstellation from '@/components/NavConstellation';
import LangSwitcher from '@/components/LangSwitcher';
import PaulGardnerSection from '@/components/PaulGardnerSection';
import RevolutionSection from '@/components/RevolutionSection';
import CharteSection from '@/components/CharteSection';
import OeuvresSection from '@/components/OeuvresSection';
import AuteurSection from '@/components/AuteurSection';
import SiteFooter from '@/components/SiteFooter';
import SoundButton from '@/components/SoundButton';
import { richText } from '@/lib/richText';
import styles from './page.module.css';

export default function SeuilPage() {
  const t = useTranslations('seuil');
  const locale = useLocale();
  const shouldReduce = useReducedMotion();

  // Timings fidèles à la maquette — réduits à 0 si prefers-reduced-motion
  const fadeUp = (delay: number, duration = 3) =>
    shouldReduce
      ? ({
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        } as const)
      : ({
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration, ease: [0.25, 0.1, 0.25, 1] as const, delay },
        } as const);

  const fadeIn = (delay: number, duration = 2) =>
    shouldReduce
      ? ({
          initial: { opacity: 1 },
          animate: { opacity: 1 },
          transition: { duration: 0 },
        } as const)
      : ({
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration, ease: 'easeOut' as const, delay },
        } as const);

  return (
    <>
      {/* ── Fond spatial animé ── */}
      <StarField />

      {/* ── Couches d'atmosphère (fixes) ── */}
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.earthHalo} aria-hidden="true" />
      <div className={styles.moonGround} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      {/* ── Chrome — apparaît progressivement ── */}
      <motion.div
        className={styles.siteLabel}
        aria-hidden="true"
        {...fadeIn(1.8, 1.0)}
      >
        {locale === 'en' ? 'Blue Revolution' : 'Révolution Bleue'}
      </motion.div>

      <LangSwitcher />
      <NavConstellation />

      {/* ── Curseur custom (desktop uniquement) ── */}
      <CustomCursor />

      {/* ── Contenu principal ── */}
      <main className={styles.main}>
        <section className={styles.seuil}>

          {/* Citation d'ouverture — Paul Gardner */}
          <div className={styles.paulCitation}>
            <motion.p {...fadeUp(0.3, 1.5)}>
              {t('citation')}
            </motion.p>
            <motion.cite {...fadeIn(1.5, 0.9)}>
              {t('cite_auteur')}
            </motion.cite>
          </div>

          {/* Titre : RÉVOLUTION / BLEUE (contour) */}
          <motion.div
            className={`${styles.heroTitle}${locale === 'en' ? ` ${styles.heroTitleEn}` : ''}`}
            {...(shouldReduce
              ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
              : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1.8, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.7 } }
            )}
          >
            <h1>
              {locale === 'en' ? (
                <>
                  <em>{t('titre_bleu')}</em>
                  {t('titre')}
                </>
              ) : (
                <>
                  {t('titre')}
                  <em>{t('titre_bleu')}</em>
                </>
              )}
            </h1>
            <p className={styles.sub}>{t('sous_titre')}</p>
            <p className={styles.sub}>{richText(t('sous_titre_2'))}</p>
          </motion.div>

          {/* Newsletter discrète */}
          <motion.div className={styles.nlWrap} {...fadeIn(2.2, 0.9)}>
            <span className={styles.nlLabel}>{t('nl_label')}</span>
            <form
              className={styles.nlForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t('nl_placeholder')}
                className={styles.nlInput}
                aria-label={t('nl_placeholder')}
                autoComplete="email"
              />
              <button type="submit" className={styles.nlButton}>
                {t('nl_bouton')}
              </button>
            </form>
          </motion.div>

        </section>

        {/* ── Section Paul Gardner ── */}
        <PaulGardnerSection
          videoUrl="/trailer.mp4"
          pdfUrl={null}
        />

        {/* ── Section La Révolution bleue ── */}
        <RevolutionSection />

        {/* ── Section La Charte — 10 fonctions de Gaïa ── */}
        <CharteSection />

        {/* ── Section Les Œuvres — carrousel 5 livres ── */}
        <OeuvresSection />

        {/* ── Section L'Auteur ── */}
        <AuteurSection />

      </main>

      {/* ── Footer ── */}
      <SiteFooter />

      {/* ── Bouton son ambiant ── */}
      <SoundButton />

    </>
  );
}
