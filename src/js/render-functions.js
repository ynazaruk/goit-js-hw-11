import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { galleryEL } from '../main';

export function displayImages(images) {
  galleryEL.innerHTML = '';

  return images
    .map(
      image => `<li class="gallery-item">
      <a class="gallery-link" href ="${image.largeImageURL}">
      <img class="gallery-image"
      width="360"
      height="200"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      alt="${image.tags}" />
      </a>
      <ul class="gallery-description">
      <li>
      <h3>Likes</h3><p>${image.likes}</p>
      </li>
      <li>
      <h3>Views</h3><p>${image.views}</p>
      </li>
      <li>
      <h3>Comments</h3><p>${image.comments}</p>
      </li>
      <li>
      <h3>Downloads</h3><p>${image.downloads}</p>
      </li>
      </ul>
      </li>`
    )
    .join('');
}
