'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const NAV = [
    { key: 'nav_paul',      href: '#s-paul' },
    { key: 'nav_revolution', href: '#s-revolution' },
    { key: 'nav_charte',    href: '#s-charte' },
    { key: 'nav_oeuvres',   href: '#s-oeuvres' },
    { key: 'nav_auteur',    href: '#s-auteur' },
  ] as const;

  return (
    <footer className={styles.footer}>
      {/* Marque */}
      <span className={styles.marque}>{t('marque')}</span>

      {/* Navigation */}
      <ul className={styles.nav} role="list">
        {NAV.map(({ key, href }) => (
          <li key={key}>
            <a href={href} className={styles.navLink}>
              {t(key)}
            </a>
          </li>
        ))}
        <li>
          <a href="#" className={styles.navLink}>
            {t('mentions')}
          </a>
        </li>
      </ul>

      {/* Copyright + langue */}
      <div className={styles.right}>
        <span className={styles.copy}>{t('copyright')}</span>
        <div className={styles.langSwitch}>
          <Link href="/fr" locale={false} className={locale === 'fr' ? styles.langActive : styles.langBtn}>FR</Link>
          <span className={styles.langSep}>/</span>
          <Link href="/en" locale={false} className={locale === 'en' ? styles.langActive : styles.langBtn}>EN</Link>
        </div>
      </div>
    </footer>
  );
}
