import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { urlHelper } from '../urlHelper';
import { useLatestAPI } from './useLatestAPI';
import {
  storeProducts,
  storeFilterProducts,
} from '../../reducers/productSlice';
import { FetchHelper } from '../FetchHelper';
import { filterProducts } from '../ItemsHelper';

export function useProducts(requestType, categories) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const { productStore } = useSelector((state) => state);
  const dispatch = useDispatch();

  function applyFilter(currentCategories) {
    const filteredProducts = filterProducts(
      currentCategories,
      productStore.productData
    );

    dispatch(storeFilterProducts({ filteredProducts }));
  }

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    const controller = new AbortController();
    async function getProducts() {
      try {
        const url = await urlHelper(apiRef, requestType, null);
        const { results } = await FetchHelper(url, controller);

        dispatch(storeProducts({ productData: results, isLoading: false }));
      } catch (err) {
        dispatch(storeProducts({ productData: [], isLoading: false }));
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  useEffect(() => {
    if (categories.length !== 0) {
      applyFilter(categories);
    }
  }, [productStore.productData]);

  return { productStore, applyFilter };
}
