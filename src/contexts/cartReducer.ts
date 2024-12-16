import type { CartContextProps, CartState, Product } from "../@types"

export const initialState: CartState = {
  products: [],
}

type CartAction =  | { type: "ADD_CART"; payload: Product } | { type: 'REMOVE_FROM_CART'; payload: Product }

// biome-ignore lint/style/useDefaultParameterLast: <explanation>
export default function cartReducer(state: CartContextProps['state'] = initialState, action: CartAction): CartState {
  switch (action.type) {
    // biome-ignore lint/suspicious/noFallthroughSwitchClause: <explanation>
    case "ADD_CART":
      // biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
      const isAlreadyAddedToCart = state.products.find(product => product.id === action.payload.id)

      if (isAlreadyAddedToCart) {
        return {
          ...state,
          products: state.products.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product)
        }
      }

      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      }

      case 'REMOVE_FROM_CART': 
       return {
        ...state,
        products: state.products.filter(product => product.id !== String(action.payload))
       }
      
      
      default:
        return state
  }
}