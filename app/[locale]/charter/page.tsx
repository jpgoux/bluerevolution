import type { Metadata } from 'next';
import Link from 'next/link';
import { CHARTER_LANGUAGES } from '@/lib/charterLanguages';
import styles from './page.module.css';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isFr = params.locale !== 'en';
  return {
    title: isFr
      ? "Charte universelle d'Homo biospheris · Toutes les langues"
      : "Universal Charter of Homo biospheris · All Languages",
    description: isFr
      ? "Lisez et signez la Charte universelle d'Homo biospheris dans votre langue."
      : "Read and sign the Universal Charter of Homo biospheris in your language.",
  };
}

export default function CharterPage({ params: { locale } }: Props) {
  const isFr = locale !== 'en';

  return (
    <div className={styles.page}>

      {/* ── Header minimal ── */}
      <header className={styles.header}>
        <Link href={`/${locale}`} className={styles.backLink}>
          ← {isFr ? 'Révolution Bleue' : 'Blue Revolution'}
        </Link>
        <div className={styles.langWrap}>
          <Link href="/fr/charter" className={!isFr ? styles.langInactive : styles.langActive}>FR</Link>
          <span className={styles.langSep}>/</span>
          <Link href="/en/charter" className={isFr ? styles.langInactive : styles.langActive}>EN</Link>
        </div>
      </header>

      <main className={styles.content}>

        {/* Titre */}
        <div className={styles.hero}>
          <p className={styles.eyebrow}>
            {isFr ? 'DOCUMENT FONDATEUR' : 'FOUNDING DOCUMENT'}
          </p>
          <h1 className={styles.titre}>
            {isFr
              ? <>Charte universelle<br />d&rsquo;<em>Homo biospheris</em></>
              : <>Universal Charter<br />of <em>Homo biospheris</em></>}
          </h1>
          <p className={styles.subtitle}>
            {isFr
              ? 'Disponible en 11 langues · Lisez, signez, transmettez'
              : 'Available in 11 languages · Read, sign, pass it on'}
          </p>
        </div>

        {/* Grille des 11 langues */}
        <div className={styles.grid}>
          {CHARTER_LANGUAGES.map((lang) => (
            <Link
              key={lang.code}
              href={`/${locale}/charter/${lang.code}`}
              className={styles.card}
            >
              <span className={styles.flag} aria-hidden="true">{lang.flag}</span>
              <span className={styles.nativeName}>{lang.native}</span>
              <span className={styles.englishName}>{lang.english}</span>
            </Link>
          ))}
        </div>

        {/* Sous-texte */}
        <p className={styles.note}>
          {isFr
            ? 'Ce texte a la portée de la Déclaration universelle des droits de l\'homme.'
            : 'This text carries the weight of the Universal Declaration of Human Rights.'}
        </p>

      </main>
    </div>
  );
}
