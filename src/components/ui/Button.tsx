import type { ButtonProps} from "../../@types"

export default function Button({
	variant = "default",
	size = "default",
	icon: Icon,
	text,
	className = "",
	...props
}: ButtonProps) {
	const styleBase = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

	const variantStyles = {
		default: "bg-primary text-primary-foreground hover:bg-primary/90",
		destructive:"",
		outline: "",
		secondary: "",
		ghost: "",
		link: "",
		// Added all styles in a refactor.
	};

	const sizeStyles = {
		default: "h-10 py-2 px-4",
		sm: "h-9 px-3 rounded-md",
		lg: "h-11 px-8 rounded-md",
		icon: "h-10 w-10",
	};

	const baseClasse = `${styleBase} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

	return (
		<>
			<button className={baseClasse} {...props} />
		</>
	)
}
