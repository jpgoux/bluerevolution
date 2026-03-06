export type Mission = {
  numero: number;
  titre: string;
  texte: string;
};

export type CharteContent = {
  titre: string;
  epigraphe: string;
  preambule: string[];
  missions: Mission[];
  proclamation: string;
};

export const charteFr: CharteContent = {
  titre: "Charte universelle d'Homo biospheris",
  epigraphe: "La plus belle des histoires d'amour avec la Biosphère",
  preambule: [
    "Nous, Homo sapiens, conscients de notre place dans la trame du vivant et de l'urgence des crises auxquelles nous faisons face, affirmons notre engagement à devenir Homo biospheris, un être collectif pleinement intégré au sein de la Biosphère. Prenant acte que notre destin est lié à celui de tous les êtres vivants et à l'équilibre fragile de la Terre, nous assumons pleinement notre rôle d'organe de la Biosphère, Gaïa, dont nous reconnaissons l'existence.",
    "Conscients de nos erreurs passées, animés par la volonté de nous unir et de nous élever, nous déclarons qu'il est temps d'évoluer d'Homo sapiens, 8 milliards d'individus isolés et inattentifs aux interdépendances, vers Homo biospheris, humanité unie, gardienne et nourricière de la vie, incarnée par le Petit Prince. Dans cet esprit de responsabilité, d'harmonie et de sagesse, nous proclamons les dix missions fondamentales de l'organe que nous constituons, ensemble. Ces fonctions guideront nos actions individuelles et notre métamorphose collective par la Révolution bleue.",
  ],
  missions: [
    {
      numero: 1,
      titre: "Prendre soin de la Biosphère",
      texte: "Homo biospheris proclame qu'il appartient à la Biosphère. Il s'engage à préserver, régénérer et honorer les écosystèmes. Fort de ses milliards d'yeux et de mains, il veille en particulier à la pureté de l'air, de l'eau et des sols, et agit en gardien de la Biosphère. Chaque État, région, ville, entreprise et individu doit assumer cette responsabilité sur son territoire, et doit commencer à remédier aux erreurs passées.",
    },
    {
      numero: 2,
      titre: "Veiller à l'harmonie, la santé et l'épanouissement humains",
      texte: "Homo biospheris reconnaît en chaque être humain le reflet de l'unité du vivant. Il œuvre pour que tous puissent vivre dans la dignité, la liberté et la santé, en harmonie avec autrui. Il favorise le maintien d'un cadre propice à l'épanouissement et au développement du potentiel de chacun, dans le respect des vulnérabilités de tous, des écosystèmes et des limites planétaires.",
    },
    {
      numero: 3,
      titre: "Garantir la prospérité de tous les êtres vivants",
      texte: "Homo biospheris considère chaque forme de vie comme essentielle à l'équilibre de la Biosphère. Il respecte leur valeur intrinsèque, préserve la diversité des écosystèmes et veille à une prospérité partagée entre humains, animaux, végétaux et autres organismes microscopiques, en privilégiant dans chaque décision une vision à long terme au bénéfice de l'ensemble de la Biosphère.",
    },
    {
      numero: 4,
      titre: "S'émerveiller",
      texte: "Homo biospheris reconnaît la beauté du monde. Il cultive l'émerveillement et la contemplation, source de gratitude, de créativité et de lien profond avec la Terre. Il honore le miracle d'être vivant et d'appartenir à cette planète extraordinaire.",
    },
    {
      numero: 5,
      titre: "Vivre en résonance, créer des liens et de la beauté",
      texte: "Homo biospheris s'accorde aux rythmes du vivant et de l'Univers. Il célèbre l'harmonie et les cycles de la nature. Il cherche à percevoir, par son cœur, les liens profonds qui unissent les êtres et les choses. Il est à l'écoute de l'impact de ses décisions sur ces connexions subtiles et sur l'ensemble de la Biosphère. Il transforme chaque action en un geste créateur de beauté et de relation.",
    },
    {
      numero: 6,
      titre: "Faire circuler l'amour",
      texte: "Homo biospheris sait que l'amour est l'énergie vitale de l'existence et que son absence a été à l'origine de nombreux maux. Il nourrit cet amour, le partage et le fait rayonner, créant ainsi un réseau d'entraide, de confiance et de compassion propice à l'évolution de tous.",
    },
    {
      numero: 7,
      titre: "Comprendre et enrichir le monde matériel",
      texte: "Homo biospheris s'inscrit dans le grand mouvement de l'évolution qui façonne le réel. Il observe, étudie et approfondit ses connaissances, que ce soit en science, en technique ou en art, pour comprendre la Terre et l'Univers qui nous entoure. Il enrichit le monde matériel de ses créations, en veillant à ce qu'elles fassent progresser le savoir, servent la Biosphère dans son ensemble, et participent à son équilibre plutôt qu'à son altération.",
    },
    {
      numero: 8,
      titre: "Se connecter aux mystères du monde immatériel",
      texte: "Homo biospheris reconnaît que l'Univers est pétri de matière et de conscience. Il en explore les dimensions invisibles, respecte la pluralité des croyances et accueille l'inconnu comme une source de sagesse et d'évolution.",
    },
    {
      numero: 9,
      titre: "Explorer le Cosmos et disséminer la conscience",
      texte: "Homo biospheris porte son regard au-delà de la Terre, vers l'infini du Cosmos. Il explore non pour conquérir, mais pour comprendre et intégrer les lois qui unissent toute existence. Il s'efforce à chercher ailleurs d'autres formes de vie et à disséminer la conscience dans l'Univers, tout en préservant l'intégrité et la beauté de la Biosphère.",
    },
    {
      numero: 10,
      titre: "Protéger la Biosphère des dangers spatiaux",
      texte: "Homo biospheris est conscient de l'existence de menaces venues de l'espace, telles que les collisions d'astéroïdes. Au nom de toutes les espèces, il développe des stratégies de protection et veille sur la Biosphère comme un gardien du vivant.",
    },
  ],
  proclamation:
    "En proclamant ces missions, nous posons les fondations de la civilisation d'Homo biospheris : une humanité unie, apaisée et dévouée à la vie. Ces principes guideront nos pensées, nos paroles et nos actes, afin d'écrire ensemble la plus belle des histoires d'amour avec la Biosphère.",
};

export const charteEn: CharteContent = {
  titre: "Universal Charter of Homo biospheris",
  epigraphe: "The most beautiful love story with the Biosphere",
  preambule: [
    "We, Homo sapiens, conscious of our place in the web of life and of the urgency of the crises we face, affirm our commitment to becoming Homo biospheris, a collective being fully integrated within the Biosphere. Acknowledging that our destiny is bound to that of all living beings and to the fragile balance of the Earth, we fully assume our role as an organ of the Biosphere, Gaia, whose existence we recognize.",
    "Conscious of our past mistakes, driven by the will to unite and to elevate ourselves, we declare that it is time to evolve from Homo sapiens, 8 billion isolated individuals inattentive to interdependencies, toward Homo biospheris, a united humanity, guardian and nurturer of life, embodied by the Little Prince. In this spirit of responsibility, harmony and wisdom, we proclaim the ten fundamental missions of the organ we constitute, together. These functions will guide our individual actions and our collective metamorphosis through the Blue Revolution.",
  ],
  missions: [
    {
      numero: 1,
      titre: "Caring for the Biosphere",
      texte: "Homo biospheris proclaims that it belongs to the Biosphere. It commits to preserving, regenerating and honoring ecosystems. With its billions of eyes and hands, it watches over the purity of air, water and soil, and acts as guardian of the Biosphere. Every State, region, city, company and individual must take on this responsibility in their territory, and must begin to remedy past mistakes.",
    },
    {
      numero: 2,
      titre: "Watching over human harmony, health and flourishing",
      texte: "Homo biospheris recognizes in every human being the reflection of the unity of life. It works so that all may live in dignity, freedom and health, in harmony with others. It fosters the maintenance of conditions conducive to the flourishing and development of each person's potential, in respect of everyone's vulnerabilities, ecosystems and planetary boundaries.",
    },
    {
      numero: 3,
      titre: "Ensuring the prosperity of all living beings",
      texte: "Homo biospheris considers every form of life as essential to the balance of the Biosphere. It respects their intrinsic value, preserves the diversity of ecosystems and ensures a shared prosperity among humans, animals, plants and other microscopic organisms, favoring in every decision a long-term vision for the benefit of the entire Biosphere.",
    },
    {
      numero: 4,
      titre: "Wondering",
      texte: "Homo biospheris recognizes the beauty of the world. It cultivates wonder and contemplation, sources of gratitude, creativity and deep connection with the Earth. It honors the miracle of being alive and of belonging to this extraordinary planet.",
    },
    {
      numero: 5,
      titre: "Living in resonance, creating bonds and beauty",
      texte: "Homo biospheris attunes itself to the rhythms of life and the Universe. It celebrates the harmony and cycles of nature. It seeks to perceive, through its heart, the deep bonds that unite beings and things. It listens to the impact of its decisions on these subtle connections and on the entire Biosphere. It transforms every action into a gesture that creates beauty and relationship.",
    },
    {
      numero: 6,
      titre: "Circulating love",
      texte: "Homo biospheris knows that love is the vital energy of existence and that its absence has been at the root of many ills. It nurtures this love, shares it and makes it radiate, creating a network of mutual aid, trust and compassion conducive to the evolution of all.",
    },
    {
      numero: 7,
      titre: "Understanding and enriching the material world",
      texte: "Homo biospheris is part of the great movement of evolution that shapes reality. It observes, studies and deepens its knowledge, whether in science, technology or art, to understand the Earth and the Universe around us. It enriches the material world with its creations, ensuring that they advance knowledge, serve the Biosphere as a whole, and contribute to its balance rather than its alteration.",
    },
    {
      numero: 8,
      titre: "Connecting to the mysteries of the immaterial world",
      texte: "Homo biospheris recognizes that the Universe is woven of matter and consciousness. It explores its invisible dimensions, respects the plurality of beliefs and welcomes the unknown as a source of wisdom and evolution.",
    },
    {
      numero: 9,
      titre: "Exploring the Cosmos and disseminating consciousness",
      texte: "Homo biospheris turns its gaze beyond the Earth, toward the infinity of the Cosmos. It explores not to conquer, but to understand and integrate the laws that unite all existence. It strives to seek other forms of life elsewhere and to disseminate consciousness throughout the Universe, while preserving the integrity and beauty of the Biosphere.",
    },
    {
      numero: 10,
      titre: "Protecting the Biosphere from cosmic threats",
      texte: "Homo biospheris is aware of the existence of threats from space, such as asteroid collisions. In the name of all species, it develops protection strategies and watches over the Biosphere as a guardian of life.",
    },
  ],
  proclamation:
    "In proclaiming these missions, we lay the foundations of the civilization of Homo biospheris: a united, peaceful humanity devoted to life. These principles will guide our thoughts, words and actions, so that we may write together the most beautiful love story with the Biosphere.",
};

export function getCharte(locale: string): CharteContent {
  return locale === "en" ? charteEn : charteFr;
}
