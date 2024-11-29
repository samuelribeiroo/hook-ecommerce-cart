import React from "react"
import ProductList from "../components/Product/ProductList"
import { CartProvider } from "../contexts/CartContext"

export default function Page() {
	return (
		<>
			<main className="min-h-screen bg-[#1A1A1E] font-inter scroll-smooth">
				<CartProvider>
					<ProductList />
				</CartProvider>
			</main>
		</>
	)
}