import { useState, useEffect, memo } from "react";
import { useAppDispatch } from "@store/hooks";
import actLikeToggle from "@store/wishlist/act/actLikeToggle";
import { addToCart } from "@store/cart/cartSlice";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";
import { TProduct } from "@types";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
const { product, productImg, maximumNotice, wishlistBtn } = styles;

export default memo(function Product({
  id,
  title,
  img,
  price,
  max,
  quantity,
  isLiked,
}: TProduct) {
  const dispatch = useAppDispatch();
  const [isDisable, setIsDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;
  
  useEffect(() => {
    if (!isDisable) return;

    const debounce = setTimeout(() => {
      setIsDisable(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isDisable]);

  function addToCartHandler() {
    dispatch(addToCart(id));
    setIsDisable(true);
  }

  const likeToggleHandler = () => {
    if(isLoading) return;
    setIsLoading(true);
    dispatch(actLikeToggle(id))
      .unwrap()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  };

  return (
    <div className={product}>
      <div className={wishlistBtn} onClick={likeToggleHandler}>
        {isLoading ? (
          <Spinner animation="border" size="sm" variant="primary" />
        ) : isLiked ? (
          <LikeFill />
        ) : (
          <Like />
        )}
      </div>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <p className={maximumNotice}>
        {quantityReachedToMax
          ? "You can't add more of this item"
          : `You can add ${currentRemainingQuantity} item(s)`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isDisable || quantityReachedToMax}
      >
        {isDisable ? (
          <>
            <Spinner animation="border" size="sm" />
            Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
});
