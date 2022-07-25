import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../components/product.interface";

const initialState: any = {
  allProducts: [],
  filteredProducts: [],
  categories: [],
  search: "",
  sortType: "default",
};

export const counterSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setproducts: (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      const categories = state.categories;
      state.categories = [...categories, category];
      const filteredProducts = state.allProducts.filter((product: IProduct) => (product.category === category) && product.name.includes(state.search));
      const currentProducts = state.filteredProducts;
      state.filteredProducts = state.categories.length > 1 ? [...currentProducts, ...filteredProducts] : filteredProducts;
    },
    searchProduct: (state, action) => {
        const name = action.payload;
        state.search = name || '';
        if (!name) {
          if (state.categories.length === 0) 
              state.filteredProducts = state.allProducts;
          else {
            state.filteredProducts = state.allProducts.filter((product: IProduct) => state.categories.indexOf(product.category) > -1)
          }
        }
        if (name) {
            const filteredProducts = state.allProducts.filter((product: IProduct) => product.name.includes(name));
            state.filteredProducts = filteredProducts;
        }
        
      },
    removeCategory: (state, action) => {
      const category = action.payload;
      if (state.categories.length === 1) {
        state.filteredProducts = state.allProducts.filter((product: IProduct) => product.name.includes(state.search));
        state.categories = [];
      } else {
        state.filteredProducts = state.filteredProducts.filter((product: IProduct) => (product.category !== category) && product.name.includes(state.search));
        const newCategories = state.categories.filter((cat: string) => cat !== category);
        state.categories = newCategories;
      }

    },
    sortProducts: (state, action) => {
      const {sortOrder, value} = action.payload;
      console.log(value, sortOrder, action.payload)
      state.filteredProducts = state.filteredProducts.sort((a: any, b: any) => sortOrder === 'ascending' ? a[value] - b[value] : b[value] - a[value]);
    },
  },
});


// Action creators are generated for each case reducer function
export const { searchProduct, setproducts, sortProducts , filterByCategory, removeCategory } = counterSlice.actions;

export default counterSlice.reducer;