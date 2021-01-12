import imageTemplate from './templates/image';
import menuTemplate from './templates/menu';


// data: {
//   parent: Galerie,
//   image: {id: 1, src: "./assets/slides/image2.jpg", alt: "A cat game", content: "Lorem Ipsum..."}
// }

export default class Image {

  // CONSTRUTEUR -----------------------------------------------------------------
  constructor(data) {

      // 1."ton" parent est date.parent (parent: Galerie)
      this.parent = data.parent;

      // 2. Propriétés
      this.id = data.image.id;
      this.src = data.image.src;
      this.alt = data.image.alt;
      this.href = data.image.href;
      this.content = data.image.content;

      // 3.Imports
      this.templateImgSlide = imageTemplate;
      this.templateImgMenu = menuTemplate;
    }
    /* NB: On crée le render après car dans le constructor on a pas encore
       de code HTML du template, quand on le push, le code HTML se construit après. */



// RENDU (GENERE) DE LA VUE 'IMAGE MENU' ------------------------------------------------------
  // - NB: un Objet(in) - d'un Tableau(of) | this c'est l'objet
  menuRender() {
    for (let propriete in this) {
        // On remplace les données statique par les données de Image
        this.templateImgMenu = this.templateImgMenu.replace('{{' + propriete + '}}', this[propriete]);
    }
    // CONSTRUCTION D'UNE IMG MENU -----
    const newImgMenu = document.createElement('li');
    newImgMenu.innerHTML = this.templateImgMenu;
    this.parent.imageMenu.appendChild(newImgMenu);
    return newImgMenu;
  }



// RENDU (GENERE) D'UNE 'IMAGE SLIDE -----------------------------------------------------
  imageRender() {
    for (let propriete in this) {
        // On remplace les données statique par les données de Image
        this.templateImgSlide = this.templateImgSlide.replace('{{' + propriete + '}}', this[propriete]);
    }
    // CONSTRUCTION D'UNE IMG SLIDE -----
    const newImgSlide = document.createElement('li');
    newImgSlide.classList.add("slide");
    newImgSlide.innerHTML = this.templateImgSlide;
    this.parent.imageSlide.appendChild(newImgSlide);
    return newImgSlide;
  }

}
