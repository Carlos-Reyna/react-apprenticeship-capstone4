import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    productData: [],
    filteredProducts: [],
    isLoading: true,
    featuredProductData: [],
    selectedProducts: [], // [ {id:  selectedProduuct: {}, qty: 1 }]
  },
  reducers: {
    storeProducts: (state, { payload }) => {
      const { productData, isLoading } = payload;
      return { ...state, productData, isLoading };
    },
    storeFeaturedProducts: (state, { payload }) => {
      const { featuredProductData, isLoading } = payload;
      return { ...state, featuredProductData, isLoading };
    },
    storeFilterProducts: (state, { payload }) => {
      const { filteredProducts } = payload;
      return { ...state, filteredProducts };
    },
    storeSelectedProducts: (state, { payload }) => {
      const { selectedProducts } = payload;
      return { ...state, selectedProducts };
    },
  },
});

export const {
  storeProducts,
  storeFeaturedProducts,
  storeFilterProducts,
  storeSelectedProducts,
} = productSlice.actions;

export default productSlice.reducer;
