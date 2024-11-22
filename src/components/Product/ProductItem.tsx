import type { ProductProps } from "../../@types";
import { Star, ShoppingCart } from "lucide-react";
import Button from "../ui/Button";

export default function ProductCart({
	name,
	price,
	rating,
	imageSrc,
}: ProductProps) {
	const ratingRange =
		typeof rating === "number" && !Number.isNaN(rating)
			? Math.min(Math.max(rating, 0), 5)
			: null;

	return (
		<>
			<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-colors duration-200">
				<div className="relative h-81 w-full">
					<img
						src={imageSrc}
						alt={name}
						className="object-cover transition-transform duration-200 hover:scale-105"
					/>
				</div>
				<div className="px-6 py-4">
					<h2 className="font-bold text-xl mb-2 text-primary-50 dark:text-white">
						{name}
					</h2>
					{ratingRange !== null && (
						<div className="flex items-center mb-2">
							{[...Array(5)].map((_, index) => (
								<Star
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className={`h-5 w-5 ${
										index < ratingRange
											? "text-yellow-400"
											: "text-gray-300 dark:text-gray-600"
									}`}
									fill="currentColor"
								/>
							))}
							<span className="ml-2 text-gray-600 dark:text-gray-400">
								{ratingRange.toFixed(1)}
							</span>
						</div>
					)}
					<div className="flex items-center space-x-14">
						<p className="text-gray-700 dark:text-gray-300 text-base font-semibold">
							R$ {price.toFixed(2)}
						</p>
						<Button variant="default" size="default" className="bg-primary">
            <ShoppingCart className="mr-4"/>
            <span>Adicionar ao Carrinho</span>
            </Button>	
					</div>
				</div>
			</div>

		</>
	);
}