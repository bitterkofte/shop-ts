import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  return (
    <div className="">
      <img className="w-full h-40 object-cover rounded-t-xl" src={imgUrl} alt={name} />
      <div className='p-3 bg-gray-500 rounded-b-xl'>
        <div className="flex justify-between">
          <h3 className="">{ name }</h3>
          <p className="">{ formatCurrency(price) }</p>
        </div>
        <div className='flex'>
          <button className="p-2 bg-sky-700">-</button>
          <p>{ getItemQuantity(id) }</p>
          <button className="p-2 bg-sky-700">+</button>
        </div>
      </div>
    </div>
  )
}