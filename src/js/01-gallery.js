// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(galleryItems);
// Change code below this line
import SimpleLightbox from "simplelightbox";
import templateFunction from '../templates/item-markup.hbs';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

(function createMarkup() {
  const itemMarkup = galleryItems.map(templateFunction).join('');
  galleryContainer.insertAdjacentHTML('beforeend', itemMarkup);
})();



new SimpleLightbox('.gallery a', {
   captions: true,
   captionsData: 'alt',
   captionDelay: 250,
 });
