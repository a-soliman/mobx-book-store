import axios from 'axios';
import { GOOD_READS } from '../config/config';

export const searchBooks = (term) => {
  const searchURL = `https://www.goodreads.com/search/index.xml?key=${GOOD_READS.key}&q=${term}`;
  return axios.get(searchURL);
};