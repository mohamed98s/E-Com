import useCart from "@hooks/useCart";
import { Heading } from "@componants/common";
import { CartItemList, CartSubtotalPrice } from "@componants/eCommerce";
import { Loading, LottieHandler } from "@componants/feedback";

export default function Cart() {

  const { loading, error, products, changeQuantityHandler, removeItemHandler } = useCart()

  return (
    <>
      <Heading title={'Cart'} />
        <Loading loading={loading} error={error} type="cart">
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            ></CartItemList>
            <CartSubtotalPrice products={products} />
          </>
        ) : (
          <LottieHandler type="empty" message="Your cart is empty"/>
          
        )}
      </Loading>
    </>
  );
}
