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

  // Rendu de la Galerie
  render() {
      this.el.innerHTML = this.template; // On met le template sur l'element sur lequel on a greffer l'application
      // L'élément .image-list et .image-menu existe pour le naviguateur
  }

  renderImgSlide() {
      this.listEl = this.el.querySelector('.image-list');
      // Rendu des images - On demande à chacun des images de faire un render, donc de s'affciher
      for (let image of this.images) {
          image.imageRender();
      }
  }

  renderImgMenu() {
      this.listEl = this.el.querySelector('.image-menu');
      for (let image of this.images) {
          image.menuRender();
      }
  }

}
