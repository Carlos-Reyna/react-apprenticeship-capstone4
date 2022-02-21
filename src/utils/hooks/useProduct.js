import { useState, useEffect } from 'react';
import { urlHelper } from '../urlHelper';
import { useLatestAPI } from './useLatestAPI';
import { FetchHelper } from '../FetchHelper';
import { SINGLE_PRODUCT_QUERY } from '../../const';

export function useProduct(productId) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [productInfo, setProductInfo] = useState({
    product: { images: [] },
    isLoading: true,
  });

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    const controller = new AbortController();
    async function getProduct() {
      try {
        const url = await urlHelper(apiRef, SINGLE_PRODUCT_QUERY, productId);
        const { results } = await FetchHelper(url, controller);
        setProductInfo({ product: results[0], isLoading: false });
      } catch (err) {
        setProductInfo({ ...productInfo, isLoading: false });
      }
    }

    getProduct();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  function updateProductStock(quantity) {
    const newProduct = { ...productInfo.product };
    const newValue = newProduct.data.stock - quantity;
    const data = { ...newProduct.data, stock: newValue };
    setProductInfo({ product: { ...newProduct, data }, isLoading: false });
  }

  return { productInfo, updateProductStock };
}
