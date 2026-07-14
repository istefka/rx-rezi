import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
	component: TermsRoute,
	head: () => ({
		meta: [{ title: "Terms of Service — Hirete" }, { name: "description", content: "Hirete terms of service." }],
	}),
});

// Placeholder page — replace this copy with Hirete's finalised terms of service.
function TermsRoute() {
	return (
		<main id="main-content" className="container mx-auto min-h-screen max-w-3xl px-4 py-16 sm:px-6">
			<h1 className="font-semibold text-3xl tracking-tight">Terms of Service</h1>
			<p className="mt-4 text-muted-foreground">Last updated: [add date]</p>

			<div className="wysiwyg mt-8">
				<p>
					This is a placeholder terms of service for Hirete. Replace this text with your finalised terms covering
					acceptable use, accounts, subscriptions and billing, intellectual property, liability, and governing law.
				</p>
				<h2>Using Hirete</h2>
				<p>[Describe acceptable use and account responsibilities.]</p>
				<h2>Subscriptions and billing</h2>
				<p>[Describe paid plans, if any.]</p>
				<h2>Liability</h2>
				<p>[Describe limitations of liability.]</p>
				<h2>Contact</h2>
				<p>
					Questions about these terms? Email <a href="mailto:hello@hirete.eu">hello@hirete.eu</a>.
				</p>
			</div>

			<Link to="/" className="mt-12 inline-block text-primary text-sm hover:underline">
				← Back to home
			</Link>
		</main>
	);
}
