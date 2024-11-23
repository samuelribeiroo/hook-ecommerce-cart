import { Star, ShoppingCart } from 'lucide-react'
import Button from '../ui/Button' // Assumindo que o componente Button está em um arquivo separado
import type { ProductCardProps } from '../../@types'


export default function ProductCard({ name, ratingRange, price, imageSrc }: ProductCardProps) {
  return (
    <div className="w-[360px] rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="relative h-[360px] w-full">
        <img
          src={imageSrc}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-200 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2 text-primary-50 dark:text-white truncate">
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
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
            R$ {price.toFixed(2)}
          </p>
          <Button variant="default" size="sm" className="bg-primary">
            <ShoppingCart className="h-4 w-4 mr-2" />
            <span className="text-xs">Adicionar</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

