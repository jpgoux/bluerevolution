'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { richText } from '@/lib/richText';
import styles from './RevolutionSection.module.css';

/* ═══════════════════════════════════════════════════════
   Pictogrammes SVG — trait fin, stroke="currentColor"
   La couleur (#00BFFF) est définie dans le CSS (.cardIcon)
   ═══════════════════════════════════════════════════════ */

const IconHomo = () => (
  /* Réseau de 6 nœuds en hexagone + 3 diagonales — chaque nœud a
     exactement 4 connexions : aucun centre dominant */
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.75}
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Hexagone */}
    <line x1={24} y1={7}  x2={39} y2={16} />
    <line x1={39} y1={16} x2={39} y2={32} />
    <line x1={39} y1={32} x2={24} y2={41} />
    <line x1={24} y1={41} x2={9}  y2={32} />
    <line x1={9}  y1={32} x2={9}  y2={16} />
    <line x1={9}  y1={16} x2={24} y2={7}  />
    {/* Diagonales — croisement sans nœud central */}
    <line x1={24} y1={7}  x2={24} y2={41} />
    <line x1={39} y1={16} x2={9}  y2={32} />
    <line x1={39} y1={32} x2={9}  y2={16} />
    {/* Nœuds */}
    <circle cx={24} cy={7}  r={1.5} fill="currentColor" stroke="none" />
    <circle cx={39} cy={16} r={1.5} fill="currentColor" stroke="none" />
    <circle cx={39} cy={32} r={1.5} fill="currentColor" stroke="none" />
    <circle cx={24} cy={41} r={1.5} fill="currentColor" stroke="none" />
    <circle cx={9}  cy={32} r={1.5} fill="currentColor" stroke="none" />
    <circle cx={9}  cy={16} r={1.5} fill="currentColor" stroke="none" />
  </svg>
);

const IconPrince = () => (
  /* Planète minuscule en bas, silhouette géante debout dessus */
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.75}
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Planète — petite, bas centre */}
    <circle cx={24} cy={42} r={4.5} />
    {/* Tête */}
    <circle cx={24} cy={9} r={2.5} />
    {/* Corps */}
    <line x1={24} y1={11.5} x2={24} y2={26} />
    {/* Bras */}
    <line x1={24} y1={17} x2={17} y2={23} />
    <line x1={24} y1={17} x2={31} y2={23} />
    {/* Jambes — pieds posés sur la planète (y=42-4.5=37.5) */}
    <line x1={24} y1={26} x2={20} y2={37} />
    <line x1={24} y1={26} x2={28} y2={37} />
  </svg>
);

const IconGrotte = () => (
  /* Caverne vue de l'intérieur — arche ouverte en bas,
     points bioluminescents qui s'élèvent vers le haut */
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.75}
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Arche : murs verticaux + voûte demi-circulaire, ouvert en bas */}
    <path d="M6 46 L6 34 A20 20 0 0 0 42 34 L42 46" />
    {/* Points bioluminescents — plus grands/denses en bas, plus légers en haut */}
    <circle cx={24} cy={40} r={1.4} fill="currentColor" stroke="none" />
    <circle cx={17} cy={34} r={1.1} fill="currentColor" stroke="none" />
    <circle cx={31} cy={32} r={1.0} fill="currentColor" stroke="none" />
    <circle cx={21} cy={26} r={0.9} fill="currentColor" stroke="none" />
    <circle cx={29} cy={23} r={0.8} fill="currentColor" stroke="none" />
    <circle cx={24} cy={18} r={0.7} fill="currentColor" stroke="none" />
    <circle cx={18} cy={14} r={0.5} fill="currentColor" stroke="none" />
    <circle cx={30} cy={13} r={0.45} fill="currentColor" stroke="none" />
  </svg>
);

const IconKlein = () => (
  /* Carré parfait — la couleur comme forme pure */
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1}
    strokeLinejoin="miter" aria-hidden="true">
    <rect x={10} y={10} width={28} height={28} />
  </svg>
);

/* ═══════════════════════════════════════════════════════
   Données des 4 concepts
   ═══════════════════════════════════════════════════════ */

const concepts = [
  { key: 'c1' as const, mod: styles.cardHomo,   Icon: IconHomo   },
  { key: 'c2' as const, mod: styles.cardPrince, Icon: IconPrince },
  { key: 'c3' as const, mod: styles.cardGrotte, Icon: IconGrotte },
  { key: 'c4' as const, mod: styles.cardKlein,  Icon: IconKlein  },
];

/* ═══════════════════════════════════════════════════════
   Composant
   ═══════════════════════════════════════════════════════ */

export default function RevolutionSection() {
  const t = useTranslations('revolution');
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

  return (
    <section className={styles.section} id="revolution">

      {/* ── Lumières bioluminescentes CSS ── */}
      <div className={styles.bioLights} aria-hidden="true">
        <span className={`${styles.light} ${styles.l1}`} />
        <span className={`${styles.light} ${styles.l2}`} />
        <span className={`${styles.light} ${styles.l3}`} />
        <span className={`${styles.light} ${styles.l4}`} />
      </div>

      <div className={styles.inner}>

        {/* ── Intro centrée ── */}
        <div className={styles.intro}>
          <motion.span className={`eyebrow ${styles.eyebrow}`} {...reveal(0)}>
            {t('eyebrow')}
          </motion.span>
          <motion.h2 className={styles.h2} {...reveal(0.06)}>
            {t('titre')}
          </motion.h2>
          <motion.p className={styles.introText} {...reveal(0.12)}>
            {t('intro')}
          </motion.p>
          <motion.div className={styles.divider} aria-hidden="true" {...reveal(0.18)} />
        </div>

        {/* ── Grille 2×2 ── */}
        <div className={styles.grid}>
          {concepts.map(({ key, mod }, i) => (
            <motion.div
              key={key}
              className={`${styles.card} ${mod}`}
              {...reveal(0.1 + i * 0.07)}
            >
              {/* Numéro grand format — remplace l'icône SVG */}
              <div className={styles.cardNumber} aria-hidden="true">
                {t(`${key}_num`)}
              </div>

              <h3 className={styles.cardTitle}>{richText(t(`${key}_titre`))}</h3>
              <p className={styles.cardText}>{richText(t(`${key}_texte`))}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
