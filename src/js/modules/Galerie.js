import Image from './Image'; // Charge Image
import galerieTemplate from './templates/galerie'; // Charge le template de la galerie

export default class Galerie { // Définit la propriété élément (el)
  constructor(data) { // data récupérées de l'instanciation new Galerie
      this.el = document.querySelector(data.el);
      this.listEl;
      this.images = []; // On met les données chargée ci dessous dans ce tableau vide.
      this._loadImages(data.images); // On charge les données des images pour hydrater this.images
      this.template = galerieTemplate; // On charge le code html du template de la Galerie (via import ci dessus)
      this.render();
      this.renderImgSlide();
      this.renderImgMenu();
  }

  // METHODE loadImages - Chargement des images sous formes d'objets de type Image dans this.images
  // But => Parcour tous les images pour en faire des objet de type Image
  _loadImages(images) {
      for (let image of images) {
          this.images.push(new Image({
              parent: this,
              image
          })); //dans (image));, on envois un tableau de type json avec 4 propriétés (id, src, alt, content)
      }
  }

    // RENDU GALERIE ----------
  render() {
      this.el.innerHTML = this.template; // On met le template sur l'element sur lequel on a greffer l'application
      // L'élément .image-list et .image-menu existe pour le naviguateur

      // Activation des éléments intéractifs
      this._next();
      this._play();
      this._previous();
      this._stop();
  }

  // RENDU IMAGE SLIDE ----------
  renderImgSlide() {
      this.listEl = this.el.querySelector('.image-list');
      // Rendu des images - On demande à chacun des images de faire un render, donc de s'affciher
      for (let image of this.images) {
          image.imageRender();
      }
  }

  // RENDU IMAGE MENU ----------
  renderImgMenu() {
      this.listEl = this.el.querySelector('.image-menu');
      for (let image of this.images) {
          image.menuRender();
      }
  }

//------------------------------------------------------------------------------

  // BOUTON NEXT ----------
  _next() {
    // Activation de l'input navigation
    this.el.querySelector('.next').onclick = (e) => { // On va chercher .new-todo, quand on clique sur une tuche on capture l'évenement
        alert("Next");
      };
    }

  // BOUTON PLAY ----------
  _play() {
    // Activation de l'input navigation
    this.el.querySelector('.play').onclick = (e) => { // On va chercher .new-todo, quand on clique sur une tuche on capture l'évenement
        alert("Play");
      };
    }

  // BOUTON PREVIOUS ----------
  _previous() {
    // Activation de l'input navigation
    this.el.querySelector('.previous').onclick = (e) => { // On va chercher .new-todo, quand on clique sur une tuche on capture l'évenement
        alert("Previous");
      };
    }

  // BOUTON STOP ----------
  _stop() {
    // Activation de l'input navigation
    this.el.querySelector('.stop').onclick = (e) => { // On va chercher .new-todo, quand on clique sur une tuche on capture l'évenement
        alert("Stop");
      };
    }


}
