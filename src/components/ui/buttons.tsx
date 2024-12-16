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
		default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/80",
		destructive: "bg-red-50 text-destructive-foreground hover:bg-destructive/90 dark:bg-destructive dark:text-destructive-foreground dark:hover:bg-destructive/80",
		outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-background dark:hover:bg-accent dark:hover:text-accent-foreground",
		secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/70",
		ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground",
		link: "text-primary underline-offset-4 hover:underline dark:text-primary",
		cta: 'py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-4/12'
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
