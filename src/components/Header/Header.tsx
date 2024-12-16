import { Sun, Moon, ShoppingCart } from "lucide-react"
import type { HeaderProps } from "../../@types"
import Button from "../ui/buttons"
import CurrencyDropdown from "./CurrencyDropdown"
import SneakerShopLogo from "../../assets/logo.svg"
import { useContext, type ImgHTMLAttributes } from "react"
import { CartContext } from "../../contexts/CartContext"
import { isRenderOutsideContextError } from "../../errors/component-context-error"
import { Link } from "react-router-dom";


export function Header({ selectedCoin, setSelectedCoin }: HeaderProps) {
	const cartContext = useContext(CartContext)

	// If some one of them component that share a statbe be displayed outside context is should be throwed a customized error: isRenderOutsideContextError
	if (!cartContext) throw new isRenderOutsideContextError()

	const { state } = cartContext

	return (
		<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1B1B1F] backdrop-blur-sm">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<CurrencyDropdown
						selectedCurrency={selectedCoin}
						setSelectedCurrency={setSelectedCoin}
					/>
				</div>
				<img
					src={SneakerShopLogo}
					alt="Logo"
					{...({
						fetchpriority: "high",
					} as ImgHTMLAttributes<HTMLImageElement>)}
					width={60}
					aria-label="Logo"
				/>
				<div className="flex items-center space-x-4">
				  <Link to={'/cart'}>
					<Button variant="ghost" size="icon">
						<span className="flex inline-flex items-center gap-2">
							<ShoppingCart color="#d1d5db" className="h-5 w-5" />
							<p className="text-red-50">{state.products.length}</p>
						</span>
					</Button>
					</Link>
					<Button variant="ghost" size="icon">
						<Sun
							color="#d1d5db"
							className="h-5 w-5 rotate-0 scale-100  transition-all dark:-rotate-90 dark:scale-0"
						/>
						<Moon
							color="#d1d5db"
							className="absolute h-5 w-5 rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100"
						/>
						<span className="sr-only">Toggle theme</span>
					</Button>
				</div>
			</div>
		</header>
	)
}





