'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import styles from './NavConstellation.module.css';

const NAV_ITEMS = [
  { key: 'paul_gardner', href: '/paul-gardner' as const },
  { key: 'revolution',   href: '/revolution'   as const },
  { key: 'charte',       href: '/charte'       as const },
  { key: 'oeuvres',      href: '/oeuvres'      as const },
  { key: 'auteur',       href: '/rejoindre'    as const },
] as const;

export default function NavConstellation() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  return (
    <motion.nav
      className={styles.nav}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeOut', delay: 8 }}
      aria-label="Navigation principale"
    >
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.key}
            href={item.href}
            className={`${styles.item} ${isActive ? styles.active : ''}`}
          >
            <span className={styles.label}>{t(item.key)}</span>
            <span className={styles.dot} />
          </Link>
        );
      })}
    </motion.nav>
  );
}
