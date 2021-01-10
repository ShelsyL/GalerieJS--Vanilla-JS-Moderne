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


  // Rendu d'une image
  menuRender() {
      // On transforme le this.template |  Je remplace les données statique par les données de Image
      // On parcouri toutes les propriétés - d'un Objet(in) - d'un Tableau(of) | this c'est l'objet
      for (let propriete in this) {
          this.templateImgMenu = this.templateImgMenu.replace('{{' + propriete + '}}', this[propriete]);
      }

      // CONSTRUCTION D'UNE IMG MENU
      const newMenu = document.createElement('li'); // Création du nouveau li
      newMenu.innerHTML = this.templateImgMenu; // .. A la place d'afficher un Coucou on aura le template d'une image ..
      this.parent.listEl.appendChild(newMenu); // .. et il va venir l'ajouter a la Galerie
  }

  imageRender() {
      for (let propriete in this) { // On parcour toutes les propriétés | this c'est l'objet
          this.templateImgSlide = this.templateImgSlide.replace('{{' + propriete + '}}', this[propriete]);
          //this.templateImgMenu = this.templateImgMenu.replace('{{'+propriete+'}}', this[propriete]);
      }
      // CONSTRUCTION D'UNE IMG SLIDE
      const newImage = document.createElement('li'); // Création du nouveau li
      newImage.classList.add("slide"); // class slide au nouveau élément li
      newImage.innerHTML = this.templateImgSlide; // .. A la place d'afficher un Coucou on aura le template d'une image ..
      this.parent.listEl.appendChild(newImage); // .. et il va venir l'ajouter a la Galerie
  }
}
