import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductByCatPrefix,
  cleanUpProductsRecords,
} from "@store/products/productsSlice";

export default function useProducts() {

    const params = useParams();
    const productPrefix = params.prefix
    const dispatch = useAppDispatch();
    const { loading, error, records } = useAppSelector((state) => state.products);
    const cartItems = useAppSelector((state) => state.cart.items);
    const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);
  
    const productsFullInfo = records.map((el) => ({
      ...el,
      quantity: cartItems[el.id],
      isLiked: wishlistItemsId.includes(el.id),
    }));
  
    useEffect(() => {

      const promise = dispatch(actGetProductByCatPrefix(params.prefix as string));
      return () => {
        dispatch(cleanUpProductsRecords());
        promise.abort()
      };
    }, [dispatch, params]);

  return { loading, error, productsFullInfo, productPrefix }
}
