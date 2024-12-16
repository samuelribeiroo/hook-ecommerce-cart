import Cart from "./components/Cart/cart";
import { CartProvider } from "./contexts/CartContext";
import "./index.css";
import NotFoundPage from "./page/not-found";
import Page from "./page/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Page />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}
