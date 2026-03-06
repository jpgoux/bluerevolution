import type { Metadata } from 'next';
import Link from 'next/link';
import { getCharte } from '@/content/charte';
import { richText } from '@/lib/richText';
import FakeSignButton from '@/components/FakeSignButton';
import styles from './page.module.css';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isFr = params.locale !== 'en';
  return {
    title: isFr
      ? "Charte universelle d'Homo biospheris · Révolution Bleue"
      : "Universal Charter of Homo biospheris · Blue Revolution",
    description: isFr
      ? "La plus belle des histoires d'amour avec la Biosphère. Lisez et signez la Charte universelle d'Homo biospheris."
      : "The most beautiful love story with the Biosphere. Read and sign the Universal Charter of Homo biospheris.",
  };
}

export default function ChartePage({ params: { locale } }: Props) {
  const charte = getCharte(locale);
  const isFr   = locale !== 'en';

  return (
    <div className={styles.page}>

      {/* ── Header minimal ── */}
      <header className={styles.header}>
        <Link href={`/${locale}`} className={styles.backLink}>
          ← {isFr ? 'Révolution Bleue' : 'Blue Revolution'}
        </Link>
        <div className={styles.langWrap}>
          <Link href="/fr" className={!isFr ? styles.langInactive : styles.langActive}>FR</Link>
          <span className={styles.langSep}>/</span>
          <Link href="/en" className={isFr ? styles.langInactive : styles.langActive}>EN</Link>
        </div>
      </header>

      <main className={styles.content}>

        {/* Titre monumental */}
        <h1 className={styles.titre}>{richText(charte.titre)}</h1>

        <hr className={styles.divider} />

        {/* Préambule */}
        <div className={styles.preambule}>
          <h2 className={styles.preambuleTitre}>
            {isFr ? 'Préambule' : 'Preamble'}
          </h2>
          {charte.preambule.map((para, i) => (
            <p key={i} className={styles.preambuleP}>{richText(para)}</p>
          ))}
        </div>

        {/* ── Compteur + Bouton signer (haut) ── */}
        <div className={styles.signerWrap}>
          <p className={styles.compteur}>
            {isFr
              ? <><strong>2&nbsp;847</strong> <em>Homo biospheris</em> ont signé depuis <strong>43</strong> pays</>
              : <><strong>2,847</strong> <em>Homo biospheris</em> have signed from <strong>43</strong> countries</>}
          </p>
          <FakeSignButton locale={locale} />
        </div>

        <hr className={styles.divider} />

        {/* ── Les 10 Missions ── */}
        <ol className={styles.missions}>
          {charte.missions.map((mission) => (
            <li key={mission.numero} className={styles.mission}>
              <span className={styles.missionNumero}>
                {String(mission.numero).padStart(2, '0')}
              </span>
              <h2 className={styles.missionTitre}>{richText(mission.titre)}</h2>
              <p className={styles.missionTexte}>{richText(mission.texte)}</p>
            </li>
          ))}
        </ol>

        {/* Proclamation finale */}
        <div className={styles.proclamationWrap}>
          <span className={styles.etoiles} aria-hidden="true">✦ ✦ ✦</span>
          <p className={styles.proclamation}>{richText(charte.proclamation)}</p>
        </div>

        {/* ── Bouton signer (bas) ── */}
        <div className={styles.signerWrap}>
          <FakeSignButton locale={locale} />
        </div>

      </main>
    </div>
  );
}
