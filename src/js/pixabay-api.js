import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '44119919-a0aa1893dc0c72e99b6a5bc11';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = value => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
