import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  productsStatus: '',
  productsError: '',
};

export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async (values, { rejectWithValue }) => {
    try {
      let url = 'https://fakestoreapi.com/products'
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const getProductsLimit = createAsyncThunk(
  'products/fetchProducts',
  async (limit, { rejectWithValue }) => {
    try {
      let url = `https://fakestoreapi.com/products?limit=${limit}`;
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const getItem = createAsyncThunk(
  'products/fetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      let url = `https://fakestoreapi.com/products/${id}`; 
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const filterProductsCategory = createAsyncThunk(
  'products/fetchProducts',
  async (values, { rejectWithValue }) => {
    try {
      let url = 'https://fakestoreapi.com/products/categories'
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsStatus = 'pending';
        state.productsError = '';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = 'success';
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.productsStatus = 'rejected';
        state.productsError = action.error.message;
      })
      .addCase(getItem.pending, (state) => {
        state.productsStatus = 'pending';
        state.productsError = '';
      })
      .addCase(getItem.fulfilled, (state, action) => {
        state.productsStatus = 'success';
        state.products = action.payload;
      })
      .addCase(getItem.rejected, (state, action) => {
        state.productsStatus = 'rejected';
        state.productsError = action.error.message;
      });
  },
});

export const { setSelectedCategory } = productsSlice.actions;

export default productsSlice.reducer;
