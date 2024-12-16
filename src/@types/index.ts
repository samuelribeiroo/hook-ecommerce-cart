import type { LucideIcon } from "lucide-react";
import type React from "react";
import type { ReactNode } from "react";

export interface ProductCardProps {
  data?: {
    id?: number;
    name: string;
    price: number;
    quantity: number;
  },

  properties?: {
    ratingRange?: number | null;
    imageSrc?: string;
    onAddToCart?: () => void;
  },

  selectedCoin?: { code: string; name: string; symbol: string };
}

export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CustomButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  variant?:
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export interface ButtonProps extends CustomButton {
  icon?: LucideIcon;
  text?: string;
}

export type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export interface HeaderProps {
  selectedCoin: Currency;
  setSelectedCoin: React.Dispatch<React.SetStateAction<Currency>>;
  cartCount?: number;
}

export interface CurrencyDropdownProps {
  selectedCurrency: Currency;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<Currency>>;
}

/* CartContext Interfaces and Types  */

export interface CartState {
  products: Product[];
}

export type CartAction = | { type: "ADD_CART"; payload: Product } | { type: 'REMOVE_FROM_CART'; payload: Product } | { type: 'INCREASE_QUANTITY'; payload: Product } | { type: "DECREASE_QUANTITY"; payload: Product }

export interface CartContextProps {
  state: {
    products: Array<{
      id: string;
      name: string;
      price: number;
      quantity: number;
      imageUrl?: string
    }>
  };
  dispatch: React.Dispatch<CartAction>;
}

export interface CartProviderProps {
  children: ReactNode;
}