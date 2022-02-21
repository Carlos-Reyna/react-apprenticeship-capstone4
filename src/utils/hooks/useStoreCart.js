import { useSelector, useDispatch } from 'react-redux';
import {
  storeSelectedProducts,
  storeProducts,
  storeFilterProducts,
  storeFeaturedProducts,
} from '../../reducers/productSlice';

export function useStoreCart() {
  const { productStore } = useSelector((state) => state);
  const dispatch = useDispatch();

  function getStoredProducts(type) {
    switch (type) {
      case 'FEATURED':
        return productStore.featuredProductData;
      case 'LIST':
        return productStore.productData;
      default:
        return productStore.productData;
    }
  }

  function removeFromCart(itemId) {
    const newItems = [...productStore.selectedProducts].filter(
      (item) => item.id !== itemId
    );

    dispatch(storeSelectedProducts({ selectedProducts: newItems }));
  }

  function updateFilteredData(item) {
    const filteredProduct = [...productStore.filteredProducts];
    const index = filteredProduct.findIndex(
      (product) => product.id === item.id
    );

    if (index !== -1) {
      filteredProduct[index] = item;
      dispatch(
        storeFilterProducts({
          filteredProducts: filteredProduct,
          isLoading: false,
        })
      );
    }
  }

  function updateStoredData(storedItem, newItems, type) {
    switch (type) {
      case 'FEATURED':
        dispatch(
          storeFeaturedProducts({
            featuredProductData: newItems,
            isLoading: false,
          })
        );
        break;
      case 'LIST':
        dispatch(storeProducts({ productData: newItems, isLoading: false }));
        updateFilteredData(storedItem);
        break;
      default:
        dispatch(storeProducts({ productData: newItems, isLoading: false }));
        updateFilteredData(storedItem);
        break;
    }
  }

  function reduceProductStock(item, quantity, type) {
    const storedProducts = [...getStoredProducts(type)];
    const index = storedProducts.findIndex((stored) => stored.id === item.id);
    if (index !== -1) {
      const value = storedProducts[index].data.stock - quantity;
      const storedData = {
        ...storedProducts[index].data,
        stock: value,
      };
      storedProducts[index] = { ...storedProducts[index], data: storedData };
      updateStoredData(item, storedProducts, type);
    }
  }

  function changeStoredQuantiy(newItem, numberOfItems) {
    const storedProducts = [...productStore.selectedProducts];
    const index = storedProducts.findIndex((item) => item.id === newItem.id);
    let nextProduct = {};
    if (index !== -1) {
      nextProduct = { ...storedProducts[index] };
      nextProduct.quantity += numberOfItems;
      storedProducts[index] = nextProduct;
      return storedProducts;
    }
    nextProduct = {
      selectedProduct: newItem,
      id: newItem.id,
      quantity: numberOfItems,
    };
    return [...storedProducts, nextProduct];
  }

  function AddItemToCart(item, type, quantity = 1) {
    const newProducts = changeStoredQuantiy(item, quantity, type);
    reduceProductStock(item, quantity, type);
    dispatch(storeSelectedProducts({ selectedProducts: newProducts }));
  }

  function totalSelectedProducts() {
    return productStore.selectedProducts.length;
  }

  return { AddItemToCart, totalSelectedProducts, removeFromCart };
}
