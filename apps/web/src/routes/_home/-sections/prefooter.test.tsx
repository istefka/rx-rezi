// @vitest-environment happy-dom

import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

type LinkProps = React.PropsWithChildren<{
	to: string;
}>;

vi.mock("@tanstack/react-router", () => ({
	Link: ({ children, to, ...rest }: LinkProps) => (
		<a href={typeof to === "string" ? to : "#"} {...rest}>
			{children}
		</a>
	),
}));

i18n.loadAndActivate({ locale: "en", messages: {} });

const { Prefooter } = await import("./prefooter");

const renderPrefooter = () =>
	render(
		<I18nProvider i18n={i18n}>
			<Prefooter />
		</I18nProvider>,
	);

describe("Prefooter", () => {
	it("renders the call-to-action heading", () => {
		renderPrefooter();
		expect(screen.getByText("Ready to get hired?")).toBeInTheDocument();
	});

	it("renders the call-to-action paragraph", () => {
		renderPrefooter();
		expect(screen.getByText(/clears the filters/)).toBeInTheDocument();
	});

	it("renders a dashboard call-to-action link", () => {
		const { container } = renderPrefooter();
		const cta = Array.from(container.querySelectorAll("a")).find((a) => a.getAttribute("href") === "/dashboard");
		expect(cta).toBeDefined();
	});

	it("renders the decorative TextMaskEffect (svg)", () => {
		const { container } = renderPrefooter();
		expect(container.querySelector("svg")).not.toBeNull();
	});
});
