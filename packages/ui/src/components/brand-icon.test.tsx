import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrandIcon } from "./brand-icon";

describe("BrandIcon", () => {
	it("renders an inline svg brand mark", () => {
		render(<BrandIcon />);
		const mark = screen.getByRole("img", { name: "Hirete" });
		expect(mark.tagName.toLowerCase()).toBe("svg");
	});

	it("uses 'logo' as default variant (label 'Hirete')", () => {
		render(<BrandIcon />);
		expect(screen.getByRole("img", { name: "Hirete" })).toBeInTheDocument();
	});

	it("labels the 'icon' variant distinctly", () => {
		render(<BrandIcon variant="icon" />);
		expect(screen.getByRole("img", { name: "Hirete icon" })).toBeInTheDocument();
	});

	it("merges custom className onto the svg", () => {
		render(<BrandIcon className="my-custom" />);
		expect(screen.getByRole("img", { name: "Hirete" })).toHaveClass("my-custom");
	});

	it("defaults to the brand primary color via text-primary", () => {
		render(<BrandIcon />);
		expect(screen.getByRole("img", { name: "Hirete" })).toHaveClass("text-primary");
	});
});
