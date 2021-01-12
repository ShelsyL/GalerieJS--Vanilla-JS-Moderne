import imageTemplate from './templates/image'; // On importe imageTemplate
import menuTemplate from './templates/menu'; // On importe imageTemplate


// data: {
//   parent: Galerie,
//   image: {id: 1, src: "./assets/slides/image2.jpg", alt: "A cat game", content: "Lorem Ipsum..."}
// }

export default class Image {
  // CONSTRUCTEUR
  constructor(data) {
    // "ton" parent est date.parent (parent: Galerie)
      this.parent = data.parent;
    // On associe "ton" x à data.image.x, ex: ton id et égal à l'id de image
      this.id = data.image.id;
      this.src = data.image.src;
      this.alt = data.image.alt;
      this.href = data.image.href;
      this.content = data.image.content;
      // On stocke les imports dans des variables
      this.templateImgSlide = imageTemplate;
      this.templateImgMenu = menuTemplate;
    }
    /* NB: On crée le render après car dans le constructor on a pas encore
       de code HTML du template, quand on le push, le code HTML se construit après. */


  /*
    METHODE menuRender()
      RENDU D'UNE IMAGE MENU
      1. Pour toutes les propriéts dans "toi" - NB: un Objet(in) - d'un Tableau(of) | this c'est l'objet
      2. On remplace les données statique par les données de Image
  */
  menuRender() {
    for (let propriete in this) {
        this.templateImgMenu = this.templateImgMenu.replace('{{' + propriete + '}}', this[propriete]);
    }

    /* CONSTRUCTION D'UNE IMG MENU
        1. Création d'un nouveau li
        2. Dans ce li, template d'une image
        3. On ajoute dans "ton" parent (Galerie) le template d'une nouvelle image menuRender
        4. On retourne une nouvelle image menu
    */
    const newImgMenu = document.createElement('li');
    newImgMenu.innerHTML = this.templateImgMenu;
    this.parent.imageMenu.appendChild(newImgMenu);
    return newImgMenu;
  }


  /* METHODE imageRender()
      RENDU D'UNE IMAGE SLIDE
      1. Pour toutes les propriéts dans "toi"
      2. On remplace les données statique par les données de Image
  */
  imageRender() {
    for (let propriete in this) {
        this.templateImgSlide = this.templateImgSlide.replace('{{' + propriete + '}}', this[propriete]);
    }

    /* CONSTRUCTION D'UNE IMG SLIDE
        1. Création d'un nouveau li
        2. On ajoute la class "slide"
        2. Dans ce li, template d'une image
        3. On ajoute dans "ton" parent (Galerie) le template d'une nouvelle image menuRender
        4. On retourne une nouvelle image slide
    */
    const newImgSlide = document.createElement('li');
    newImgSlide.classList.add("slide");
    newImgSlide.innerHTML = this.templateImgSlide;
    this.parent.imageSlide.appendChild(newImgSlide);
    return newImgSlide;

// Activation du bouton rond +
this._activerAddCircle();

  }

//-------------------------------------

  /*
  METHODE _activerAddCircle()
    Activation du bouton rond +
  */
  _activerAddCircle() {


      }


  }



}
