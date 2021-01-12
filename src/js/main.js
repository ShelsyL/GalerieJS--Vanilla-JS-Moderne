import images   from './data';
import Galerie  from './modules/Galerie';


// INSTANCIATION (Création) d'un nouvel objet de type Galerie
new Galerie({
  el: '#app', // On colle notre Galerie sur le el
  images // Envois de Données (ces données devrait venir de la db normalement)
});
