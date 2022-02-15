import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    productData: [],
    filteredProducts: [],
    isLoading: true,
    featuredProductData: [],
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
  },
});

export const { storeProducts, storeFeaturedProducts, storeFilterProducts } =
  productSlice.actions;

export default productSlice.reducer;
