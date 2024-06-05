import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { galleryEL } from '../main';
import { formEl } from '../main';

export function fetchPhotos(inputValue) {
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = new URLSearchParams({
    key: '44119919-a0aa1893dc0c72e99b6a5bc11',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
