import Image from './Image';
import galerieTemplate from './templates/galerie';


export default class Galerie { // Définit la propriété élément (el)

// CONSTRUTEUR -----------------------------------------------------------------
    // data récupérées de l'instanciation new Galerie
  constructor(data) {

      // 1.load Image dans this.images.
      this.images = [];
      this._loadImages(data.images);

      // 2. APP - Récupère app element, charge le template dedans
      this.app = document.querySelector(data.el);
      this.app.innerHTML = galerieTemplate;

      // 3. Récupération des élements dont on a besoin (apres avoir charger le template).
      this.title = this.app.querySelector('.title');
      this.imageSlide = this.app.querySelector('.image-list');
      this.imageMenu = this.app.querySelector('.image-menu');
      this.timer = null;

      // 4. IMAGE SLIDE - Gestion des images 'slide' (genereVue, gereEvenement - figcaption, appendChild-imageSlide)
      this.renderImgSlide();

      // 5. IMAGE MENU - Gestion des images 'menu' (genereVue, gereEvenement - onclick, appendChild-imageSlide)
      this.renderImgMenu();

      // 6. Activer les boutons
      this._activerBtns();

      // 7. Selectionne l'image slide par defaut.
      this.viewGalerieImg(1);
  }


// CHARGEMENT DES IMAGES -------------------------------------------------------
  // Parcours des images de data. Json format.
  // Creation d'object Image - json avec 4 propriétés (id, src, alt, content)
  // Ajout dans le tableau de donnée 'this.images[]''
  _loadImages(images) {
      for (let image of images) {
          this.images.push(new Image({
              parent: this,
              image
          }));
      }
  }



// RENDU IMAGE MENU ------------------------------------------------------------
  renderImgMenu() {
    for (let image of this.images) {
      const imgMenu = image.menuRender(); //(menuRender() vient de la class Image)
      imgMenu.onclick = () => {
        this.viewGalerieImg(image.id);
      }
    }
  }



// RENDU IMAGE SLIDE -----------------------------------------------------------
  renderImgSlide() {

      this.imageSlide.setAttribute('style', 'width:' + this.images.length + '00%'); // Ajout Attribut

      for (let image of this.images) {
          const imgGalerie = image.imageRender(); // (imageRender() vient de la class Image)

          // BOUTON ADDCIRCLE (figcaption)
          const elFigcaption = imgGalerie.querySelector('figcaption');
          const iconFigcaption = imgGalerie.querySelector('.icon.icon-info .material-icons');

          elFigcaption.onclick = () => {
            const taille = elFigcaption.style.right;
            if(taille === "0px") {
              // Affiche
              elFigcaption.setAttribute("style", "right: -20%;");
              iconFigcaption.innerHTML = "add_circle";
            }
            else {
              // Cache
              elFigcaption.setAttribute("style", "right: 0px;");
              iconFigcaption.innerHTML = "remove_circle";
            }
          }
      }
  }



// CONDITIONS DU SLIDE ---------------------------------------------------------

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

    // glisse l'élement htlm au bon emplacement, en modifiant l'emplacement du bord gauche
    this.imageSlide.style.left = '-' + (this.slideIndex - 1) + '00%';
    this.title.innerText = this.images[this.slideIndex-1].alt;
  }



// ACTIVATION DES BOUTONS ---------------------------------------------------------

  _activerBtns() {

    // BOUTON PREVIOUS
    this.app.querySelector('.previous').onclick = () => {
        this._previousAction();
    };

    // BOUTON NEXT
    this.app.querySelector('.next').onclick = () => {
        this._nextAction();
    };

    // BOUTON PLAY
    this.app.querySelector('.play').onclick = () => {
      this._playAction();
    };

    // BOUTON PAUSE STOP
    this.app.querySelector('.stop').onclick = () => {
        this._stopAction();
    };

  };



// ACTIONS DES BOUTONS ---------------------------------------------------------

    // Action PLAY
    _playAction() {
      if (this.timer === null) {
        this._nextAction();
        this.timer = setInterval(()=>{this._nextAction();}, 2000); // lance toute les 2 sec
      }
      else {
        this._stopAction();
      };
    };

    // Action STOP
    _stopAction() {
      clearInterval(this.timer);
      this.timer = null;
    };

    // Action NEXT
    _nextAction() {
      this.viewGalerieImg(this.slideIndex + 1);
    };

    // Action PREVIOUS
    _previousAction() {
      this.viewGalerieImg(this.slideIndex - 1);
    };

}
