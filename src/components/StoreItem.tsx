import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { AiOutlineDelete, AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
  return (
    <div className="hover:scale-105 transition-all duration-200">
      <img className="w-full h-40 object-cover rounded-t-xl" src={imgUrl} alt={name} />
      <div className='p-4 flex flex-col gap-3 bg-gray-500 rounded-b-xl'>
        <div className="flex justify-between">
          <h3 className="font-bold">{ name }</h3>
          <p className="">{ formatCurrency(price) }</p>
        </div>
        {getItemQuantity(id) === 0 ? (
          <button className="h-9 bg-lime-600 w-full shadow-sm hover:shadow-lg rounded-lg transition-all duration-200" onClick={() => increaseCartQuantity(id)}>add</button>
        ) : (
          <div className='h-9 flex items-center  rounded-lg select-none'>
            <button className="grow p-2 flex justify-center bg-gradient-to-r from-gray-700 hover:from-red-700 border-y-[1px] border-l-[1px] rounded-l-lg transition-all duration-200" onClick={() => decreaseCartQuantity(id)}>
              {getItemQuantity(id) === 1 ? (
                <AiOutlineDelete/>
              ) : (
                <AiOutlineMinusCircle/>
              )}
            </button>
              <p className="w-16 text-xl font-semibold text-center">
                { getItemQuantity(id) }
              </p>
            <button className="grow p-2 flex justify-center bg-gradient-to-l from-gray-700 hover:from-green-700 border-y-[1px] border-r-[1px] rounded-r-lg" onClick={() => increaseCartQuantity(id)}>
              <AiOutlinePlusCircle/>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}