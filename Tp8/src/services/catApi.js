import axios from 'axios';
import { buildPost, FALLBACK_POSTS } from '../data/mockData';

const API_URL = 'https://api.thecatapi.com/v1/images/search';

export async function getCatPosts(limit = 12) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        limit,
        has_breeds: 0,
        mime_types: 'jpg,png',
      },
    });

    return response.data.map((item, index) => buildPost(item, index));
  } catch (error) {
    console.warn('No se pudo cargar The Cat API. Se usan datos de respaldo.', error);
    return FALLBACK_POSTS;
  }
}
