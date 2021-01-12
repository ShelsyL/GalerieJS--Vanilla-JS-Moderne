// Données qui devrait normalement venir de la db avec de l'AJAX.

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';

export default [
  {
    id: 1,
    src: image1,
    alt: "Alice au pays des merveilles",
    content: " Dans le monde décalé des Merveilles, Alice rencontre des personnages extraordinaires tels que Tweedledee et Tweedledum, le Chapelier Toqué, la reine de cœur et le lapin blanc désespérément en retard.",
    href: "#0"
  },
  {
     id: 2,
     src: image2,
     alt: "La reine des neiges", // Titre
     content: "Olaf est un personnage fictif de la franchise Disney's Frozen, produit par Walt Disney Animation Studios. Olaf est d'abord présenté dans Frozen comme un bonhomme de neige animé créé par Elsa et Anna dans leur enfance.",
  },
  {
      id: 3,
      src: image3,
      alt: "Bambi", // Titre
      content: "Dans ce film, Bambi, un faon nouveau-né, apprend, au hasard de ses promenades, mille et une choses qui sont pour lui autant de sources d'émerveillement. De l'été à l'automne, il découvre ainsi les saisons une à une et affronte, pour la toute première fois, l'hiver.",
  },
  {
      id: 4,
      src: image4,
      alt: "Tarzan", // Titre
      content: "Tarzan est un personnage de fiction représentant l’enfant sauvage archétypal élevé par les Grands Singes dans la jungle africaine.",
  },
  {
      id: 5,
      src: image5,
      alt: "Le roi lion", // Titre
      content: "C'est l'histoire de Simba, un jeune lionceau insouciant et turbulent qui est destiné à succéder à son père Mufasa, le très respecté roi des hautes terres d'Afrique. Mais c'est sans compter Scar, son oncle. Jaloux de son frère Mufasa, il a toujours rêvé de prendre le pouvoir.",
  },
  {
      id: 6,
      src: image6,
      alt: "Shrek", // Titre
      content: "Un ogre laid et misanthrope, Shrek, vit tranquille et heureux dans la saleté au milieu d'un marais. Un jour, son espace vital est envahi par une nuée d'horripilantes créatures de contes de fées, 7 nains, 3 ours, un pantin, 3 fées, et moult sorcières, princes charmants, princesses, ainsi qu'un âne bavard et collant.",
  }
];
