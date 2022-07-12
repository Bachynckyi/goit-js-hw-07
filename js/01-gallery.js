import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkUp = createImageGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkUp);
gallery.addEventListener('click', onImageClick);


function createImageGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href='${original}'>
                <img
                    class="gallery__image"
                    src= '${preview}'
                    data-source= '${original}'
                    alt= '${description}'
                />
            </a>
        </div>`
        })
        .join('');
};

function onImageClick(event) {
    event.preventDefault();
    const isImageSwatchElement = event.target.classList.contains("gallery__image");

    if (!isImageSwatchElement) {
        return;
    }
    const galleryItems = event.target;
    const galleryBigImage = galleryItems.dataset.source;;
    let instance = basicLightbox.create(`
		<img width="800" height="600" src="${galleryBigImage}">
	`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscapePress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscapePress);
      },
    });

    instance.show();

    function onEscapePress(event) {
  const ESCAPE = "Escape";

  if (event.code === ESCAPE) {
    instance.close();
  }
}
};



	