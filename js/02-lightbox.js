import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkUp = createImageGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkUp);



function createImageGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`;
        })
        .join('');
};

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: "img",
    captionsData: "alt",
    captionsPosition: "bottom",
    captionsDelay: 250,
    showCounter: false,
    enableKeyboard: true,
});