import { useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
  cleanUpCartProductsFullInfo
} from "@store/cart/cartSlice";

export default function useCart() {

    const dispatch = useAppDispatch();
    const { items, productsFullInfo, loading, error } = useAppSelector(
      (state) => state.cart
    );
  
    useEffect(() => {
      const promise = dispatch(actGetProductsByItems());
      return ()=> {
        promise.abort()
        dispatch(cleanUpCartProductsFullInfo());
      }
    }, [dispatch]);
  
    const products = productsFullInfo.map((el) => ({
      ...el,
      quantity: items[el.id],
    }));
  
    const changeQuantityHandler = useCallback(
      (id: number, quantity: number) => {
        dispatch(cartItemChangeQuantity({ id, quantity }));
      },
      [dispatch]
    );
  
    const removeItemHandler = useCallback(
      (id: number) => {
        dispatch(cartItemRemove(id));
      },
      [dispatch]
    );

  return { loading, error, products, changeQuantityHandler, removeItemHandler }
}
