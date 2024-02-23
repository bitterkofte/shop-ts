import { ReactNode, createContext, useContext, useState } from "react"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContextProps = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  // removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartMenu, setIsCartMenu] = useState<boolean>(false);

  const getItemQuantity = (id: number) => {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  const increaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find(item => item.id === id) == null) return [...currentItems, {id, quantity: 1}]
      else return currentItems.map(item => item.id === id ? {...item, quantity: item.quantity+1} : item)
    })
  }
  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find(item => item.id === id)?.quantity === 1) return currentItems.filter(item => item.id !== id)
      else return currentItems.map(item => item.id === id ? {...item, quantity: item.quantity-1} : item)
    })
  }

  // function removeFromCart(id: number) {
  //   setCartItems(currItems => {
  //     return currItems.filter(item => item.id !== id)
  //   })
  // }

  const cartQuantity = cartItems.reduce((qua, itm) => qua + itm.quantity, 0)

  const openCart = () => setIsCartMenu(true)
  const closeCart = () => setIsCartMenu(false)

  return (
  <ShoppingCartContext.Provider
    value={{
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      // removeFromCart
      cartItems,
      cartQuantity,
      openCart,
      closeCart
    }}
  >
    { children }
  </ShoppingCartContext.Provider>
  )
}