import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotos } from './js/pixabay-api.js';

fetchPhotos().then(imagesData => {
  console.log(imagesData.results);
});
