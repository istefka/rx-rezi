import { cn } from "@reactive-resume/utils/style";

type Props = React.ComponentProps<"svg"> & {
	variant?: "logo" | "icon";
};

/**
 * Hirete brand mark (placeholder).
 *
 * Single source of truth for the in-app logo. Renders a text-based "H" monogram
 * as an inline SVG using `currentColor`, defaulting to the brand navy via
 * `text-primary` (navy in light mode, a lightened navy in dark mode for contrast).
 * The full "Hirete" wordmark is rendered as adjacent text where a logo appears.
 * Final brand assets will replace this component and the matching files under
 * `apps/web/public/{logo,icon}`.
 */
export function BrandIcon({ variant = "logo", className, ...props }: Props) {
	const label = variant === "icon" ? "Hirete icon" : "Hirete";

	return (
		<svg
			viewBox="0 0 48 48"
			role="img"
			aria-label={label}
			className={cn("size-12 text-primary", className)}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>{label}</title>
			<text
				x="50%"
				y="52%"
				dominantBaseline="central"
				textAnchor="middle"
				fontFamily="'IBM Plex Sans Variable', ui-sans-serif, system-ui, sans-serif"
				fontWeight="700"
				fontSize="36"
				letterSpacing="-1"
				fill="currentColor"
			>
				H
			</text>
		</svg>
	);
}
