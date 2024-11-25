import React, { useState } from "react";
import type { Currency, ProductCardInterface } from "../../@types";
import { currencies, products } from "../../constants/data";
import ProductCart from "./ProductItem";
import { Header } from "../Header/Header";

export default function ProductList() {
	const [selectedCoin, setSelectedCoin] = useState<Currency>(currencies[0]);

	return (
		<>
			<Header selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} />
			<section className="container mx-auto px-4 py-8 mt-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
					{products.map(({ id, name, imageSrc, price, ratingRange, selectedCoin }: ProductCardInterface) => (
						<ProductCart
							key={id}
							data={{id, name, imageSrc, price, ratingRange, selectedCoin}}
						/>
					))}
				</div>
			</section>
		</>
	);
}