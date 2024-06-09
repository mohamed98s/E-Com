import ProductSkeleton from "../Skeletons/ProductSkeleton/ProductSkeleton"
import CategorySkeleton from "../Skeletons/CategorySkeleton/CategorySkeleton"
import CartSkeleton from "../Skeletons/CartSkeleton/CartSkeleton"
import LottieHandler from "../LottieHandler/LottieHandler"
import { TLoading } from "@types"


const skeletonTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton
}

type LoadingProps = {
    loading: TLoading
    error: null | string
    children: React.ReactNode
    type?: keyof typeof skeletonTypes
}


export default function Loading({ loading, error, children, type = "category" }: LoadingProps) {

  const Component = skeletonTypes[type] 

    if(loading === 'pending'){
        return <Component/>;
    }
    
    if(loading === 'failed'){
        return <p><LottieHandler type="error" message={error as string}/></p>
    }
  return (
    <>{children}</>
  )
}
