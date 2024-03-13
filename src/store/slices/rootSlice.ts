import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, Product, Basket } from "../types";

const initialState: InitialState = {
  products: [],
  basket: [],
};

const rootSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Partial<Product[]>>) => {
      const newProducts = { ...state.products, ...action.payload } as Product[];
      if (!state.products) {
        return;
      }
      state.products = newProducts;
    },
    setProductsInBasket: (state, action: PayloadAction<Basket[]>) => {
      state.basket = action.payload;
    },
    resetStore: (state) => {
      const { products } = state;
      const resetState = {
        ...initialState,
      };
      return { ...resetState, products: products };
    },
  },
});

export const { setProducts, setProductsInBasket, resetStore } =
  rootSlice.actions;

export const rootReducer = rootSlice.reducer;
