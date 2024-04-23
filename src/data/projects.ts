export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tasks: string[];
  github?: string;
  url?: string;
  tags: string[];
};
const projects: Project[] = [
  {
    id: 1,
    title: "Gaufillier Rénov",
    description:
      "Dans le cadre de mon stage de fin d'études, j'ai accompagné un artisan spécialisé dans l'aménagement et la décoration d'intérieur dans la création de sa communication digitale.",
    image: "/projects/Mockup-Gaufillier-renov.avif",
    tasks: [
      "Charte graphique: Élaboration d'une charte graphique définissant les  éléments clés de l'identité visuelle (refaire le logo, couleurs,    typographies, etc.).",
      "Site web: Conception et développement d'un site vitrine sous WordPress et création d'un thème personnalisé en reprenant les codes de la charte graphique et intégrant des champs personnalisés pour la publication des chantiers réalisés.",
    ],
    tags: ["wordpress", "php", "sass", "adobe illustrator", "js"],
  },
  {
    id: 2,
    title: "Snake Game",
    description: "Le jeu de Snake en JavaScript est une implémentation classique du jeu vidéo rétro, où les joueurs contrôlent un serpent qui se déplace à travers un espace clos, consommant des pommes pour grandir tout en évitant de se heurter aux murs ou à son propre corps.",
    image: "/projects/Mockup-snack.avif",
    url:"https://snake-beta-one.vercel.app/",
    tasks: [ "Mécanique de jeu: Création du serpent et de la pomme, gestion des mouvements du serpent et les collisions, ainsi que la gestion du score qui permet de redémarrer le jeu après un Game Over. Les contrôles du jeu sont fluides via le clavier, offrant une expérience interactive et immersive." ],
    tags: ["JavaScript"],
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Portfolio créer par Astro et Tailwind.",
    image: "/blog/trend-2024.jpeg",
    tasks: [],
    tags: ["Astro", "Tailwind"],
  },
];

export default projects;
