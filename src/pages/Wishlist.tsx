
import { GridList, Heading } from "@componants/common";
import { Product } from "@componants/eCommerce";
import { Loading } from "@componants/feedback";
import { TProduct } from "@types";
import useWishlist from "@hooks/useWishlist";

export default function Wishlist() {

  const { loading, error, records } = useWishlist()

  return (
    <>
      <Heading title={"Your Wishlist"} />
      <Loading loading={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="Your wishlist is empty"
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
}
