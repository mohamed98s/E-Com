import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store";
import axios from "axios";
import { axiosErrorHandler } from "@utils";
import { TProduct } from "@types";

type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk(
  "cart/actGetProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState, signal } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }

    try {
      const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
      console.log(concatenatedItemsId);

      const response = await axios.get<TResponse>(
        `/products?${concatenatedItemsId}`, 
        {signal}
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);

export default actGetProductsByItems;
