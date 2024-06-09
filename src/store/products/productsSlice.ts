import { createSlice } from "@reduxjs/toolkit";
import actGetProductByCatPrefix from "./act/actGetProductByCatPrefix";
import { TProduct, TLoading, isString } from "@types";

interface IProductsState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProductsRecords: (state)=>{
      state.records = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductByCatPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpProductsRecords } = productsSlice.actions
export { actGetProductByCatPrefix };
export default productsSlice.reducer;
