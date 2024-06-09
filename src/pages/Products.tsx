
import useProducts from "@hooks/useProducts";
import { GridList, Heading } from "@componants/common";
import { Product } from "@componants/eCommerce";
import { Loading } from "@componants/feedback";
import { TProduct } from "@types";

export default function Products() {

  const { loading, error, productsFullInfo, productPrefix } = useProducts()

  return (
    <>
      <Heading title={`${productPrefix?.toUpperCase()} Products`} />
      <Loading loading={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no products available"
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
}
