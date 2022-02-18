import { API_BASE_URL } from './constants';
import {
  FEATURED_QUERY,
  CATEGORY_QUERY,
  PRODUCT_QUERY,
  SINGLE_PRODUCT_QUERY,
  SEARCH_PRODUCTS_QUERY,
} from '../const';

export async function urlHelper(apiRef, searchType, args) {
  switch (searchType) {
    case FEATURED_QUERY:
      return `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&q=${encodeURIComponent(
        '[[at(document.tags, ["Featured"])]]'
      )}&lang=en-us&pageSize=16`;
    case CATEGORY_QUERY:
      return `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "category")]]'
      )}&lang=en-us&pageSize=12`;
    case PRODUCT_QUERY:
      return `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&lang=en-us&pageSize=88`;
    case SINGLE_PRODUCT_QUERY:
      return `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        `[[at(document.id, "${args}")]]`
      )}`;
    case SEARCH_PRODUCTS_QUERY:
      return `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&q=${encodeURIComponent(
        `[[fulltext(document,"${args}")]]`
      )}&lang=en-us&pageSize=88`;
    default:
      return null;
  }
}
