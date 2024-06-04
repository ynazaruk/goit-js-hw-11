import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const displayImages = images => {
  return images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
      <a class="gallery-link" href ="${largeImageURL}">
      <img class="gallery-image"
      width="1280"
      height="152"
      src="${webformatURL}"
      data-source="${largeImageURL}"
      alt="${tags}" />
      </a>
      <ul class="gallery-description">
      <li>
      <h3>Likes</h3><p>${likes}</p>
      </li>
      <li>
      <h3>Views</h3><p>${views}</p>
      </li>
      <li>
      <h3>Comments</h3><p>${comments}</p>
      </li>
      <li>
      <h3>Downloads</h3><p>${downloads}</p>
      </li>
      </ul>
      </li>`
    )
    .join('');
};
