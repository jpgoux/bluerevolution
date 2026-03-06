import React from 'react';

// Expressions toujours rendues en italique sur le site
const ITALIC_TERMS = [
  'Homo biospheris',
  'Révolution bleue',
  'Blue Revolution',
  'Petit Prince',
  'Little Prince',
];

/**
 * Rend un texte en italisant automatiquement les termes définis
 * et en respectant les sauts de ligne (\n).
 */
export function richText(text: string): React.ReactNode {
  // Découpe le texte en lignes, gère les \n
  return text.split('\n').map((line, li) => (
    <React.Fragment key={li}>
      {li > 0 && <br />}
      {italicize(line, ITALIC_TERMS)}
    </React.Fragment>
  ));
}

/** Applique l'italique récursivement pour chaque terme */
function italicize(text: string, terms: string[]): React.ReactNode {
  if (terms.length === 0) return text;
  const [term, ...rest] = terms;
  const parts = text.split(term);
  if (parts.length === 1) return italicize(text, rest);
  return parts.map((part, i, arr) => (
    <React.Fragment key={i}>
      {italicize(part, rest)}
      {i < arr.length - 1 && <em>{term}</em>}
    </React.Fragment>
  ));
}
