import { useState } from "react";
import { Minus, Plus, ShoppingCart, X } from 'lucide-react'
import { Link } from "react-router-dom"
import Button from "../ui/buttons"
import { useCart } from "../../contexts/CartContext"
import AnimatedModalCheckout from "../ui/animated-modal";

export default function Cart() {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  
  const { state } = useCart()
  const { products } = state

  const isEmpty = products.length === 0


  return (
    <main className="container mx-auto py-8 px-4 max-w-4xl">
      {isEmpty ? (
        <section className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-4">OOPS...</h1>
          <p className="font-semibold text-lg sm:text-xl md:text-2xl mb-8 max-w-md">
            Carrinho vazio, voltar e adicionar produtos.
          </p>
          <Link to="/">
            <Button variant="default" size="lg" className="text-white rounded-md">
              <span className="flex items-center justify-center gap-3">
                <ShoppingCart className="w-6 h-6" />
                Voltar para a página inicial
              </span>
            </Button>
          </Link>
        </section>
      ) : (
        <>
          <div className="space-y-6">
            {products.map((product) => (
              <CartItems key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="secondary" className="w-full max-w-md bg-blue-700 text-white" onClick={openModal}>
              FINALIZAR COMPRA!
            </Button>
          </div>
          <AnimatedModalCheckout isOpen={isModalOpen} onClose={closeModal}/>
        </>
      )}
    </main>
  )
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function CartItems({ product }: { product: any }) {
  const subtotal = (product.price * product.quantity).toFixed(2)
  const { dispatch, state } = useCart()
 
  const handleRemoveProduct = () => dispatch({ type: 'REMOVE_FROM_CART', payload: product.id })
  const handleIncreaseQuantity = () => dispatch({ type: 'INCREASE_QUANTITY', payload: product.id })
  const handleDecreaseQuantity = () => {
    product.quantity > 1 
    ? dispatch({ type: 'DECREASE_QUANTITY', payload: product.id }) 
    : dispatch({ type: 'REMOVE_FROM_CART', payload: product.id })
    
  }

  const renderCurrentQuantity = state.products.find(item => item.id === product.id)?.quantity || product.quantity

  const calculateTotal = () => {
    return state.products.reduce((total: any, product: any) => 
        total + product.price * product.quantity, 0
    )
}

console.log(calculateTotal().toFixed(2))


  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <button type="button" className="text-gray-400 hover:text-gray-600" onClick={handleRemoveProduct}>
          <X className="w-5 h-5" />
        </button>
      </div>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <div className="flex items-center gap-4 mb-4">
        <button type="button" className="p-2 rounded border hover:bg-gray-100" onClick={handleDecreaseQuantity}>
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center text-lg">{renderCurrentQuantity}</span>
        <button type="button" className="p-2 rounded border hover:bg-gray-100" onClick={handleIncreaseQuantity}>
          <Plus className="w-4 h-4" />
        </button>
      </div>
      <p className="font-semibold text-lg">Subtotal: ${subtotal}</p>
    </div>
  )
}
