import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { urlHelper } from '../urlHelper';
import { useLatestAPI } from './useLatestAPI';
import { storeFeaturedProducts } from '../../reducers/productSlice';
import { FetchHelper } from '../FetchHelper';

export function useFeaturedProducts(requestType) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const { productStore } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    const controller = new AbortController();
    async function getFeaturedProducts() {
      try {
        const url = await urlHelper(apiRef, requestType, null);
        const { results } = await FetchHelper(url, controller);
        dispatch(
          storeFeaturedProducts({
            featuredProductData: results,
            isLoading: false,
          })
        );
      } catch (err) {
        dispatch(
          storeFeaturedProducts({ featuredProductData: [], isLoading: false })
        );
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return { productStore };
}
