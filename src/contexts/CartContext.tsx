import { createContext, useReducer, useContext } from "react"
import cartReducer, { initialState } from "./cartReducer"
import type { CartContextProps, CartProviderProps } from "../@types"
import { isRenderOutsideContextError } from "../errors/component-context-error"

export const CartContext = createContext<CartContextProps | undefined>(undefined)

export function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
	
  // If some one of them component that share a statbe be displayed outside context is should be throwed a customized error: isRenderOutsideContextError

  if (!context) throw new isRenderOutsideContextError()

  return context
}