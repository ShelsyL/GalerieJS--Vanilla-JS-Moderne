import Image from './Image'; // Charge Image
import galerieTemplate from './templates/galerie'; // Charge le template de la galerie


export default class Galerie { // Définit la propriété élément (el)

  // CONSTRUTEUR
  constructor(data) { // data récupérées de l'instanciation new Galerie

      // APP
      this.app = document.querySelector(data.el);
      this.template = galerieTemplate; // On charge le code html du template de la Galerie (via import ci dessus)
      this.render();

      // LISTE OBJECT IMAGES
      this.images = []; // Tableau vide
      this._loadImages(data.images); // load Image dans this.images.

      // IMAGE SLIDE
      this.imageSlide;
      this.renderImgSlide();

      // IMAGE MENU
      this.imageMenu;
      this.renderImgMenu();

  }


  /*
  METHODE _loadImages()
    Chargement des images sous formes d'objets de type Image dans this.images
    But => Parcour tous les images pour en faire des objets de type Image
    - dans this.images, on envois un tableau de type json avec 4 propriétés (id, src, alt, content)
  */
  _loadImages(images) {
      for (let image of images) {
          this.images.push(new Image({
              parent: this,
              image
          }));
      }
  }

  /*
    METHODE render()
      Rendu de la Galerie
      - 1. On met le template sur l'element sur lequel on a greffer l'application
      - 2. On définit slideIndex sur 1
      - 3. Activation des buttons
   */
  render() {
      this.app.innerHTML = this.template;
      // L'élément .image-list et .image-menu existe pour le naviguateur
      this.slideIndex = 1;
      this._activerBtns();
  }

  /*
    METHODE renderImgMenu()
      Rendu d'une image du menu
      - 1. On définit "ton" imageMenu
      - 2. Pour chaque image dans nos données
      - 3. On défini imgMenu (rendu d'une image menu dans la class Image)
      - 4. On capture l'evenement (cliquer sur une image du menu)
      - 5. On envois dans showGalerieImageItem l'id de l'image
   */
  renderImgMenu() {
      this.imageMenu = this.app.querySelector('.image-menu');
      for (let image of this.images) {
          const imgMenu = image.menuRender();
          imgMenu.onclick = () => {
              this.viewGalerieImg(image.id);
          }
      }
  }


  /*
    METHODE renderImgSlide()
      Rendu d'une image du slide
      - 1. On définit "ton" imageSlide
      - 2. On ajoute un nouvelle attribut style, valeur -> taille de l'img %
      - 3. Pour chaque image dans nos données ..
      - 4. fait un rendu (rendu d'une image slide dans la class Image)
   */
  renderImgSlide() {
      this.imageSlide = this.app.querySelector('.image-list');
      // Rendu des images - On demande à chacun des images de faire un render, donc de s'affciher
      this.imageSlide.setAttribute('style', 'width:' + this.images.length + '00%');
      for (let image of this.images) {
          image.imageRender();
      }
  }


  /*
    METHODE viewGalerieImg()
      Vue d'une image dans la galerie
      - 1. On envois le nbr
   */
  viewGalerieImg(nbr) {

    // nbr d'image.
    const nbrImage = this.images.length;

    // trop loin, on reviens au debut.
    if (nbr > nbrImage) {
        this.slideIndex = 1;
    }

    // trop avant, on reviens à la fin.
    else if (nbr < 1) {
        this.slideIndex = nbrImage;
    }

    // affiche le nbr demandé
    else {
        this.slideIndex = nbr;
    }

    // glisser l'élement htlm au bon emplacement, en modifiant l'emplacement du bord gauche
    this.imageSlide.style.left = '-' + (this.slideIndex - 1) + '00%';
  }


  /*
  METHODE _activerBtns()
    Activation des boutons
  */
  _activerBtns() {

    /* BOUTON PREVIOUS
      1. On capture l'évenement
      2. On affiche dans "ta" vueImgGalerie "ton" slideIndex -1
    */
    this.app.querySelector('.previous').onclick = () => {
        this.viewGalerieImg(this.slideIndex - 1);
        // this.slideIndex = this.slideIndex - 1;
    };

    /* BOUTON NEXT
      1. On capture l'évenement
      2. On affiche dans "ta" vueImgGalerie "ton" slideIndex +1
    */
    this.app.querySelector('.next').onclick = () => {
        this.viewGalerieImg(this.slideIndex + 1);
        // this.slideIndex = this.slideIndex + 1;
    };

    /* BOUTON PLAY
      1. On capture l'évenement
      2. Si "tu est différent" de play_is_active
      3. "tu" active _play()
    */
    this.app.querySelector('.play').onclick = () => {
        if (!this.play_is_active) {
            this._play();
        }
    };

    /* BOUTON PAUSE
        1. On capture l'évenement
        2. Si "tu" est play_is_active
        3. "tu" active _play()
    */
    this.app.querySelector('.stop').onclick = () => {
        if (this.play_is_active) {
            this._play();
        }
    };
  }


/*
  METHODE _play()
    1. Si "tu" est play_is_active
      "ton" play_is_active est faux
    2. Sinon, si "tu est différent" de is_running (en cours d'éxécution)
      "ton" play_is_active est true
      "tu" active _playtheslide()
*/
  _play() {
      if (this.play_is_active) {
          this.play_is_active = false;
      } else if (!this.is_running) {
          this.play_is_active = true;
          this._playtheslide();
      }
      // switchtheclass();
  }


/*
  METHODE _playtheslide()
    1. Si "tu" est play_is_active
       "ton" is_running (en cours d'éxécution) est true
       "ta" viewGalerieImg est "ton" slideIndex + 1
       valeur de lecture => 2sec
    2. Sinon "ton" is_running (en cours d'éxécution) est false
 */
  _playtheslide() {
      if (this.play_is_active) {
          this.is_running = true;
          this.viewGalerieImg(this.slideIndex + 1);
          setTimeout(() => {
              this._playtheslide();
          }, 2000);
      } else {
          this.is_running = false;
      }
  }
}
