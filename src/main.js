import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotos } from './js/pixabay-api.js';
import { displayImages } from './js/render-functions.js';

const searchInput = document.getElementById('search-input');
export const galleryEL = document.querySelector('.gallery');
export const formEl = document.querySelector('.form');

const galleryCfg = {
  captionsData: 'alt',
};

let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
lightbox.on('show.simplelightbox', function () {});

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = searchInput.value.trim();
  if (inputValue === '') {
    return iziToast.error({
      message: 'Please try again! Write something.',
      position: 'topRight',
    });
  }
  galleryEL.innerHTML = '<div class="loader"></div>';

  fetchPhotos(inputValue)
    .then(data => {
      const markup = displayImages(data.hits);
      galleryEL.innerHTML = markup;
      lightbox.refresh();
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
    })
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    });
});
