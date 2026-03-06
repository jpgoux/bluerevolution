'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import styles from './LangSwitcher.module.css';

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (lng: string) => {
    router.replace(pathname, { locale: lng });
  };

  return (
    <motion.div
      className={styles.lang}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut', delay: 1.2 }}
    >
      <button
        className={locale === 'fr' ? styles.active : ''}
        onClick={() => switchTo('fr')}
        aria-label="Version française"
      >
        FR
      </button>
      <span aria-hidden="true">/</span>
      <button
        className={locale === 'en' ? styles.active : ''}
        onClick={() => switchTo('en')}
        aria-label="English version"
      >
        EN
      </button>
    </motion.div>
  );
}
