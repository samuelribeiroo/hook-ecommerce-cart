import React, { useState } from "react"
import type { Currency, ProductCardProps } from "../../@types"
import { currencies, products } from "../../constants/data"
import ProductCart from "./ProductItem"
import { Header } from "../Header/Header"

export default function ProductList() {
  const [selectedCoin, setSelectedCoin] = useState<Currency>(currencies[0])

  return (
    <>
      <Header selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} />
      <section className="container mx-auto px-4 py-8 mt-10">
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
          {products.slice(0, 8).map((product: ProductCardProps) => {
            const { data, properties } = product
            return (
              <div key={data?.id} className="mx-auto flex mt-14 flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
                <ProductCart data={data} properties={properties} selectedCoin={selectedCoin} />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
