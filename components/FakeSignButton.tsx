'use client';

import { useState } from 'react';
import styles from './FakeSignButton.module.css';

const L = {
  fr: { cta: 'Signer la Charte', soon: 'Les signatures ouvrent prochainement.' },
  en: { cta: 'Sign the Charter', soon: 'Signatures opening soon.' },
};

export default function FakeSignButton({ locale }: { locale: string }) {
  const t = L[locale as 'fr' | 'en'] ?? L.fr;
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.wrap}>
      <button className={styles.btn} onClick={() => setClicked(true)}>
        {t.cta}
      </button>
      {clicked && <p className={styles.soon}>{t.soon}</p>}
    </div>
  );
}
