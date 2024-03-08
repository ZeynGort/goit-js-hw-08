import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
const listGallery = document.querySelector('.gallery');
const cardsImages = galleryCreate(galleryItems);

listGallery.insertAdjacentHTML('beforeend', cardsImages);

function galleryCreate(galleryItems) {
  console.log('galleryCreate виконався');
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
