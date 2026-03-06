'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { CHARTER_LANGUAGES } from '@/lib/charterLanguages';
import styles from './CharterCTA.module.css';

const LABELS = {
  fr: {
    cta:    'Lire et signer la Charte universelle',
    sub:    'Déclaration universelle · 10 missions fondamentales',
    choose: 'Choisir la langue',
  },
  en: {
    cta:    'Read and sign the Universal Charter',
    sub:    'Universal declaration · 10 fundamental missions',
    choose: 'Choose language',
  },
};

export default function CharterCTA() {
  const locale = useLocale();
  const isFr = locale !== 'en';
  const L = isFr ? LABELS.fr : LABELS.en;

  // default to current site locale
  const [selectedLang, setSelectedLang] = useState<string>(locale === 'en' ? 'en' : 'fr');

  const selectedDef = CHARTER_LANGUAGES.find((l) => l.code === selectedLang)!;

  return (
    <div className={styles.wrap}>

      {/* ── Language picker ── */}
      <div className={styles.pickerWrap}>
        <p className={styles.chooseLabel}>{L.choose}</p>
        <div className={styles.pills} role="group" aria-label={L.choose}>
          {CHARTER_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.pill} ${selectedLang === lang.code ? styles.pillActive : ''}`}
              onClick={() => setSelectedLang(lang.code)}
              title={lang.english}
              aria-pressed={selectedLang === lang.code}
            >
              <span className={styles.pillFlag} aria-hidden="true">{lang.flag}</span>
              <span className={styles.pillName}>{lang.native}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Main CTA button ── */}
      <Link
        href={`/${locale}/charter/${selectedLang}`}
        className={styles.ctaLink}
      >
        <span className={styles.ctaFlag} aria-hidden="true">{selectedDef.flag}</span>
        <span className={styles.ctaText}>{L.cta}</span>
        <span className={styles.ctaArrow} aria-hidden="true">→</span>
      </Link>

      <p className={styles.sub}>{L.sub}</p>
    </div>
  );
}
