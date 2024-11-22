import type { LucideIcon } from 'lucide-react'
import type React from 'react'

export interface ProductProps {
  name: string
  rating: number | null
  price: number
  imageSrc: string
}

export interface CustomButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
}

export interface ButtonProps extends CustomButton {
  icon?: LucideIcon
  text?: string
}