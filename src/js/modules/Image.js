import imageTemplate from './templates/image';

export default class Image {
  constructor (image) {
    this.id = image.id; // Ton id (id de class Image), est égal à l'id de image
    this.src = image.src;
    this.alt = image.alt;
    this.content = image.content;
  }
}
