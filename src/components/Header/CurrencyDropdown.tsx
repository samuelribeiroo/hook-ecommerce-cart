import { currencies } from "../../constants/data"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "../../components/ui/dropdown-menu"
import type { CurrencyDropdownProps } from "../../@types"

// biome-ignore lint/suspicious/noRedeclare: <explanation>
export default function CurrencyDropdown({ selectedCurrency, setSelectedCurrency }: CurrencyDropdownProps) {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const handleSelect = currency => {
		setSelectedCurrency(currency)
	}

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger className="flex items-center px-4 py-2 bg-[#F56565] text-white rounded-md">
					<span className="mr-2">{selectedCurrency.symbol}</span>
					{selectedCurrency.name}
				</DropdownMenuTrigger>

				<DropdownMenuContent
					className="bg-white rounded-md shadow-lg p-2 space-y-2"
					align="center"
				>
					{currencies.map((currency) => (
						<DropdownMenuItem
							key={currency.code}
							className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-md flex items-center"
							onClick={() => handleSelect(currency)}
						>
							<span className="mr-2">{currency.symbol}</span>
							{currency.name}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}

