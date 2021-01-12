import Image from './Image'; // Charge Image
import galerieTemplate from './templates/galerie'; // Charge le template de la galerie

export default class Galerie { // Définit la propriété élément (el)
  constructor(data) { // data récupérées de l'instanciation new Galerie

    // APP
      this.app = document.querySelector(data.el);
      this.template = galerieTemplate; // On charge le code html du template de la Galerie (via import ci dessus)
      this.render();

      // list d'object Image.- Tableau vide
      this.images = [];
      // load Image dans this.images.
      this._loadImages(data.images);

      // IMAGE SLIDE
      this.imageSlide;
      this.renderImgSlide();

      // IMAGE MENU
      this.imageMenu;
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
      this.app.innerHTML = this.template; // On met le template sur l'element sur lequel on a greffer l'application
      // L'élément .image-list et .image-menu existe pour le naviguateur

      // On définit slideIndex sur 1
      this.slideIndex = 1;

      // Activation des buttons
      this._activerBtns();
  }


  // RENDU IMAGE MENU ----------
  renderImgMenu() {
      this.imageMenu = this.app.querySelector('.image-menu');
      for (let image of this.images) {
          var imgMenu = image.menuRender();
          imgMenu.onclick = () => {
            alert("Coucou");
          }
      }
  }


  // RENDU IMAGE SLIDE ----------
  renderImgSlide() {
      this.imageSlide = this.app.querySelector('.image-list');
      // Rendu des images - On demande à chacun des images de faire un render, donc de s'affciher
      this.imageSlide.setAttribute('style', 'width:' + this.images.length + '00%');
      for (let image of this.images) {
          image.imageRender();
      }
  }

//------------------------------------------------------------------------------



showGalerieImageItem(nbr) {

      // nbr d'image.
      var nbrImage = this.images.length;

      // trop loin. on reviens au debut.
      if (nbr > nbrImage) {
        this.slideIndex = 1;
      }

      // trop avant. on reviens a la fin.
      else if (nbr < 1) {
        this.slideIndex = nbrImage;
      }

      // affiche le nbr demandé
      else {
        this.slideIndex = nbr;
      }

      // glisser l'element htlm au bon emplacement. en modifiant l'emplacement du bord gauche.
      this.imageSlide.style.left = '-' + (this.slideIndex - 1)  + '00%';
  }

  _activerBtns () {

    // BOUTON PREVIOUS
    this.app.querySelector('.previous').onclick = () => {
        this.showGalerieImageItem(this.slideIndex - 1);
        // this.slideIndex = this.slideIndex - 1;
    };

    // BOUTON NEXT
    this.app.querySelector('.next').onclick = () => {
        this.showGalerieImageItem(this.slideIndex + 1);
        // this.slideIndex = this.slideIndex + 1;
    };

    // BOUTON PLAY
    this.app.querySelector('.play').onclick = () => {
      if (!this.play_is_active) {
    		  this._play();
    	}
    };

    // BOUTON PAUSE
    this.app.querySelector('.stop').onclick = () => {
      if (this.play_is_active) {
    		this._play();
    	}
    };
  }

  _play() {
  	if (this.play_is_active) {
  		this.play_is_active = false;
  	} else if (!this.is_running) {
  		this.play_is_active = true;
  		this._playtheslide();
  	}
  	// switchtheclass();
  }

  _playtheslide() {
  	if (this.play_is_active) {
  		this.is_running = true;
  		this.showGalerieImageItem(this.slideIndex + 1);
  		setTimeout(()=>{
  			this._playtheslide();
  		}, 2000);
  	} else {
  		this.is_running = false;
  	}
  }
}
