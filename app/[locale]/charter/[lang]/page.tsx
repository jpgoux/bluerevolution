import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCharte } from '@/content/charte';
import { getLanguage, CHARTER_LANGUAGES } from '@/lib/charterLanguages';
import { richText } from '@/lib/richText';
import FakeSignButton from '@/components/FakeSignButton';
import styles from './page.module.css';

type Props = { params: { locale: string; lang: string } };

export async function generateStaticParams() {
  const locales = ['fr', 'en'];
  const langs = CHARTER_LANGUAGES.map((l) => l.code);
  return locales.flatMap((locale) => langs.map((lang) => ({ locale, lang })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = getLanguage(params.lang);
  const charte = getCharte(params.lang);
  if (!lang) return {};
  return {
    title: `${charte.titre} · Révolution Bleue`,
    description: charte.preambule[0]?.slice(0, 160) ?? '',
  };
}

export default function CharterLangPage({ params: { locale, lang } }: Props) {
  const language = getLanguage(lang);
  if (!language) notFound();

  const charte = getCharte(lang);
  const isSiteEn = locale === 'en';

  return (
    <div className={styles.page}>

      {/* ── Header minimal ── */}
      <header className={styles.header}>
        <Link href={`/${locale}/charter`} className={styles.backLink}>
          ← {isSiteEn ? 'All languages' : 'Toutes les langues'}
        </Link>
        <div className={styles.langWrap}>
          {/* Language pills — show current language + option to switch */}
          <span className={styles.currentLang}>
            {language.flag} {language.native}
          </span>
        </div>
      </header>

      <main
        className={styles.content}
        dir={charte.dir ?? 'ltr'}
        lang={lang}
      >

        {/* Titre monumental */}
        <h1 className={styles.titre}>{richText(charte.titre)}</h1>

        <hr className={styles.divider} />

        {/* Préambule */}
        <div className={styles.preambule}>
          <h2 className={styles.preambuleTitre}>
            {lang === 'fr' ? 'Préambule'
              : lang === 'es' ? 'Preámbulo'
              : lang === 'pt' ? 'Preâmbulo'
              : lang === 'de' ? 'Präambel'
              : lang === 'ru' ? 'Преамбула'
              : lang === 'ar' ? 'الديباجة'
              : lang === 'zh' ? '序言'
              : lang === 'hi' ? 'प्रस्तावना'
              : lang === 'bn' ? 'প্রস্তাবনা'
              : lang === 'id' ? 'Pembukaan'
              : 'Preamble'}
          </h2>
          {charte.preambule.map((para, i) => (
            <p key={i} className={styles.preambuleP}>{richText(para)}</p>
          ))}
        </div>

        {/* ── Compteur + Bouton signer (haut) ── */}
        <div className={styles.signerWrap}>
          <p className={styles.compteur}>
            {lang === 'fr'
              ? <><strong>2&nbsp;847</strong> <em>Homo biospheris</em> ont signé depuis <strong>43</strong> pays</>
              : lang === 'es'
              ? <><strong>2&nbsp;847</strong> <em>Homo biospheris</em> han firmado desde <strong>43</strong> países</>
              : lang === 'pt'
              ? <><strong>2&nbsp;847</strong> <em>Homo biospheris</em> assinaram de <strong>43</strong> países</>
              : lang === 'de'
              ? <><strong>2&nbsp;847</strong> <em>Homo biospheris</em> haben aus <strong>43</strong> Ländern unterzeichnet</>
              : lang === 'ru'
              ? <><strong>2&nbsp;847</strong> <em>Homo biospheris</em> подписали из <strong>43</strong> стран</>
              : lang === 'ar'
              ? <><strong>43</strong> دولة من <em>Homo biospheris</em> <strong>2&nbsp;847</strong> وقّع</>
              : lang === 'zh'
              ? <><strong>2&nbsp;847</strong> 位 <em>Homo biospheris</em> 已从 <strong>43</strong> 个国家签署</>
              : lang === 'hi'
              ? <><strong>43</strong> देशों से <strong>2&nbsp;847</strong> <em>Homo biospheris</em> ने हस्ताक्षर किए</>
              : lang === 'bn'
              ? <><strong>43</strong>টি দেশ থেকে <strong>2&nbsp;847</strong> <em>Homo biospheris</em> স্বাক্ষর করেছেন</>
              : lang === 'id'
              ? <><strong>2&nbsp;847</strong> <em>Homo biospheris</em> telah menandatangani dari <strong>43</strong> negara</>
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

        {/* Link to other languages */}
        <div className={styles.otherLangs}>
          <p className={styles.otherLangsLabel}>
            {isSiteEn ? 'Read in another language:' : 'Lire dans une autre langue :'}
          </p>
          <div className={styles.otherLangsGrid}>
            {CHARTER_LANGUAGES.filter((l) => l.code !== lang).map((l) => (
              <Link
                key={l.code}
                href={`/${locale}/charter/${l.code}`}
                className={styles.otherLangLink}
                title={l.english}
              >
                {l.flag}
              </Link>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
