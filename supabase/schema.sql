-- Table des signataires de la Charte universelle d'Homo biospheris
-- À exécuter dans l'éditeur SQL de votre projet Supabase

CREATE TABLE IF NOT EXISTS signatures (
  id          UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  prenom      TEXT        NOT NULL,
  nom         TEXT        NOT NULL,
  ville       TEXT        NOT NULL,
  pays        TEXT        NOT NULL,
  email       TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour les requêtes de comptage par pays
CREATE INDEX IF NOT EXISTS signatures_pays_idx ON signatures (pays);

-- Activer Row Level Security
ALTER TABLE signatures ENABLE ROW LEVEL SECURITY;

-- Tout le monde peut insérer une signature
CREATE POLICY "Anyone can sign"
  ON signatures FOR INSERT
  WITH CHECK (true);

-- Tout le monde peut lire les signatures (pour les compteurs)
CREATE POLICY "Anyone can read signatures"
  ON signatures FOR SELECT
  USING (true);

-- Activer Realtime sur cette table (dans Supabase Dashboard > Database > Replication)
-- ALTER PUBLICATION supabase_realtime ADD TABLE signatures;
