import images   from './data'; // Importation des données des images
import Galerie  from './modules/Galerie'; // On charge Galerie.js


// Instanciation (Création) d'un nouvel objet de type Galerie
  // On lui envois un élément et des données images


import image1 from '../images/image1.jpg';
//
   // var debugDiv = document.querySelector('#debug');
   // const imageDiv = document.createElement('div');
   // //imageDiv.innerHTML = "<img src=" + image1 + ">";
   // imageDiv.innerHTML = "<figure> <img src=" + image1 + " alt='Elephant at sunset'> <figcaption>An elephant at sunset</figcaption> </figure>";
   // imageDiv.innerHTML = "<figure> <img src=" + image1 + " alt='Elephant at sunset'> <figcaption>An elephant at sunset</figcaption> </figure>";
   // debugDiv.appendChild(imageDiv);

  // for (let image of images) {
  //   const imageDiv = document.createElement('div');
  //   imageDiv.innerHTML = image.src;
  //   debugDiv.appendChild(imageDiv);
  // };


new Galerie({
  el: '#app', // On colle notre Galerie sur le el
  images // Données (ces données devrait venir de la db normalement)
});
