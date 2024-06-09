
import useCategories from "@hooks/useCategories";
import { Category } from "@componants/eCommerce";
import { GridList, Heading } from "@componants/common";
import { Loading } from "@componants/feedback";

export default function Categories() {

  const { loading, error, records} = useCategories()

  return (
    <>
      <Heading title={'Categories'} />
      <Loading loading={loading} error={error} type="category">
        <GridList
        emptyMessage="There are no categories"
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </>
  );
}
