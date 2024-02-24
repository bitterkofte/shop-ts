import { useShoppingCart } from "../context/ShoppingCartContext";
import allItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency";
import { AiOutlineDelete, AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";


export const CartMenu = () => {
  const { closeCart, cartItems, isCartMenu, decreaseCartQuantity, increaseCartQuantity } = useShoppingCart();
  const itemRetriever = (id: number) => allItems.find(i => i.id === id)
  const totalCost = cartItems.reduce((acc, curr) => (curr.quantity*(itemRetriever(curr.id)?.price ?? 0)) + acc, 0)
  return (
    <>
      <div className={`fixed w-full h-full top-0 left-0 bg-overlay transition-all duration-300 ${!isCartMenu ? "opacity-0 invisible" : "opacity-100"}`} onClick={closeCart}/>
      <div className={`z-10 h-full p-10 fixed top-0 flex flex-col justify-center items-center gap-4 bg-sky-800 transition-all duration-300 ${isCartMenu ? "right-0 -translate-x-10a" : "-right-96"}`}>
        {cartItems.map(ci => (
          <div key={ci.id} className='w-64 p-3 flex items-center gap-3 text-base bg-slate-700 rounded-lg'>
            <img className='w-20 h-20 object-cover rounded-lg' src={itemRetriever(ci.id)?.imgUrl} alt={itemRetriever(ci.id)?.name} />
            <div className='flex-grow'>
              <p>{ itemRetriever(ci.id)?.name }</p>
              <p>{ formatCurrency((itemRetriever(ci.id)?.price ?? 0) * ci.quantity) }</p>
              <div className='w-full h-9 flex items-center rounded-lg select-none'>
                <button className="grow p-1 flex justify-center bg-gradient-to-r from-red-700 rounded-l-lg" onClick={() => decreaseCartQuantity(ci.id)}>
                  {ci.quantity === 1 ? (
                    <AiOutlineDelete/>
                  ) : (
                    <AiOutlineMinusCircle/>
                  )}
                </button>
                  <p className="w-5 text-xl font-semibold text-center">
                    { ci.quantity }
                  </p>
                <button className="grow p-1 flex justify-center bg-gradient-to-l from-green-700 rounded-r-lg" onClick={() => increaseCartQuantity(ci.id)}>
                  <AiOutlinePlusCircle/>
                </button>
              </div>
            </div>
          </div>
        ))}
        <p>Total: { formatCurrency(totalCost) }</p>
      </div>
    </>
  )
}