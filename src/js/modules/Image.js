import imageTemplate from './templates/image'; // On importe imageTemplate
import menuTemplate from './templates/menu'; // On importe imageTemplate


// data: {
//   parent: Galerie,
//   image: {id: 1, src: "./assets/slides/image2.jpg", alt: "A cat game", content: "Lorem Ipsum..."}
// }

export default class Image {
  constructor(data) {
      this.parent = data.parent;
      this.id = data.image.id; // Ton id (id de class Image), est égal à l'id de image
      this.src = data.image.src;
      this.alt = data.image.alt;
      this.href = data.image.href;
      this.content = data.image.content;
      this.templateImgSlide = imageTemplate;
      this.templateImgMenu = menuTemplate;
  }

  /* On crée le render après car dans le constructor on a pas encore
     de code HTML du template, quand on le push, le code HTML se construit apres. */


  // RENDU D'UNE IMG MENU
  menuRender() {
      // On transforme le this.template |  Je remplace les données statique par les données de Image
      // On parcouri toutes les propriétés - d'un Objet(in) - d'un Tableau(of) | this c'est l'objet
      for (let propriete in this) {
          this.templateImgMenu = this.templateImgMenu.replace('{{' + propriete + '}}', this[propriete]);
      }

      // CONSTRUCTION D'UNE IMG MENU
      const newImgMenu = document.createElement('li'); // Création du nouveau li
      newImgMenu.innerHTML = this.templateImgMenu; // .. A la place d'afficher un Coucou on aura le template d'une image ..
      this.parent.imageMenu.appendChild(newImgMenu); // .. et il va venir l'ajouter a la Galerie
      return newImgMenu;
  }

  // RENDU D'UNE IMG SLIDE
  imageRender() {
      for (let propriete in this) { // On parcour toutes les propriétés | this c'est l'objet
          this.templateImgSlide = this.templateImgSlide.replace('{{' + propriete + '}}', this[propriete]);
          //this.templateImgMenu = this.templateImgMenu.replace('{{'+propriete+'}}', this[propriete]);
      }
      // CONSTRUCTION D'UNE IMG SLIDE
      const newImgSlide = document.createElement('li'); // Création du nouveau li
      newImgSlide.classList.add("slide"); // class slide au nouveau élément li
      newImgSlide.innerHTML = this.templateImgSlide; // .. A la place d'afficher un Coucou on aura le template d'une image ..
      this.parent.imageSlide.appendChild(newImgSlide); // .. et il va venir l'ajouter a la Galerie
      return newImgSlide;
  }
}
