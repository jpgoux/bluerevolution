# CLAUDE.md — Révolution Bleue · revolutionbleue.earth

> Ce fichier est le contexte permanent pour toutes les sessions Claude Code.
> À relire au démarrage de chaque session.

---

## 1. Vision du projet

`revolutionbleue.earth` n'est **pas** un site d'auteur. C'est l'**infrastructure d'un mouvement de transformation de l'humanité**.

La Révolution bleue est la métamorphose d'Homo Sapiens vers **Homo biospheris** — 8 milliards d'humains formant un collectif planétaire au service de Gaïa. Ce projet est construit sur 30 ans de recherche par Jean-Pierre Goux.

Le site doit faire **basculer** le visiteur. Pas l'informer — le transformer.

---

## 2. Personnage central : Paul Gardner

Paul Gardner est un astronaute américain mort seul sur la Lune après l'explosion de sa base. Avant de mourir, il a écrit ses manuscrits — la carte vers notre prochaine évolution.

**Il est le fil conducteur de tout le site.** Sa voix, ses citations, sa présence doivent baigner chaque page — invisible mais sentie partout.

⚠️ **Ne jamais le présenter comme "un personnage de roman".** Il est l'inspirateur de la Révolution bleue. Traiter sa voix comme un héritage réel.

---

## 3. Métaphore structurante : La Grotte bleue

La scène de la Grotte bleue (grotte de Waitomo, Nouvelle-Zélande) est l'image directrice.

Le visiteur vit exactement ce voyage :
1. Il entre dans l'obscurité totale
2. Des lumières bioluminescentes apparaissent progressivement
3. Il descend vers le cœur — Gaïa
4. Il repart transformé

Chaque animation, chaque transition, chaque révélation de contenu doit suivre cette logique : **l'obscurité d'abord, puis la lumière qui s'intensifie.**

---

## 4. Stack technique

```
Next.js 14+       App Router. SSG statique + SSR dynamique. Bilingue via next-intl.
Sanity.io         CMS headless pour livres, citations, ressources, concepts.
CSS Modules       Styles scopés. PAS de Tailwind. Variables CSS pour la palette.
Framer Motion     Animations fluides. Scroll-driven storytelling.
Canvas            Fond bioluminescent (particules lumineuses). PAS Three.js — trop lourd.
next-intl         Internationalisation FR/EN. Routes /fr et /en.
Vercel            Déploiement. Preview auto par branche.
```

---

## 5. Palette de couleurs (CSS variables)

```css
--noir:           #020508;   /* fond absolu */
--nuit:           #040D21;   /* fond nuit profond */
--nuit-mid:       #0A1628;   /* fond intermédiaire */
--bleu-klein:     #0033A0;   /* couleur centrale, à utiliser avec parcimonie */
--bleu-bio:       #00CFFF;   /* bioluminescent, lumières dans l'obscurité */
--bleu-bio-2:     #0088FF;   /* bioluminescent secondaire */
--blanc:          #F0F4FF;   /* texte principal sur fond sombre */
--blanc-2:        #C8D4E8;   /* texte secondaire */
--or:             #C8A84B;   /* RÉSERVÉ aux citations Paul Gardner et éléments sacrés */
--or-vif:         #E8C96B;   /* variante or pour hover */
```

**Typographie :**
- Titres : `Cormorant Garamond` (serif élégante, italique pour les citations)
- Corps : `Spectral` (lisible, fin, weight 200-300)
- Labels/eyebrow : `Spectral`, font-size ≈ 0.6rem, letter-spacing 0.4em, uppercase

---

## 6. Architecture des 6 espaces

```
① Le Seuil          → app/[locale]/page.tsx
② La Révolution     → app/[locale]/revolution/
③ Paul Gardner      → app/[locale]/paul-gardner/
④ Les Œuvres        → app/[locale]/oeuvres/ + [slug]/
⑤ Les Ressources    → app/[locale]/ressources/
⑥ Rejoindre         → app/[locale]/rejoindre/
```

Navigation : **6 points lumineux** (constellation, pas de barre classique). Labels visibles au hover uniquement. Apparaît progressivement, jamais dès l'entrée.

---

## 7. Composants clés

```
StarField.tsx              Canvas bioluminescent (fond permanent, 300+ points)
PaulGardnerQuote.tsx       Citations flottantes de Paul Gardner (or, italic)
BookCarousel.tsx           Carrousel immersif des 5 livres
ConceptConstellation.tsx   Carte interactive des concepts
Charter10.tsx              Les 10 missions d'Homo biospheris (interactif)
CustomCursor.tsx           Curseur custom : point bleu-bio + anneau
```

---

## 8. Règle absolue — Mobile-first

**Tout composant et toute page doivent être conçus mobile-first et fonctionner parfaitement sur tous les écrans.**

Le tester fait partie intégrante de chaque session — ce n'est pas une étape optionnelle en fin de projet.

### Checklist responsive à valider à chaque session

- [ ] **Typographie** — `clamp()` pour les tailles de titre. `letter-spacing` réduit sur mobile (0.5em desktop peut déborder sur 375px).
- [ ] **Formulaires** — `font-size ≥ 1rem (16px)` sur tous les `<input>` pour éviter le zoom automatique iOS. Formulaires fluides avec `flex: 1` et `min-width: 0`, pas de `width` fixe en pixels.
- [ ] **Espacements** — Marges et paddings réduits sur mobile. `min-height: 100dvh` (pas `100vh`) pour corriger le bug de l'address bar iOS.
- [ ] **Safe area** — `env(safe-area-inset-bottom)` sur les éléments fixes en bas (ex. ScrollCue). `viewport-fit=cover` dans le layout.
- [ ] **Zones tactiles** — Minimum 44×44px sur tous les boutons et liens interactifs (`padding` si nécessaire). `-webkit-tap-highlight-color: transparent` sur les boutons custom.
- [ ] **Canvas et animations** — Réduire le nombre d'éléments animés sur mobile. Throttle à 30fps max. Éviter `createRadialGradient` en boucle sur mobile GPU.
- [ ] **`prefers-reduced-motion`** — Toutes les animations CSS ont un bloc `@media (prefers-reduced-motion: reduce)`. Framer Motion utilise `useReducedMotion()`.
- [ ] **Navigation** — La nav constellation est `display: none` sur mobile (≤ 768px). Prévoir une alternative d'accès à la navigation sur mobile pour les prochaines sessions.
- [ ] **Breakpoints** — `≤ 768px` (tablette/mobile), `≤ 390px` (petits mobiles : iPhone SE, Pixel). Tester aux deux.
- [ ] **`backdrop-filter`** — Toujours prévoir un `@supports not (backdrop-filter: blur(1px))` avec un fond opaque en fallback (Firefox Android).

### Ce qu'il ne faut JAMAIS faire

- ❌ Écrire du CSS desktop puis espérer que le mobile "se débrouille"
- ❌ Mettre une `width` fixe en pixels sur un `<input>` sans breakpoint mobile
- ❌ Utiliser `100vh` seul — toujours doubler avec `100dvh`
- ❌ Oublier le `viewport-fit=cover` dans le layout
- ❌ Des animations canvas non throttlées sur mobile

---

## 9. Ce qu'il ne faut SURTOUT PAS faire (vision et contenu)

### Posture
- ❌ Mettre Jean-Pierre Goux au centre — il est au service du mouvement
- ❌ Site de vente de livres — on transforme, on ne vend pas
- ❌ Ton militant écologiste anxiogène — utopie joyeuse et enthousiaste
- ❌ Dérive mystique/ésotérique — équilibre science + poésie

### Design
- ❌ Menu de navigation classique dès l'entrée — la nav apparaît après le seuil
- ❌ Personnages fantomatiques ou silhouettes ésotériques
- ❌ Animations "wow" spectaculaires — penser méditation, pas blockbuster
- ❌ Étoiles kitsch ou particules génériques — traiter avec l'exigence du bleu Klein
- ❌ Three.js — trop lourd, Canvas natif suffit

### Contenu
- ❌ Révéler le secret de la couverture du Petit Prince abruptement — c'est le cœur du voyage initiatique
- ❌ Les 10 missions comme liste bureaucratique — ce sont des fonctions biologiques de Gaïa
- ❌ Annoncer le Petit Livre bleu avant l'automne 2026 — la section reste dormante
- ❌ Présenter Paul Gardner comme personnage fictif

### Traduction FR/EN — IMPÉRATIF
- ❌ **Ne JAMAIS hardcoder du texte visible en français uniquement.** Tout contenu affiché à l'utilisateur doit exister dans `messages/fr.json` ET `messages/en.json`, ou être rendu conditionnellement via `useLocale()` / `isFr` avec les deux versions JSX.
- ❌ Ne jamais laisser un tableau statique de chaînes en français (ex. TAGS, types de livres) sans passer par les fichiers de traduction.
- ✅ Vérifier systématiquement en fin de session que `http://localhost:XXXX/en` affiche tout en anglais.
- ✅ Pour les textes enrichis (liens, balises `<em>`) : utiliser un rendu conditionnel `isFr ? <JSX FR> : <JSX EN>` plutôt que de mettre du HTML dans les JSON.

### Écriture — Style humain IMPÉRATIF
- ❌ **Ne JAMAIS utiliser le tiret cadratin (—) dans les textes visibles par l'utilisateur.** C'est la signature la plus reconnaissable d'un texte rédigé par IA. Reformuler systématiquement avec une ponctuation naturelle : virgule, deux-points, point, parenthèse, ou restructurer la phrase.
- ❌ Ne pas utiliser de formules creuses ou abstraites qui sonnent "IA" : "naviguer vers", "tisser des liens entre", "au croisement de", "au cœur de l'expérience", etc.
- ✅ Phrases courtes. Rythme irrégulier. Ponctuation humaine.

---

## 10. Contenu — Les 5 livres

| Identifiant | Série | Titre | Année |
|-------------|-------|-------|-------|
| `rb-1` | Révolution Bleue · I | La Petite Princesse | 2024 |
| `rb-2` | Révolution Bleue · II | La Clef des Songes | 2025 |
| `sb-1` | Siècle Bleu · I | Le Rêve de Gaïa | 2012 |
| `sb-2` | Siècle Bleu · II | Ombres et Lumières | 2012 |
| `plb` | Essai | Le Petit Livre Bleu | Automne 2026 |

---

## 11. Concepts clés de l'univers

1. **Homo biospheris** — La prochaine étape évolutive. 8 milliards d'humains formant un collectif planétaire au service de Gaïa.
2. **Le secret du Petit Prince** — Sur la couverture depuis 1943 : un géant debout sur sa planète, en prenant soin. Saint-Exupéry avait vu et caché l'avenir de l'espèce.
3. **La Grotte bleue** — Le lieu initiatique où Abel découvre que Gaïa existe. Cœur du roman et métaphore du site.
4. **Le bleu Klein** — La couleur à la fréquence de l'Amour. IKB #0033A0. Yves Klein avait trouvé la teinte de la mutation humaine.

---

## 12. La Charte des 10 missions d'Homo biospheris

```
01 · Soigner la Biosphère
02 · Harmonie humaine
03 · Prospérité du vivant
04 · Émerveillement
05 · Créer des liens
06 · Circuler l'amour
07 · Enrichir le monde
08 · Mystères de l'âme
09 · Explorer le Cosmos
10 · Protéger la Terre
```

---

## 13. Roadmap sessions

| Session | Objectif |
|---------|----------|
| **1** ✓ | Init Next.js. CLAUDE.md. Variables CSS. Structure fichiers. |
| **2** ✓ | Le Seuil — page d'entrée. StarField. CustomCursor. Newsletter. LangSwitcher. NavConstellation. ScrollCue. |
| **2b** ✓ | Optimisation mobile. DPR canvas. Throttle 30fps. iOS font-size. safe-area. prefers-reduced-motion. |
| **3** ✓ | Section Paul Gardner sur Le Seuil. Grille 2 col. Vidéo 16/9 placeholder. Scroll reveal Framer Motion. |
| **4** ✓ | Section La Révolution bleue. Intro centrée. Grille 2×2 concepts. Lumières bioluminescentes CSS. Scroll reveal staggeré. |
| **5** ✓ | Section La Charte — grille 5×2, 10 fonctions de Gaïa, numéros Cormorant glow. Section Les Œuvres — carrousel 5 livres, couleurs distinctes, swipe mobile, livre dormant. |
| **6** ✓ | Section L'Auteur — photo placeholder, biographie sobre, liens réseaux. Footer — marque, nav, copyright, switch langue. |
| 7 | Paul Gardner page dédiée. Manuscrits. Citations flottantes. Les Ressources. |
| 8 | Rejoindre. Pages individuelles livres. Bilingue FR/EN complet. |
| 9 | Sanity CMS. SEO. Vercel deploy. |

---

## 14. Auteur

**Jean-Pierre Goux** — Ingénieur · Écrivain · Explorateur de futurs  
Vingt ans dans la transition énergétique, trente ans de recherche sur l'évolution humaine.  
Découvreur du secret caché dans la couverture du Petit Prince, reconnu par Olivier d'Agay (neveu de Saint-Exupéry).

---

*Révolution Bleue · Jean-Pierre Goux · Mars 2026*
