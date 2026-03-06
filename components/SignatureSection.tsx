'use client';

import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { getCountries } from '@/lib/countries';
import styles from './SignatureSection.module.css';

type Stats = { total: number; countries: number };

const STORAGE_KEY = 'rb_charte_signed';

const LABELS = {
  fr: {
    compteur: (t: number, p: number) =>
      `${t.toLocaleString('fr')} Homo biospheris ont signé depuis ${p} pays`,
    prenom: 'Prénom',
    nom: 'Nom',
    ville: 'Ville',
    pays: 'Pays',
    paysDefault: 'Sélectionner un pays',
    email: 'Email (optionnel)',
    bouton: 'Signer la Charte',
    signing: 'Signature en cours…',
    confirmation: 'Bienvenue parmi les Homo biospheris.',
    deja: 'Vous avez signé la Charte.',
    erreur: 'Une erreur est survenue. Veuillez réessayer.',
    indisponible: 'Les signatures seront disponibles prochainement.',
  },
  en: {
    compteur: (t: number, p: number) =>
      `${t.toLocaleString('en')} Homo biospheris have signed from ${p} countries`,
    prenom: 'First name',
    nom: 'Last name',
    ville: 'City',
    pays: 'Country',
    paysDefault: 'Select a country',
    email: 'Email (optional)',
    bouton: 'Sign the Charter',
    signing: 'Signing…',
    confirmation: 'Welcome among the Homo biospheris.',
    deja: 'You have signed the Charter.',
    erreur: 'An error occurred. Please try again.',
    indisponible: 'Signatures will be available soon.',
  },
};

export default function SignatureSection({ locale }: { locale: string }) {
  const L = LABELS[locale as 'fr' | 'en'] ?? LABELS.fr;
  const countries = getCountries(locale);

  const [stats, setStats]       = useState<Stats>({ total: 0, countries: 0 });
  const [signed, setSigned]     = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]       = useState('');
  const [form, setForm]         = useState({
    prenom: '', nom: '', ville: '', pays: '', email: '',
  });
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) {
      setSigned(true);
    }

    if (!supabase) return;

    fetchStats();

    // Realtime : mise à jour automatique à chaque nouvelle signature
    channelRef.current = supabase
      .channel('signatures-rt')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'signatures' },
        fetchStats,
      )
      .subscribe();

    return () => {
      if (channelRef.current) supabase?.removeChannel(channelRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchStats() {
    if (!supabase) return;
    const [{ count }, { data }] = await Promise.all([
      supabase.from('signatures').select('*', { count: 'exact', head: true }),
      supabase.from('signatures').select('pays'),
    ]);
    const unique = new Set((data ?? []).map((r: { pays: string }) => r.pays)).size;
    setStats({ total: count ?? 0, countries: unique });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setError('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) return;
    setSubmitting(true);
    setError('');

    const { error: err } = await supabase.from('signatures').insert([{
      prenom: form.prenom.trim(),
      nom:    form.nom.trim(),
      ville:  form.ville.trim(),
      pays:   form.pays,
      email:  form.email.trim() || null,
    }]);

    if (err) {
      setError(L.erreur);
    } else {
      setSigned(true);
      localStorage.setItem(STORAGE_KEY, '1');
    }
    setSubmitting(false);
  }

  return (
    <section className={styles.section}>
      <hr className={styles.divider} />

      {/* Compteur temps réel */}
      {supabase && (
        <p className={styles.compteur}>
          {L.compteur(stats.total, stats.countries)}
        </p>
      )}

      {/* Message si Supabase non configuré */}
      {!supabase && (
        <p className={styles.indisponible}>{L.indisponible}</p>
      )}

      {/* Confirmation post-signature */}
      {signed ? (
        <p className={styles.confirmation}>{L.confirmation}</p>
      ) : supabase ? (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="sig-prenom">{L.prenom}</label>
              <input
                id="sig-prenom"
                name="prenom"
                type="text"
                value={form.prenom}
                onChange={handleChange}
                className={styles.input}
                required
                autoComplete="given-name"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="sig-nom">{L.nom}</label>
              <input
                id="sig-nom"
                name="nom"
                type="text"
                value={form.nom}
                onChange={handleChange}
                className={styles.input}
                required
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="sig-ville">{L.ville}</label>
              <input
                id="sig-ville"
                name="ville"
                type="text"
                value={form.ville}
                onChange={handleChange}
                className={styles.input}
                required
                autoComplete="address-level2"
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="sig-pays">{L.pays}</label>
              <select
                id="sig-pays"
                name="pays"
                value={form.pays}
                onChange={handleChange}
                className={styles.select}
                required
              >
                <option value="" disabled>{L.paysDefault}</option>
                {countries.map(c => (
                  <option
                    key={c.code}
                    value={c.code === '---' ? '' : c.code}
                    disabled={c.code === '---'}
                  >
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="sig-email">{L.email}</label>
            <input
              id="sig-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
              autoComplete="email"
            />
          </div>

          {error && <p className={styles.erreur}>{error}</p>}

          <button
            type="submit"
            className={`btn-primary ${styles.bouton}`}
            disabled={submitting}
          >
            {submitting ? L.signing : L.bouton}
          </button>
        </form>
      ) : null}
    </section>
  );
}
