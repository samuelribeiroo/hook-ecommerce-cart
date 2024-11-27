import { Star, ShoppingCart } from "lucide-react"
import Button from "../ui/buttons"
import type { ProductCardProps } from "../../@types"
import { useState } from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"
import { X } from "lucide-react"

export default function ProductCard({name, ratingRange, price, imageSrc, selectedCoin}: ProductCardProps) {
  const [isToastOpen, setIsToastOpen] = useState(false)
	const [message, setMessage] = useState("")
	const [type, setType] = useState<"success" | "error" | "info">("success")

  
  const showToast = (newMessage: string, newType: "success" | "error" | "info" = "info") => {
		setMessage(newMessage)
		setType(newType)
		setIsToastOpen(true)
	}
  
  const handleAddToCart = () => showToast('Produto adicionado no carrinho com sucesso!', 'success')
  
  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <div className="w-sm-full max-w-[360px] rounded-lg overflow-hidden bg-white dark:[#1A1A1E] transition-colors duration-200 mx-auto sm:max-w-[480px] md:max-w-[600px]">
        <div className="relative h-[305px] w-full sm:h-[300px] md:h-[305px]">
          <img
            src={imageSrc}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
          />
        </div>
        <div className="p-4 bg-white dark:bg-zinc-950">
          <h2 className="font-bold text-base sm:text-lg md:text-xl mb-2 text-primary-50 dark:text-white truncate">
            {name}
          </h2>
          {ratingRange !== null && (
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  className={`h-4 w-4 ${
                    index < ratingRange
                      ? "text-yellow-400"
                      : "text-gray-300 dark:text-gray-600"
                  }`}
                  fill="currentColor"
                />
              ))}
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {ratingRange.toFixed(1)}
              </span>
            </div>
          )}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-2">
            <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
              {selectedCoin?.symbol ?? "R$"} {price.toFixed(2)}
            </p>
            <Button
              variant="default"
              size="sm"
              className="bg-primary w-full sm:w-auto flex justify-center items-center"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span className="text-xs">Adicionar</span>
            </Button>
          </div>
        </div>
      </div>

      <ToastPrimitive.Root
        open={isToastOpen}
        onOpenChange={setIsToastOpen}
        className={'bg-green-500 text-white p-4 rounded-md shadow-lg fixed bottom-4 right-4 z-50 flex items-center justify-between'}
      >
        <ToastPrimitive.Title>{message}</ToastPrimitive.Title>
        <ToastPrimitive.Close className="ml-4 focus:outline-none">
          <X size={18} />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  )

}
  
  
 

