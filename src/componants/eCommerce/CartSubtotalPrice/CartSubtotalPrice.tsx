import { TProduct } from '@types'
import styles from './styles.module.css'

type CartSubtotalPriceProps = {products: TProduct[]}

export default function CartSubtotalPrice({products}: CartSubtotalPriceProps) {

  const subtotal = products.reduce((accumlator, el) => {
    const price = el.price
    const quantity = el.quantity
    if(quantity && typeof quantity === 'number')
      {
        return accumlator + price * quantity
      }
      else{
        return accumlator
      }
  }, 0)


  return (
    <div className={styles.container}>
        <span>Subtotal</span>
        <span>{subtotal.toFixed(2)} EPG</span>
    </div>
  )
}
