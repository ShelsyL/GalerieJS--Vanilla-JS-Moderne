import images   from './data';
import Galerie  from './modules/Galerie';



new Galerie({
  el: '#app',
  images
});





// class Image {
//   constructor (image) {
//     this.id = image.id;
//     this.src = image.src;
//     this.alt = image.alt;
//     this.content = image.content;
//   }
// }
//
// class Galerie {
//   constructor (el, images) {
//     this.el = document.querySelector(el);
//     this.images = [];
//     this.loadImages(images);
//   }
// }
//
// new Galerie('#app', images);
