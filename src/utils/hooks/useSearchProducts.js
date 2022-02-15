import { useState, useEffect } from 'react';
import { urlHelper } from '../urlHelper';
import { useLatestAPI } from './useLatestAPI';
import { FetchHelper } from '../FetchHelper';
import { SEARCH_PRODUCTS_QUERY } from '../../const';

export function useSearchProducts(searchTerm) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [searchResults, setSearchResults] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    const controller = new AbortController();
    async function getSearch() {
      try {
        const url = await urlHelper(apiRef, SEARCH_PRODUCTS_QUERY, searchTerm);
        const { results } = await FetchHelper(url, controller);
        setSearchResults({ data: results, isLoading: false });
      } catch (err) {
        setSearchResults({ ...searchResults, isLoading: false });
      }
    }

    getSearch();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, searchTerm]);

  return { searchResults };
}
