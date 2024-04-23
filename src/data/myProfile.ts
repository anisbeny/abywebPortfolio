type Social = {
    label: string;
    link: string;
    icon?: string;
  };
  
  type Presentation = {
  
    mail: string;
    title: string;
    job?: string;
    description: string;
    socials: Social[];
    profile?: string;
    logo?: string;
  };
  const myProfile: Presentation = {
  
    mail: "aby4155@outlook.fr",
    title: "Hi, I’m Anis 👋",
    job: "UI designer & web developer",
    profile: "/profile-pic.avif",
    logo:"/aby webcrea_light.png",
    description:
      "Transformez votre vision web en réalité avec mon expertise en développement et design graphique. Je crée des sites web sur mesure, façonne des identités visuelles mémorables, et conçois des designs distinctifs qui rehaussent votre présence en ligne et vous propulsent vers la réalisation de vos ambitions. En utilisant des outils de pointe tels que:",
    socials: [
      {
        label: "Linkedin",
        link: "https://www.linkedin.com/in/anis-ben-youssef-151081201/",
      },
      {
        label: "Behance",
        link: "https://www.behance.net/anisbenyoussef1",
      },
      {
        label: "Github",
        link: "https://github.com/anisbeny",
      },
    ],
  };
  
  export default myProfile;