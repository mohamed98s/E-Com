import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCategories,
  categoriesRecordsCleanUp,
} from "@store/categories/categoriesSlice";

export default function useCategories() {

    const dispatch = useAppDispatch();
    const { loading, error, records } = useAppSelector(
      (state) => state.categories
    );
    useEffect(() => {
      const promise = dispatch(actGetCategories());
  
      return () => {
        promise.abort()
        dispatch(categoriesRecordsCleanUp());
      };
    }, [dispatch]);

  return { loading, error, records}
}
