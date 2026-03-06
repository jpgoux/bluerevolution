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
  dir?: 'ltr' | 'rtl';
};

// ─────────────────────────────────────────────────────────
// FRANÇAIS
// ─────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────
// ESPAÑOL
// ─────────────────────────────────────────────────────────
export const charteEs: CharteContent = {
  titre: "Carta Universal de Homo biospheris",
  epigraphe: "La más bella historia de amor con la Biosfera",
  preambule: [
    "Nosotros, Homo sapiens, conscientes de nuestro lugar en la trama de la vida y de la urgencia de las crisis a las que nos enfrentamos, afirmamos nuestro compromiso de convertirnos en Homo biospheris, un ser colectivo plenamente integrado en la Biosfera. Reconociendo que nuestro destino está ligado al de todos los seres vivos y al frágil equilibrio de la Tierra, asumimos plenamente nuestro papel como órgano de la Biosfera, Gaia, cuya existencia reconocemos.",
    "Conscientes de nuestros errores pasados, animados por la voluntad de unirnos y elevarnos, declaramos que ha llegado el momento de evolucionar de Homo sapiens, 8 mil millones de individuos aislados e inatentos a las interdependencias, hacia Homo biospheris, humanidad unida, guardiana y nutricia de la vida, encarnada por el Principito. En este espíritu de responsabilidad, armonía y sabiduría, proclamamos las diez misiones fundamentales del órgano que constituimos, juntos. Estas funciones guiarán nuestras acciones individuales y nuestra metamorfosis colectiva a través de la Revolución Azul.",
  ],
  missions: [
    {
      numero: 1,
      titre: "Cuidar la Biosfera",
      texte: "Homo biospheris proclama que pertenece a la Biosfera. Se compromete a preservar, regenerar y honrar los ecosistemas. Con sus miles de millones de ojos y manos, vela especialmente por la pureza del aire, el agua y los suelos, y actúa como guardián de la Biosfera. Cada Estado, región, ciudad, empresa e individuo debe asumir esta responsabilidad en su territorio, y debe comenzar a remediar los errores del pasado.",
    },
    {
      numero: 2,
      titre: "Velar por la armonía, la salud y el florecimiento humanos",
      texte: "Homo biospheris reconoce en cada ser humano el reflejo de la unidad de la vida. Trabaja para que todos puedan vivir con dignidad, libertad y salud, en armonía con los demás. Favorece el mantenimiento de un marco propicio al florecimiento y el desarrollo del potencial de cada uno, en respeto de las vulnerabilidades de todos, los ecosistemas y los límites planetarios.",
    },
    {
      numero: 3,
      titre: "Garantizar la prosperidad de todos los seres vivos",
      texte: "Homo biospheris considera cada forma de vida como esencial para el equilibrio de la Biosfera. Respeta su valor intrínseco, preserva la diversidad de los ecosistemas y vela por una prosperidad compartida entre humanos, animales, vegetales y otros organismos microscópicos, privilegiando en cada decisión una visión a largo plazo en beneficio del conjunto de la Biosfera.",
    },
    {
      numero: 4,
      titre: "Maravillarse",
      texte: "Homo biospheris reconoce la belleza del mundo. Cultiva el asombro y la contemplación, fuente de gratitud, creatividad y vínculo profundo con la Tierra. Honra el milagro de estar vivo y de pertenecer a este planeta extraordinario.",
    },
    {
      numero: 5,
      titre: "Vivir en resonancia, crear vínculos y belleza",
      texte: "Homo biospheris se sintoniza con los ritmos de la vida y del Universo. Celebra la armonía y los ciclos de la naturaleza. Busca percibir, a través de su corazón, los vínculos profundos que unen a los seres y las cosas. Está atento al impacto de sus decisiones sobre estas conexiones sutiles y sobre el conjunto de la Biosfera. Transforma cada acción en un gesto creador de belleza y relación.",
    },
    {
      numero: 6,
      titre: "Hacer circular el amor",
      texte: "Homo biospheris sabe que el amor es la energía vital de la existencia y que su ausencia ha estado en el origen de muchos males. Nutre este amor, lo comparte y lo hace irradiar, creando así una red de ayuda mutua, confianza y compasión propicia a la evolución de todos.",
    },
    {
      numero: 7,
      titre: "Comprender y enriquecer el mundo material",
      texte: "Homo biospheris se inscribe en el gran movimiento de la evolución que moldea lo real. Observa, estudia y profundiza sus conocimientos, ya sea en ciencia, técnica o arte, para comprender la Tierra y el Universo que nos rodea. Enriquece el mundo material con sus creaciones, velando por que hagan avanzar el saber, sirvan a la Biosfera en su conjunto, y participen en su equilibrio más que en su alteración.",
    },
    {
      numero: 8,
      titre: "Conectarse a los misterios del mundo inmaterial",
      texte: "Homo biospheris reconoce que el Universo está hecho de materia y conciencia. Explora sus dimensiones invisibles, respeta la pluralidad de las creencias y acoge lo desconocido como fuente de sabiduría y evolución.",
    },
    {
      numero: 9,
      titre: "Explorar el Cosmos y diseminar la conciencia",
      texte: "Homo biospheris dirige su mirada más allá de la Tierra, hacia el infinito del Cosmos. Explora no para conquistar, sino para comprender e integrar las leyes que unen toda existencia. Se esfuerza por buscar en otros lugares otras formas de vida y diseminar la conciencia en el Universo, preservando al mismo tiempo la integridad y la belleza de la Biosfera.",
    },
    {
      numero: 10,
      titre: "Proteger la Biosfera de los peligros espaciales",
      texte: "Homo biospheris es consciente de la existencia de amenazas provenientes del espacio, como las colisiones de asteroides. En nombre de todas las especies, desarrolla estrategias de protección y vela sobre la Biosfera como guardián de la vida.",
    },
  ],
  proclamation:
    "Al proclamar estas misiones, sentamos los cimientos de la civilización de Homo biospheris: una humanidad unida, apaciguada y consagrada a la vida. Estos principios guiarán nuestros pensamientos, palabras y actos, para escribir juntos la más bella historia de amor con la Biosfera.",
};

// ─────────────────────────────────────────────────────────
// PORTUGUÊS
// ─────────────────────────────────────────────────────────
export const chartePt: CharteContent = {
  titre: "Carta Universal de Homo biospheris",
  epigraphe: "A mais bela história de amor com a Biosfera",
  preambule: [
    "Nós, Homo sapiens, conscientes do nosso lugar na trama do ser vivo e da urgência das crises que enfrentamos, afirmamos o nosso compromisso de nos tornarmos Homo biospheris, um ser coletivo plenamente integrado na Biosfera. Reconhecendo que o nosso destino está ligado ao de todos os seres vivos e ao frágil equilíbrio da Terra, assumimos plenamente o nosso papel de órgão da Biosfera, Gaia, cuja existência reconhecemos.",
    "Conscientes dos nossos erros passados, animados pela vontade de nos unirmos e elevarmos, declaramos que chegou o momento de evoluirmos de Homo sapiens, 8 bilhões de indivíduos isolados e desatentos às interdependências, para Homo biospheris, humanidade unida, guardiã e nutriz da vida, encarnada pelo Pequeno Príncipe. Neste espírito de responsabilidade, harmonia e sabedoria, proclamamos as dez missões fundamentais do órgão que constituímos, juntos. Estas funções guiarão as nossas ações individuais e a nossa metamorfose coletiva através da Revolução Azul.",
  ],
  missions: [
    {
      numero: 1,
      titre: "Cuidar da Biosfera",
      texte: "Homo biospheris proclama que pertence à Biosfera. Compromete-se a preservar, regenerar e honrar os ecossistemas. Com os seus mil milhões de olhos e mãos, vela especialmente pela pureza do ar, da água e dos solos, e age como guardião da Biosfera. Cada Estado, região, cidade, empresa e indivíduo deve assumir esta responsabilidade no seu território, e deve começar a remediar os erros passados.",
    },
    {
      numero: 2,
      titre: "Zelar pela harmonia, saúde e florescimento humanos",
      texte: "Homo biospheris reconhece em cada ser humano o reflexo da unidade do vivo. Trabalha para que todos possam viver com dignidade, liberdade e saúde, em harmonia com os outros. Favorece a manutenção de um enquadramento propício ao florescimento e ao desenvolvimento do potencial de cada um, respeitando as vulnerabilidades de todos, os ecossistemas e os limites planetários.",
    },
    {
      numero: 3,
      titre: "Garantir a prosperidade de todos os seres vivos",
      texte: "Homo biospheris considera cada forma de vida essencial ao equilíbrio da Biosfera. Respeita o seu valor intrínseco, preserva a diversidade dos ecossistemas e vela por uma prosperidade partilhada entre humanos, animais, vegetais e outros organismos microscópicos, privilegiando em cada decisão uma visão a longo prazo em benefício do conjunto da Biosfera.",
    },
    {
      numero: 4,
      titre: "Maravilhar-se",
      texte: "Homo biospheris reconhece a beleza do mundo. Cultiva o espanto e a contemplação, fonte de gratidão, criatividade e ligação profunda com a Terra. Honra o milagre de estar vivo e de pertencer a este planeta extraordinário.",
    },
    {
      numero: 5,
      titre: "Viver em ressonância, criar laços e beleza",
      texte: "Homo biospheris sintoniza-se com os ritmos do vivo e do Universo. Celebra a harmonia e os ciclos da natureza. Procura perceber, através do coração, os laços profundos que unem os seres e as coisas. Está atento ao impacto das suas decisões sobre estas conexões subtis e sobre o conjunto da Biosfera. Transforma cada ação num gesto criador de beleza e relação.",
    },
    {
      numero: 6,
      titre: "Fazer circular o amor",
      texte: "Homo biospheris sabe que o amor é a energia vital da existência e que a sua ausência tem estado na origem de muitos males. Nutre este amor, partilha-o e fá-lo irradiar, criando assim uma rede de entreajuda, confiança e compaixão propícia à evolução de todos.",
    },
    {
      numero: 7,
      titre: "Compreender e enriquecer o mundo material",
      texte: "Homo biospheris inscreve-se no grande movimento da evolução que molda o real. Observa, estuda e aprofunda os seus conhecimentos, seja em ciência, técnica ou arte, para compreender a Terra e o Universo que nos rodeia. Enriquece o mundo material com as suas criações, zelando para que façam avançar o saber, sirvam a Biosfera no seu conjunto, e participem no seu equilíbrio em vez de na sua alteração.",
    },
    {
      numero: 8,
      titre: "Conectar-se aos mistérios do mundo imaterial",
      texte: "Homo biospheris reconhece que o Universo é feito de matéria e consciência. Explora as suas dimensões invisíveis, respeita a pluralidade das crenças e acolhe o desconhecido como fonte de sabedoria e evolução.",
    },
    {
      numero: 9,
      titre: "Explorar o Cosmos e disseminar a consciência",
      texte: "Homo biospheris dirige o seu olhar além da Terra, para o infinito do Cosmos. Explora não para conquistar, mas para compreender e integrar as leis que unem toda a existência. Esforça-se por procurar noutros lugares outras formas de vida e disseminar a consciência no Universo, preservando ao mesmo tempo a integridade e a beleza da Biosfera.",
    },
    {
      numero: 10,
      titre: "Proteger a Biosfera dos perigos espaciais",
      texte: "Homo biospheris tem consciência da existência de ameaças vindas do espaço, como as colisões de asteroides. Em nome de todas as espécies, desenvolve estratégias de proteção e vela sobre a Biosfera como guardião do vivo.",
    },
  ],
  proclamation:
    "Ao proclamar estas missões, lançamos os fundamentos da civilização de Homo biospheris: uma humanidade unida, apaziguada e dedicada à vida. Estes princípios guiarão os nossos pensamentos, palavras e atos, para escrevermos juntos a mais bela história de amor com a Biosfera.",
};

// ─────────────────────────────────────────────────────────
// DEUTSCH
// ─────────────────────────────────────────────────────────
export const charteDe: CharteContent = {
  titre: "Universelle Charta von Homo biospheris",
  epigraphe: "Die schönste Liebesgeschichte mit der Biosphäre",
  preambule: [
    "Wir, Homo sapiens, uns unseres Platzes im Gewebe des Lebendigen bewusst und der Dringlichkeit der Krisen, denen wir gegenüberstehen, bekräftigen unser Bekenntnis, zu Homo biospheris zu werden, einem kollektiven Wesen, das vollständig in die Biosphäre integriert ist. In Anerkennung der Tatsache, dass unser Schicksal mit dem aller Lebewesen und dem fragilen Gleichgewicht der Erde verbunden ist, übernehmen wir vollständig unsere Rolle als Organ der Biosphäre, Gaia, deren Existenz wir anerkennen.",
    "Uns unserer vergangenen Fehler bewusst und vom Willen beseelt, uns zu vereinen und zu erheben, erklären wir, dass es Zeit ist, sich von Homo sapiens, 8 Milliarden isolierter und auf Interdependenzen unachtsamer Individuen, zu Homo biospheris zu entwickeln: einer vereinten Menschheit, Hüterin und Nährerin des Lebens, verkörpert durch den Kleinen Prinzen. In diesem Geist der Verantwortung, Harmonie und Weisheit proklamieren wir die zehn grundlegenden Missionen des Organs, das wir gemeinsam bilden. Diese Funktionen werden unsere individuellen Handlungen und unsere kollektive Metamorphose durch die Blaue Revolution leiten.",
  ],
  missions: [
    {
      numero: 1,
      titre: "Die Biosphäre pflegen",
      texte: "Homo biospheris erklärt, dass er zur Biosphäre gehört. Er verpflichtet sich, Ökosysteme zu bewahren, zu regenerieren und zu ehren. Mit seinen Milliarden von Augen und Händen wacht er insbesondere über die Reinheit von Luft, Wasser und Böden und handelt als Hüter der Biosphäre. Jeder Staat, jede Region, Stadt, jedes Unternehmen und jeder Einzelne muss diese Verantwortung in seinem Gebiet übernehmen und damit beginnen, vergangene Fehler zu beheben.",
    },
    {
      numero: 2,
      titre: "Über menschliche Harmonie, Gesundheit und Entfaltung wachen",
      texte: "Homo biospheris erkennt in jedem Menschen das Spiegelbild der Einheit des Lebendigen. Er arbeitet dafür, dass alle in Würde, Freiheit und Gesundheit leben können, in Harmonie mit anderen. Er fördert die Aufrechterhaltung eines Rahmens, der der Entfaltung und Entwicklung des Potenzials jedes Einzelnen förderlich ist, unter Achtung der Verletzlichkeiten aller, der Ökosysteme und der planetaren Grenzen.",
    },
    {
      numero: 3,
      titre: "Den Wohlstand aller Lebewesen sichern",
      texte: "Homo biospheris betrachtet jede Lebensform als wesentlich für das Gleichgewicht der Biosphäre. Er respektiert ihren intrinsischen Wert, bewahrt die Vielfalt der Ökosysteme und sorgt für einen geteilten Wohlstand zwischen Menschen, Tieren, Pflanzen und anderen mikroskopischen Organismen, wobei er in jeder Entscheidung eine langfristige Vision zum Wohl der gesamten Biosphäre bevorzugt.",
    },
    {
      numero: 4,
      titre: "Staunen",
      texte: "Homo biospheris erkennt die Schönheit der Welt an. Er kultiviert das Staunen und die Betrachtung, Quelle der Dankbarkeit, der Kreativität und der tiefen Verbindung mit der Erde. Er ehrt das Wunder, lebendig zu sein und diesem außergewöhnlichen Planeten anzugehören.",
    },
    {
      numero: 5,
      titre: "In Resonanz leben, Verbindungen und Schönheit schaffen",
      texte: "Homo biospheris stimmt sich auf die Rhythmen des Lebendigen und des Universums ein. Er feiert die Harmonie und die Zyklen der Natur. Er sucht, durch sein Herz, die tiefen Verbindungen wahrzunehmen, die Wesen und Dinge vereinen. Er achtet auf die Auswirkungen seiner Entscheidungen auf diese subtilen Verbindungen und auf die gesamte Biosphäre. Er verwandelt jede Handlung in eine Geste, die Schönheit und Beziehung schafft.",
    },
    {
      numero: 6,
      titre: "Die Liebe zirkulieren lassen",
      texte: "Homo biospheris weiß, dass die Liebe die Lebensenergie der Existenz ist und dass ihr Fehlen der Ursprung vieler Übel war. Er nährt diese Liebe, teilt sie und lässt sie ausstrahlen, wodurch er ein Netz gegenseitiger Hilfe, Vertrauen und Mitgefühl schafft, das der Evolution aller förderlich ist.",
    },
    {
      numero: 7,
      titre: "Die materielle Welt verstehen und bereichern",
      texte: "Homo biospheris ist Teil der großen Bewegung der Evolution, die das Reale gestaltet. Er beobachtet, studiert und vertieft sein Wissen, sei es in Wissenschaft, Technik oder Kunst, um die Erde und das Universum um uns herum zu verstehen. Er bereichert die materielle Welt mit seinen Schöpfungen und achtet darauf, dass sie Wissen voranbringen, der Biosphäre als Ganzes dienen und zu ihrem Gleichgewicht beitragen, anstatt es zu stören.",
    },
    {
      numero: 8,
      titre: "Sich mit den Geheimnissen der immateriellen Welt verbinden",
      texte: "Homo biospheris erkennt an, dass das Universum aus Materie und Bewusstsein besteht. Er erforscht seine unsichtbaren Dimensionen, respektiert die Vielfalt der Überzeugungen und begrüßt das Unbekannte als Quelle der Weisheit und Evolution.",
    },
    {
      numero: 9,
      titre: "Den Kosmos erkunden und Bewusstsein verbreiten",
      texte: "Homo biospheris richtet seinen Blick über die Erde hinaus, in die Unendlichkeit des Kosmos. Er erkundet nicht, um zu erobern, sondern um die Gesetze zu verstehen und zu integrieren, die alle Existenz verbinden. Er bemüht sich, anderswo andere Lebensformen zu suchen und das Bewusstsein im Universum zu verbreiten, während er die Integrität und Schönheit der Biosphäre bewahrt.",
    },
    {
      numero: 10,
      titre: "Die Biosphäre vor kosmischen Gefahren schützen",
      texte: "Homo biospheris ist sich der Existenz von Bedrohungen aus dem Weltraum bewusst, wie etwa Asteroidenkollisionen. Im Namen aller Arten entwickelt er Schutzstrategien und wacht über die Biosphäre als Hüter des Lebendigen.",
    },
  ],
  proclamation:
    "Indem wir diese Missionen proklamieren, legen wir die Grundlagen der Zivilisation von Homo biospheris: einer vereinten, befriedeten und dem Leben gewidmeten Menschheit. Diese Grundsätze werden unsere Gedanken, Worte und Handlungen leiten, um gemeinsam die schönste Liebesgeschichte mit der Biosphäre zu schreiben.",
};

// ─────────────────────────────────────────────────────────
// РУССКИЙ
// ─────────────────────────────────────────────────────────
export const charteRu: CharteContent = {
  titre: "Всеобщая хартия Homo biospheris",
  epigraphe: "Прекраснейшая история любви с Биосферой",
  preambule: [
    "Мы, Homo sapiens, осознавая своё место в ткани живого и срочность кризисов, с которыми мы сталкиваемся, подтверждаем нашу приверженность становлению Homo biospheris — коллективным существом, полностью интегрированным в Биосферу. Признавая, что наша судьба связана с судьбой всех живых существ и хрупким равновесием Земли, мы полностью принимаем на себя роль органа Биосферы, Гаи, чьё существование мы признаём.",
    "Осознавая наши прошлые ошибки, движимые волей к объединению и возвышению, мы заявляем, что пришло время эволюционировать от Homo sapiens, 8 миллиардов изолированных индивидуумов, невнимательных к взаимозависимостям, к Homo biospheris — единому человечеству, хранителю и питателю жизни, воплощённому Маленьким принцем. В этом духе ответственности, гармонии и мудрости мы провозглашаем десять фундаментальных миссий органа, который мы составляем вместе. Эти функции будут направлять наши индивидуальные действия и наше коллективное преображение через Голубую революцию.",
  ],
  missions: [
    {
      numero: 1,
      titre: "Заботиться о Биосфере",
      texte: "Homo biospheris провозглашает, что принадлежит Биосфере. Он обязуется сохранять, восстанавливать и чтить экосистемы. Располагая миллиардами глаз и рук, он следит в особенности за чистотой воздуха, воды и почвы и действует как страж Биосферы. Каждое государство, регион, город, предприятие и отдельный человек должны взять на себя эту ответственность на своей территории и начать исправлять прошлые ошибки.",
    },
    {
      numero: 2,
      titre: "Следить за гармонией, здоровьем и процветанием человека",
      texte: "Homo biospheris признаёт в каждом человеке отражение единства живого. Он работает для того, чтобы все могли жить в достоинстве, свободе и здоровье, в гармонии с другими. Он способствует поддержанию условий, благоприятных для расцвета и развития потенциала каждого, с уважением к уязвимости всех, к экосистемам и планетарным границам.",
    },
    {
      numero: 3,
      titre: "Обеспечивать процветание всех живых существ",
      texte: "Homo biospheris считает каждую форму жизни существенной для равновесия Биосферы. Он уважает их внутреннюю ценность, сохраняет разнообразие экосистем и обеспечивает общее процветание людей, животных, растений и других микроскопических организмов, отдавая в каждом решении предпочтение долгосрочному видению в интересах всей Биосферы.",
    },
    {
      numero: 4,
      titre: "Восхищаться",
      texte: "Homo biospheris признаёт красоту мира. Он развивает в себе изумление и созерцание — источник благодарности, творчества и глубокой связи с Землёй. Он чтит чудо быть живым и принадлежать этой удивительной планете.",
    },
    {
      numero: 5,
      titre: "Жить в резонансе, создавать связи и красоту",
      texte: "Homo biospheris настраивается на ритмы живого и Вселенной. Он отмечает гармонию и циклы природы. Он стремится почувствовать сердцем глубокие связи, объединяющие существа и вещи. Он внимателен к воздействию своих решений на эти тонкие связи и на всю Биосферу. Он превращает каждое действие в жест, создающий красоту и отношения.",
    },
    {
      numero: 6,
      titre: "Распространять любовь",
      texte: "Homo biospheris знает, что любовь — это жизненная энергия существования и что её отсутствие было источником многих бед. Он питает эту любовь, делится ею и заставляет её сиять, создавая тем самым сеть взаимопомощи, доверия и сострадания, способствующую эволюции всех.",
    },
    {
      numero: 7,
      titre: "Понимать и обогащать материальный мир",
      texte: "Homo biospheris вписывается в великое движение эволюции, формирующей реальность. Он наблюдает, изучает и углубляет свои знания — в науке, технике или искусстве — чтобы понять Землю и окружающую нас Вселенную. Он обогащает материальный мир своими творениями, следя за тем, чтобы они продвигали знания, служили Биосфере в целом и участвовали в её равновесии, а не в её нарушении.",
    },
    {
      numero: 8,
      titre: "Соединяться с тайнами нематериального мира",
      texte: "Homo biospheris признаёт, что Вселенная пронизана материей и сознанием. Он исследует её невидимые измерения, уважает плюрализм убеждений и принимает неизвестное как источник мудрости и эволюции.",
    },
    {
      numero: 9,
      titre: "Исследовать Космос и распространять сознание",
      texte: "Homo biospheris обращает свой взгляд за пределы Земли, к бесконечности Космоса. Он исследует не для того, чтобы завоёвывать, а чтобы понимать и интегрировать законы, связывающие всё существующее. Он стремится искать в других местах иные формы жизни и распространять сознание во Вселенной, сохраняя при этом целостность и красоту Биосферы.",
    },
    {
      numero: 10,
      titre: "Защищать Биосферу от космических угроз",
      texte: "Homo biospheris осознаёт существование угроз из космоса, таких как столкновения с астероидами. От имени всех видов он разрабатывает стратегии защиты и бдит над Биосферой как страж живого.",
    },
  ],
  proclamation:
    "Провозглашая эти миссии, мы закладываем основы цивилизации Homo biospheris: объединённого, умиротворённого человечества, посвящённого жизни. Эти принципы будут направлять наши мысли, слова и поступки, чтобы вместе написать прекраснейшую историю любви с Биосферой.",
};

// ─────────────────────────────────────────────────────────
// العربية (RTL)
// ─────────────────────────────────────────────────────────
export const charteAr: CharteContent = {
  titre: "الميثاق الكوني لـ Homo biospheris",
  epigraphe: "أجمل قصة حب مع الغلاف الحيوي",
  dir: 'rtl',
  preambule: [
    "نحن، Homo sapiens، إدراكاً منّا لمكانتنا في نسيج الكائنات الحية، وللأزمات العاجلة التي نواجهها، نُقرّ بالتزامنا بأن نصبح Homo biospheris، كياناً جماعياً متكاملاً تماماً في قلب الغلاف الحيوي. وإدراكاً بأن مصيرنا مرتبط بمصير جميع الكائنات الحية وبالتوازن الهشّ للأرض، نتحمّل مسؤوليتنا الكاملة كعضو في الغلاف الحيوي، غايا، التي نعترف بوجودها.",
    "وإدراكاً لأخطائنا الماضية، ومدفوعين بإرادة الاتحاد والارتقاء، نُعلن أن الوقت قد حان للتطوّر من Homo sapiens، ثمانية مليارات فرد معزول غير مبالٍ بالترابطات، نحو Homo biospheris، إنسانية متّحدة، حارسة وراعية للحياة، تتجسّد في الأمير الصغير. بروح المسؤولية والانسجام والحكمة، نُعلن المهام العشر الأساسية للعضو الذي نؤلّفه معاً. وستقود هذه الوظائف أعمالنا الفردية وتحوّلنا الجماعي من خلال الثورة الزرقاء.",
  ],
  missions: [
    {
      numero: 1,
      titre: "الاعتناء بالغلاف الحيوي",
      texte: "يُعلن Homo biospheris انتماءه إلى الغلاف الحيوي. يلتزم بصون الأنظمة البيئية وتجديدها وتكريمها. وبفضل مليارات العيون والأيدي، يحرص بشكل خاص على نقاء الهواء والماء والتربة، ويعمل حارساً للغلاف الحيوي. على كل دولة ومنطقة ومدينة وشركة وفرد تحمُّل هذه المسؤولية على أراضيهم، والشروع في تصحيح أخطاء الماضي.",
    },
    {
      numero: 2,
      titre: "الحرص على الانسجام والصحة والازدهار البشري",
      texte: "يعترف Homo biospheris في كل إنسان بانعكاس وحدة الحياة. يعمل حتى يتمكن الجميع من العيش بكرامة وحرية وصحة، في انسجام مع الآخرين. يشجع على الحفاظ على إطار مواتٍ لازدهار وتطوير إمكانات كل فرد، مع احترام هشاشة الجميع والأنظمة البيئية والحدود الكوكبية.",
    },
    {
      numero: 3,
      titre: "ضمان ازدهار جميع الكائنات الحية",
      texte: "يعتبر Homo biospheris كل شكل من أشكال الحياة ضرورياً لتوازن الغلاف الحيوي. يحترم قيمتها الجوهرية، ويصون تنوع الأنظمة البيئية، ويحرص على ازدهار مشترك بين البشر والحيوانات والنباتات وسائر الكائنات الدقيقة، مانحاً الأولوية في كل قرار لرؤية طويلة الأمد لصالح الغلاف الحيوي بأسره.",
    },
    {
      numero: 4,
      titre: "الاندهاش",
      texte: "يُدرك Homo biospheris جمال العالم. يُنمّي الدهشة والتأمل، مصدرَ الامتنان والإبداع والارتباط العميق بالأرض. يُجلّ معجزة الحياة والانتماء إلى هذا الكوكب الاستثنائي.",
    },
    {
      numero: 5,
      titre: "العيش في تناغم وخلق روابط وجمال",
      texte: "يتناغم Homo biospheris مع إيقاعات الحياة والكون. يحتفي بانسجام الطبيعة ودوراتها. يسعى إلى إدراك، بقلبه، الروابط العميقة التي تجمع الكائنات والأشياء. ينتبه إلى أثر قراراته على هذه الصلات الخفية وعلى الغلاف الحيوي بأسره. يُحوّل كل فعل إلى إيماءة خالقة للجمال والعلاقة.",
    },
    {
      numero: 6,
      titre: "إشاعة الحب",
      texte: "يعلم Homo biospheris أن الحب هو طاقة الوجود الحيوية، وأن غيابه كان في أصل كثير من المعاناة. يُغذّي هذا الحب ويتشاركه ويُشعّه، خالقاً بذلك شبكة من التعاضد والثقة والرحمة المُسهمة في تطور الجميع.",
    },
    {
      numero: 7,
      titre: "فهم العالم المادي وإثراؤه",
      texte: "ينتسب Homo biospheris إلى الحركة العظيمة للتطور التي تُشكّل الواقع. يُراقب ويدرس ويُعمّق معرفته، سواء في العلوم أو التقنية أو الفن، لفهم الأرض والكون المحيط بنا. يُثري العالم المادي بإبداعاته، حارصاً على أن تُقدّم المعرفة وتخدم الغلاف الحيوي، وتُسهم في توازنه لا في اختلاله.",
    },
    {
      numero: 8,
      titre: "التواصل مع أسرار عالم اللامادة",
      texte: "يُقرّ Homo biospheris بأن الكون مُبنى من مادة ووعي. يستكشف أبعاده الخفية، ويحترم تعددية المعتقدات، ويرحّب بالمجهول باعتباره مصدراً للحكمة والتطور.",
    },
    {
      numero: 9,
      titre: "استكشاف الكون ونشر الوعي",
      texte: "يوجّه Homo biospheris نظره إلى ما وراء الأرض، نحو لانهاية الكون. يستكشف لا ليغزو، بل ليفهم ويستوعب القوانين التي تجمع كل وجود. يسعى للبحث في أماكن أخرى عن أشكال حياة مغايرة وبثّ الوعي في الكون، مع الحفاظ على سلامة الغلاف الحيوي وجماله.",
    },
    {
      numero: 10,
      titre: "حماية الغلاف الحيوي من الأخطار الفضائية",
      texte: "يُدرك Homo biospheris وجود تهديدات قادمة من الفضاء، كاصطدامات الكويكبات. باسم جميع الأنواع، يُطوّر استراتيجيات للحماية ويحرس الغلاف الحيوي كحارس للحياة.",
    },
  ],
  proclamation:
    "بإعلان هذه المهام، نضع أسس حضارة Homo biospheris: إنسانية متحدة ومسالمة ومكرسة للحياة. ستوجّه هذه المبادئ أفكارنا وأقوالنا وأفعالنا، لنكتب معاً أجمل قصة حب مع الغلاف الحيوي.",
};

// ─────────────────────────────────────────────────────────
// 中文
// ─────────────────────────────────────────────────────────
export const charteZh: CharteContent = {
  titre: "Homo biospheris 普世宪章",
  epigraphe: "与生物圈最美丽的爱之故事",
  preambule: [
    "我们，智人，意识到自身在生命网络中的位置，以及我们所面临的危机之紧迫性，郑重承诺成为 Homo biospheris——一个完全融入生物圈的集体存在。我们认识到，我们的命运与所有生命体及地球脆弱的平衡紧密相连，全然承担起我们作为生物圈——盖亚之器官的角色，并承认其存在。",
    "意识到我们过去的错误，怀着团结与超越自我的意志，我们宣告：是时候从智人——80亿孤立个体，漠视彼此间的相互依存——进化为 Homo biospheris，一个团结的人类，生命的守护者与滋养者，以小王子为象征。秉持责任、和谐与智慧之精神，我们共同宣告我们所构成之器官的十大基本使命。这些功能将引导我们的个人行动与集体蜕变，推动蓝色革命。",
  ],
  missions: [
    {
      numero: 1,
      titre: "守护生物圈",
      texte: "Homo biospheris 宣告自身属于生物圈。承诺保护、再生并尊重生态系统。凭借数十亿双眼睛和双手，特别守护空气、水和土壤的纯净，担当生物圈的守护者。每个国家、地区、城市、企业和个人都必须在自己的领域承担这一责任，并着手弥补过去的错误。",
    },
    {
      numero: 2,
      titre: "维护人类和谐、健康与繁荣",
      texte: "Homo biospheris 在每个人身上认出生命统一性的映照。致力于让所有人都能在尊严、自由与健康中生活，与他人和谐相处。促进维护有利于每个人潜能绽放与发展的环境，尊重所有人的脆弱性、生态系统及地球边界。",
    },
    {
      numero: 3,
      titre: "保障一切生命的繁盛",
      texte: "Homo biospheris 认为每种生命形式都对生物圈的平衡至关重要。尊重其内在价值，维护生态系统多样性，在人类、动物、植物和其他微生物之间守护共同繁荣，在每项决策中优先考虑有利于整个生物圈的长远愿景。",
    },
    {
      numero: 4,
      titre: "心怀敬畏",
      texte: "Homo biospheris 承认世界的美丽。培养惊奇与沉思，这是感恩、创造力和与大地深刻联结的源泉。尊崇活着的奇迹，以及属于这颗非凡星球的荣幸。",
    },
    {
      numero: 5,
      titre: "与万物共鸣，创造联结与美",
      texte: "Homo biospheris 与生命和宇宙的节律和谐共鸣。颂扬自然的和谐与循环。试图用心感知连结万物的深层纽带。关注自身决策对这些微妙连结和整个生物圈的影响。将每个行动转化为创造美与关系的姿态。",
    },
    {
      numero: 6,
      titre: "传递爱",
      texte: "Homo biospheris 知晓爱是存在的生命能量，其缺失是许多苦难的根源。滋养这份爱，分享并传播它，从而创建一个有利于所有人进化的互助、信任与慈悲网络。",
    },
    {
      numero: 7,
      titre: "理解并丰富物质世界",
      texte: "Homo biospheris 融入塑造现实的伟大进化运动。观察、研究并深化知识，无论是科学、技术还是艺术，以理解地球和我们周围的宇宙。以创作丰富物质世界，确保这些创作能推进知识、服务整个生物圈，并有助于其平衡而非破坏。",
    },
    {
      numero: 8,
      titre: "探索非物质世界的奥秘",
      texte: "Homo biospheris 承认宇宙由物质与意识构成。探索其不可见的维度，尊重信仰的多元性，将未知作为智慧和进化的源泉加以接纳。",
    },
    {
      numero: 9,
      titre: "探索宇宙，播撒意识",
      texte: "Homo biospheris 将目光投向地球之外，望向宇宙的无限。探索不是为了征服，而是为了理解和融合连结一切存在的法则。努力在其他地方寻找生命形式，并在宇宙中播撒意识，同时保护生物圈的完整性与美丽。",
    },
    {
      numero: 10,
      titre: "保护生物圈免受宇宙威胁",
      texte: "Homo biospheris 意识到来自太空的威胁，如小行星碰撞。代表所有物种，制定保护策略，作为生命的守护者守望生物圈。",
    },
  ],
  proclamation:
    "通过宣告这些使命，我们奠定了 Homo biospheris 文明的基础：一个团结、平和、致力于生命的人类。这些原则将引导我们的思想、言语和行动，共同书写与生物圈最美丽的爱之故事。",
};

// ─────────────────────────────────────────────────────────
// हिन्दी
// ─────────────────────────────────────────────────────────
export const charteHi: CharteContent = {
  titre: "Homo biospheris का सार्वभौमिक चार्टर",
  epigraphe: "जीवमंडल के साथ सबसे सुंदर प्रेम कहानी",
  preambule: [
    "हम, होमो सेपियन्स, जीवन के ताने-बाने में अपने स्थान के प्रति सचेत होते हुए और हमारे समक्ष उपस्थित संकटों की तात्कालिकता को समझते हुए, Homo biospheris बनने की अपनी प्रतिबद्धता की पुष्टि करते हैं — एक सामूहिक सत्ता जो जीवमंडल में पूर्णतः एकीकृत है। यह स्वीकार करते हुए कि हमारी नियति सभी जीवित प्राणियों और पृथ्वी के नाजुक संतुलन से जुड़ी है, हम जीवमंडल, गाया के एक अंग के रूप में अपनी भूमिका को पूर्णतः स्वीकार करते हैं।",
    "अपनी पिछली गलतियों के प्रति सचेत होते हुए और स्वयं को एकजुट करने एवं ऊपर उठाने की इच्छाशक्ति से प्रेरित होते हुए, हम घोषणा करते हैं कि होमो सेपियन्स — 8 अरब पृथक व्यक्ति जो अन्योन्याश्रितताओं के प्रति असावधान हैं — से Homo biospheris की ओर विकसित होने का समय आ गया है: एक एकजुट मानवता, जीवन की संरक्षक और पोषक, छोटे राजकुमार में अवतरित। उत्तरदायित्व, सामंजस्य और ज्ञान की इस भावना में, हम उस अंग के दस मूलभूत मिशनों की घोषणा करते हैं जिसे हम मिलकर बनाते हैं। ये कार्य नीली क्रांति के माध्यम से हमारे व्यक्तिगत कार्यों और सामूहिक परिवर्तन को दिशा देंगे।",
  ],
  missions: [
    {
      numero: 1,
      titre: "जीवमंडल की देखभाल करना",
      texte: "Homo biospheris घोषणा करता है कि वह जीवमंडल से संबंधित है। वह पारिस्थितिक तंत्र को संरक्षित, पुनर्जीवित और सम्मानित करने का संकल्प लेता है। अपनी अरबों आँखों और हाथों के साथ, वह विशेष रूप से वायु, जल और मिट्टी की शुद्धता की रक्षा करता है और जीवमंडल के संरक्षक के रूप में कार्य करता है। प्रत्येक राज्य, क्षेत्र, शहर, उद्यम और व्यक्ति को अपने क्षेत्र में यह जिम्मेदारी लेनी होगी और पिछली गलतियों को सुधारना शुरू करना होगा।",
    },
    {
      numero: 2,
      titre: "मानवीय सद्भाव, स्वास्थ्य और विकास की देखरेख",
      texte: "Homo biospheris प्रत्येक मनुष्य में जीवन की एकता का प्रतिबिंब पहचानता है। वह इस बात के लिए काम करता है कि सभी गरिमा, स्वतंत्रता और स्वास्थ्य के साथ, दूसरों के साथ सद्भाव में जी सकें। वह सभी की भेद्यता, पारिस्थितिक तंत्र और ग्रहीय सीमाओं का सम्मान करते हुए, प्रत्येक के संभावित विकास के लिए अनुकूल वातावरण बनाए रखने को प्रोत्साहित करता है।",
    },
    {
      numero: 3,
      titre: "सभी जीवित प्राणियों की समृद्धि सुनिश्चित करना",
      texte: "Homo biospheris जीवन के प्रत्येक रूप को जीवमंडल के संतुलन के लिए आवश्यक मानता है। वह उनके आंतरिक मूल्य का सम्मान करता है, पारिस्थितिक तंत्र की विविधता की रक्षा करता है और मनुष्यों, जानवरों, पौधों और अन्य सूक्ष्म जीवों के बीच साझा समृद्धि सुनिश्चित करता है, प्रत्येक निर्णय में संपूर्ण जीवमंडल के लाभ के लिए दीर्घकालिक दृष्टिकोण को प्राथमिकता देता है।",
    },
    {
      numero: 4,
      titre: "विस्मय में जीना",
      texte: "Homo biospheris संसार की सुंदरता को पहचानता है। वह विस्मय और चिंतन को विकसित करता है, जो कृतज्ञता, रचनात्मकता और पृथ्वी के साथ गहरे संबंध का स्रोत है। वह जीवित होने और इस असाधारण ग्रह से संबंधित होने के चमत्कार का सम्मान करता है।",
    },
    {
      numero: 5,
      titre: "अनुनाद में जीना, संबंध और सौंदर्य बनाना",
      texte: "Homo biospheris जीवन और ब्रह्मांड की लय के अनुरूप होता है। वह प्रकृति की सद्भाव और चक्रों का उत्सव मनाता है। वह अपने हृदय से उन गहरे बंधनों को अनुभव करने का प्रयास करता है जो प्राणियों और वस्तुओं को जोड़ते हैं। वह इन सूक्ष्म संबंधों और संपूर्ण जीवमंडल पर अपने निर्णयों के प्रभाव के प्रति सजग रहता है। वह प्रत्येक कार्य को सौंदर्य और संबंध सृजन की मुद्रा में रूपांतरित करता है।",
    },
    {
      numero: 6,
      titre: "प्रेम प्रवाहित करना",
      texte: "Homo biospheris जानता है कि प्रेम अस्तित्व की जीवन ऊर्जा है और इसकी अनुपस्थिति अनेक पीड़ाओं का मूल रही है। वह इस प्रेम को पोषित करता है, साझा करता है और प्रकाशित करता है, इस प्रकार पारस्परिक सहायता, विश्वास और करुणा का एक जाल बनाता है जो सभी के विकास के लिए अनुकूल है।",
    },
    {
      numero: 7,
      titre: "भौतिक संसार को समझना और समृद्ध करना",
      texte: "Homo biospheris उस महान विकास के आंदोलन में शामिल है जो वास्तविकता को आकार देता है। वह ज्ञान को अवलोकन, अध्ययन और गहन करता है, चाहे विज्ञान, तकनीक या कला में, पृथ्वी और हमारे चारों ओर के ब्रह्मांड को समझने के लिए। वह अपनी रचनाओं से भौतिक संसार को समृद्ध करता है, यह सुनिश्चित करते हुए कि वे ज्ञान को आगे बढ़ाएं, संपूर्ण जीवमंडल की सेवा करें और उसके संतुलन में योगदान दें।",
    },
    {
      numero: 8,
      titre: "अभौतिक संसार के रहस्यों से जुड़ना",
      texte: "Homo biospheris मानता है कि ब्रह्मांड पदार्थ और चेतना से बना है। वह इसके अदृश्य आयामों का अन्वेषण करता है, विश्वासों की बहुलता का सम्मान करता है और अज्ञात को ज्ञान और विकास के स्रोत के रूप में स्वीकार करता है।",
    },
    {
      numero: 9,
      titre: "ब्रह्मांड का अन्वेषण करना और चेतना फैलाना",
      texte: "Homo biospheris अपनी दृष्टि पृथ्वी से परे, ब्रह्मांड की अनंतता की ओर ले जाता है। वह जीतने के लिए नहीं, बल्कि उन नियमों को समझने और आत्मसात करने के लिए अन्वेषण करता है जो सभी अस्तित्व को जोड़ते हैं। वह अन्यत्र जीवन के अन्य रूपों की खोज करने और ब्रह्मांड में चेतना फैलाने का प्रयास करता है, साथ ही जीवमंडल की अखंडता और सौंदर्य को संरक्षित करता है।",
    },
    {
      numero: 10,
      titre: "जीवमंडल को अंतरिक्षीय खतरों से बचाना",
      texte: "Homo biospheris अंतरिक्ष से आने वाले खतरों जैसे क्षुद्रग्रह टकराव के अस्तित्व के प्रति सचेत है। सभी प्रजातियों की ओर से, वह सुरक्षा रणनीतियां विकसित करता है और जीवन के संरक्षक के रूप में जीवमंडल की रक्षा करता है।",
    },
  ],
  proclamation:
    "इन मिशनों की घोषणा करके, हम Homo biospheris की सभ्यता की नींव रखते हैं: एक एकजुट, शांत और जीवन को समर्पित मानवता। ये सिद्धांत हमारे विचारों, वचनों और कार्यों का मार्गदर्शन करेंगे, ताकि हम मिलकर जीवमंडल के साथ सबसे सुंदर प्रेम कहानी लिख सकें।",
};

// ─────────────────────────────────────────────────────────
// বাংলা
// ─────────────────────────────────────────────────────────
export const charteBn: CharteContent = {
  titre: "Homo biospheris-এর সর্বজনীন সনদ",
  epigraphe: "জীবমণ্ডলের সাথে সবচেয়ে সুন্দর প্রেমের কাহিনী",
  preambule: [
    "আমরা, হোমো স্যাপিয়েন্স, জীবনের বুননে আমাদের স্থান সম্পর্কে সচেতন হয়ে এবং আমাদের সামনে উপস্থিত সংকটের জরুরিতা উপলব্ধি করে, Homo biospheris হওয়ার প্রতি আমাদের প্রতিশ্রুতি নিশ্চিত করছি — একটি সামষ্টিক সত্তা যা জীবমণ্ডলের মধ্যে সম্পূর্ণরূপে একীভূত। স্বীকার করছি যে আমাদের ভাগ্য সকল জীবিত সত্তার সাথে এবং পৃথিবীর ভঙ্গুর ভারসাম্যের সাথে যুক্ত, আমরা জীবমণ্ডল, গায়ার অঙ্গ হিসেবে আমাদের ভূমিকা সম্পূর্ণভাবে গ্রহণ করছি।",
    "আমাদের অতীত ভুলের প্রতি সচেতন এবং নিজেদের একত্রিত ও উন্নীত করার ইচ্ছায় অনুপ্রাণিত হয়ে, আমরা ঘোষণা করছি যে হোমো স্যাপিয়েন্স থেকে বিবর্তিত হওয়ার সময় এসেছে — ৮ বিলিয়ন বিচ্ছিন্ন ব্যক্তি যারা পরস্পর নির্ভরতার প্রতি অমনোযোগী — Homo biospheris-এর দিকে: একটি ঐক্যবদ্ধ মানবতা, জীবনের রক্ষক ও পালক, ছোট রাজকুমারের মধ্যে মূর্ত। দায়িত্ব, সম্প্রীতি ও জ্ঞানের এই চেতনায়, আমরা একসাথে যে অঙ্গ গঠন করি তার দশটি মৌলিক মিশন ঘোষণা করছি। এই কার্যাবলী নীল বিপ্লবের মাধ্যমে আমাদের ব্যক্তিগত কর্ম ও সামষ্টিক রূপান্তরকে পরিচালিত করবে।",
  ],
  missions: [
    {
      numero: 1,
      titre: "জীবমণ্ডলের যত্ন নেওয়া",
      texte: "Homo biospheris ঘোষণা করে যে সে জীবমণ্ডলের অন্তর্গত। সে বাস্তুতন্ত্র সংরক্ষণ, পুনরুজ্জীবন এবং সম্মানের প্রতিশ্রুতি দেয়। তার কোটি কোটি চোখ ও হাত দিয়ে, সে বিশেষত বায়ু, জল ও মাটির বিশুদ্ধতা রক্ষা করে এবং জীবমণ্ডলের অভিভাবক হিসেবে কাজ করে। প্রতিটি রাজ্য, অঞ্চল, শহর, উদ্যোগ ও ব্যক্তিকে তাদের ভূখণ্ডে এই দায়িত্ব গ্রহণ করতে হবে এবং অতীতের ভুলগুলো সংশোধন শুরু করতে হবে।",
    },
    {
      numero: 2,
      titre: "মানবিক সম্প্রীতি, স্বাস্থ্য ও বিকাশের তদারকি",
      texte: "Homo biospheris প্রতিটি মানুষের মধ্যে জীবনের ঐক্যের প্রতিফলন চেনে। সে এজন্য কাজ করে যাতে সবাই মর্যাদা, স্বাধীনতা ও স্বাস্থ্যের সাথে, অন্যদের সাথে সম্প্রীতিতে বাঁচতে পারে। সে সকলের ভঙ্গুরতা, বাস্তুতন্ত্র ও গ্রহীয় সীমার প্রতি শ্রদ্ধা রেখে প্রত্যেকের সম্ভাবনার বিকাশের জন্য অনুকূল পরিবেশ বজায় রাখতে উৎসাহিত করে।",
    },
    {
      numero: 3,
      titre: "সকল জীবের সমৃদ্ধি নিশ্চিত করা",
      texte: "Homo biospheris জীবনের প্রতিটি রূপকে জীবমণ্ডলের ভারসাম্যের জন্য অপরিহার্য মনে করে। সে তাদের অন্তর্নিহিত মূল্য সম্মান করে, বাস্তুতন্ত্রের বৈচিত্র্য রক্ষা করে এবং মানুষ, প্রাণী, উদ্ভিদ ও অন্যান্য অণুজীবের মধ্যে ভাগ করা সমৃদ্ধি নিশ্চিত করে, প্রতিটি সিদ্ধান্তে সমগ্র জীবমণ্ডলের সুবিধার জন্য দীর্ঘমেয়াদী দৃষ্টিভঙ্গিকে অগ্রাধিকার দেয়।",
    },
    {
      numero: 4,
      titre: "বিস্মিত হওয়া",
      texte: "Homo biospheris বিশ্বের সৌন্দর্য স্বীকার করে। সে বিস্ময় ও চিন্তন লালন করে, যা কৃতজ্ঞতা, সৃজনশীলতা এবং পৃথিবীর সাথে গভীর সংযোগের উৎস। সে জীবিত থাকার এবং এই অসাধারণ গ্রহের অন্তর্গত হওয়ার অলৌকিকতাকে সম্মান করে।",
    },
    {
      numero: 5,
      titre: "অনুরণনে জীবন, বন্ধন ও সৌন্দর্য সৃষ্টি",
      texte: "Homo biospheris জীবন ও মহাবিশ্বের ছন্দের সাথে সুর মেলায়। সে প্রকৃতির সম্প্রীতি ও চক্র উদযাপন করে। সে তার হৃদয় দিয়ে সত্তা ও বস্তুকে একত্রিত করে এমন গভীর বন্ধনগুলো অনুভব করতে চায়। সে এই সূক্ষ্ম সংযোগ ও সমগ্র জীবমণ্ডলের উপর তার সিদ্ধান্তের প্রভাব সম্পর্কে সচেতন। সে প্রতিটি কর্মকে সৌন্দর্য ও সম্পর্ক সৃষ্টির ইঙ্গিতে রূপান্তরিত করে।",
    },
    {
      numero: 6,
      titre: "ভালোবাসা প্রবাহিত করা",
      texte: "Homo biospheris জানে যে ভালোবাসা অস্তিত্বের প্রাণশক্তি এবং এর অনুপস্থিতি অনেক কষ্টের মূলে ছিল। সে এই ভালোবাসা পোষণ করে, ভাগ করে এবং ছড়িয়ে দেয়, এভাবে সকলের বিকাশের জন্য অনুকূল পারস্পরিক সহায়তা, বিশ্বাস ও সহানুভূতির জাল তৈরি করে।",
    },
    {
      numero: 7,
      titre: "বস্তুজগৎ বোঝা ও সমৃদ্ধ করা",
      texte: "Homo biospheris বাস্তবতাকে রূপদানকারী বিবর্তনের মহান আন্দোলনের অংশ। সে পৃথিবী ও আমাদের চারপাশের মহাবিশ্ব বোঝার জন্য বিজ্ঞান, প্রযুক্তি বা শিল্পে পর্যবেক্ষণ, অধ্যয়ন ও জ্ঞান গভীর করে। সে তার সৃষ্টি দিয়ে ভৌত জগৎকে সমৃদ্ধ করে, নিশ্চিত করে যে সেগুলো জ্ঞানকে এগিয়ে নিয়ে যায়, সমগ্র জীবমণ্ডলের সেবা করে এবং তার ভারসাম্যে অবদান রাখে।",
    },
    {
      numero: 8,
      titre: "অবস্তু জগতের রহস্যের সাথে সংযুক্ত হওয়া",
      texte: "Homo biospheris স্বীকার করে যে মহাবিশ্ব পদার্থ ও চেতনায় গড়া। সে এর অদৃশ্য মাত্রাগুলো অন্বেষণ করে, বিশ্বাসের বহুত্বকে সম্মান করে এবং অজানাকে জ্ঞান ও বিবর্তনের উৎস হিসেবে গ্রহণ করে।",
    },
    {
      numero: 9,
      titre: "মহাবিশ্ব অন্বেষণ করা ও চেতনা ছড়িয়ে দেওয়া",
      texte: "Homo biospheris তার দৃষ্টি পৃথিবীর বাইরে, মহাকাশের অসীমতার দিকে তাক করে। সে জয় করতে নয়, বরং সমস্ত অস্তিত্বকে একত্রিত করে এমন নিয়মগুলো বুঝতে ও আত্মস্থ করতে অন্বেষণ করে। সে অন্যত্র অন্য ধরনের জীবন অনুসন্ধান করতে এবং মহাবিশ্বে চেতনা ছড়িয়ে দিতে সচেষ্ট, একই সাথে জীবমণ্ডলের অখণ্ডতা ও সৌন্দর্য রক্ষা করে।",
    },
    {
      numero: 10,
      titre: "মহাজাগতিক বিপদ থেকে জীবমণ্ডল রক্ষা করা",
      texte: "Homo biospheris মহাকাশ থেকে আসা হুমকি যেমন গ্রহাণু সংঘর্ষ সম্পর্কে সচেতন। সমস্ত প্রজাতির পক্ষে, সে সুরক্ষা কৌশল তৈরি করে এবং জীবনের অভিভাবক হিসেবে জীবমণ্ডলের উপর নজর রাখে।",
    },
  ],
  proclamation:
    "এই মিশনগুলো ঘোষণা করে, আমরা Homo biospheris সভ্যতার ভিত্তি স্থাপন করছি: একটি ঐক্যবদ্ধ, শান্তিপ্রিয় ও জীবনের প্রতি নিবেদিত মানবতা। এই নীতিগুলো আমাদের চিন্তা, বাণী ও কর্মকে পরিচালিত করবে, যাতে আমরা একসাথে জীবমণ্ডলের সাথে সবচেয়ে সুন্দর প্রেমের কাহিনী লিখতে পারি।",
};

// ─────────────────────────────────────────────────────────
// Indonesia
// ─────────────────────────────────────────────────────────
export const charteId: CharteContent = {
  titre: "Piagam Universal Homo biospheris",
  epigraphe: "Kisah cinta paling indah dengan Biosfer",
  preambule: [
    "Kami, Homo sapiens, yang menyadari tempat kami dalam jalinan kehidupan dan urgensi krisis yang kami hadapi, menegaskan komitmen kami untuk menjadi Homo biospheris, sebuah makhluk kolektif yang sepenuhnya terintegrasi dalam Biosfer. Mengakui bahwa nasib kami terkait dengan nasib semua makhluk hidup dan keseimbangan rapuh Bumi, kami sepenuhnya mengemban peran kami sebagai organ Biosfer, Gaia, yang keberadaannya kami akui.",
    "Sadar akan kesalahan masa lalu kami, didorong oleh keinginan untuk bersatu dan meningkatkan diri, kami menyatakan bahwa sudah waktunya berevolusi dari Homo sapiens, 8 miliar individu terisolasi yang tidak peduli pada saling ketergantungan, menuju Homo biospheris, kemanusiaan yang bersatu, penjaga dan pemelihara kehidupan, yang diwujudkan oleh Pangeran Kecil. Dalam semangat tanggung jawab, harmoni, dan kebijaksanaan ini, kami memproklamasikan sepuluh misi fundamental dari organ yang kami bentuk bersama. Fungsi-fungsi ini akan membimbing tindakan individual kami dan metamorfosis kolektif kami melalui Revolusi Biru.",
  ],
  missions: [
    {
      numero: 1,
      titre: "Merawat Biosfer",
      texte: "Homo biospheris memproklamasikan bahwa ia milik Biosfer. Berkomitmen untuk melestarikan, meregenerasi, dan menghormati ekosistem. Dengan miliaran mata dan tangan, ia khususnya menjaga kemurnian udara, air, dan tanah, serta bertindak sebagai penjaga Biosfer. Setiap negara, wilayah, kota, perusahaan, dan individu harus mengambil tanggung jawab ini di wilayah mereka, dan mulai memperbaiki kesalahan masa lalu.",
    },
    {
      numero: 2,
      titre: "Menjaga keselarasan, kesehatan, dan kemakmuran manusia",
      texte: "Homo biospheris mengenali dalam diri setiap manusia cerminan kesatuan kehidupan. Bekerja agar semua orang dapat hidup bermartabat, bebas, dan sehat, dalam harmoni dengan sesama. Mendorong pemeliharaan lingkungan yang kondusif untuk berkembangnya potensi setiap orang, dengan menghormati kerentanan semua orang, ekosistem, dan batas-batas planet.",
    },
    {
      numero: 3,
      titre: "Menjamin kesejahteraan semua makhluk hidup",
      texte: "Homo biospheris menganggap setiap bentuk kehidupan sebagai hal yang penting bagi keseimbangan Biosfer. Menghormati nilai intrinsiknya, menjaga keanekaragaman ekosistem, dan memastikan kemakmuran bersama antara manusia, hewan, tumbuhan, dan organisme mikroskopis lainnya, mengutamakan visi jangka panjang demi keuntungan seluruh Biosfer dalam setiap keputusan.",
    },
    {
      numero: 4,
      titre: "Terpesona",
      texte: "Homo biospheris mengakui keindahan dunia. Membudayakan kekaguman dan kontemplasi, sumber rasa syukur, kreativitas, dan hubungan mendalam dengan Bumi. Menghormati mukjizat menjadi hidup dan menjadi bagian dari planet yang luar biasa ini.",
    },
    {
      numero: 5,
      titre: "Hidup selaras, menciptakan ikatan dan keindahan",
      texte: "Homo biospheris menyelaraskan diri dengan ritme kehidupan dan Alam Semesta. Merayakan harmoni dan siklus alam. Berusaha merasakan, melalui hatinya, ikatan mendalam yang menyatukan makhluk dan benda. Memperhatikan dampak keputusannya pada hubungan halus ini dan pada seluruh Biosfer. Mengubah setiap tindakan menjadi gerak yang menciptakan keindahan dan hubungan.",
    },
    {
      numero: 6,
      titre: "Mengalirkan cinta",
      texte: "Homo biospheris mengetahui bahwa cinta adalah energi vital eksistensi dan ketiadaannya telah menjadi akar banyak penderitaan. Memelihara cinta ini, membaginya, dan membuatnya memancar, sehingga menciptakan jaringan saling membantu, kepercayaan, dan welas asih yang kondusif bagi evolusi semua.",
    },
    {
      numero: 7,
      titre: "Memahami dan memperkaya dunia material",
      texte: "Homo biospheris merupakan bagian dari gerakan evolusi besar yang membentuk realitas. Mengamati, mempelajari, dan memperdalam pengetahuan, baik dalam ilmu pengetahuan, teknologi, maupun seni, untuk memahami Bumi dan Alam Semesta di sekitar kita. Memperkaya dunia material dengan ciptaannya, memastikan bahwa ciptaan tersebut memajukan pengetahuan, melayani Biosfer secara keseluruhan, dan berkontribusi pada keseimbangannya.",
    },
    {
      numero: 8,
      titre: "Terhubung dengan misteri dunia imaterial",
      texte: "Homo biospheris mengakui bahwa Alam Semesta terdiri dari materi dan kesadaran. Menjelajahi dimensi-dimensi tak terlihatnya, menghormati keberagaman keyakinan, dan menyambut yang tidak diketahui sebagai sumber kebijaksanaan dan evolusi.",
    },
    {
      numero: 9,
      titre: "Menjelajahi Kosmos dan menyebarkan kesadaran",
      texte: "Homo biospheris mengarahkan pandangannya melampaui Bumi, menuju ketidakterbatasan Kosmos. Menjelajah bukan untuk menaklukkan, tetapi untuk memahami dan mengintegrasikan hukum-hukum yang menyatukan semua eksistensi. Berupaya mencari bentuk-bentuk kehidupan lain di tempat lain dan menyebarkan kesadaran di seluruh Alam Semesta, sambil menjaga keutuhan dan keindahan Biosfer.",
    },
    {
      numero: 10,
      titre: "Melindungi Biosfer dari bahaya kosmik",
      texte: "Homo biospheris sadar akan ancaman yang datang dari luar angkasa, seperti tabrakan asteroid. Atas nama semua spesies, mengembangkan strategi perlindungan dan berjaga atas Biosfer sebagai penjaga kehidupan.",
    },
  ],
  proclamation:
    "Dengan memproklamasikan misi-misi ini, kami meletakkan fondasi peradaban Homo biospheris: kemanusiaan yang bersatu, damai, dan berdedikasi untuk kehidupan. Prinsip-prinsip ini akan membimbing pikiran, kata-kata, dan tindakan kami, agar kami dapat bersama-sama menulis kisah cinta paling indah dengan Biosfer.",
};

// ─────────────────────────────────────────────────────────
// Lookup map
// ─────────────────────────────────────────────────────────
const CHARTES: Record<string, CharteContent> = {
  fr: charteFr,
  en: charteEn,
  es: charteEs,
  pt: chartePt,
  de: charteDe,
  ru: charteRu,
  ar: charteAr,
  zh: charteZh,
  hi: charteHi,
  bn: charteBn,
  id: charteId,
};

export function getCharte(locale: string): CharteContent {
  return CHARTES[locale] ?? charteFr;
}
