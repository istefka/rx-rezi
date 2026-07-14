import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
	component: PrivacyRoute,
	head: () => ({
		meta: [{ title: "Privacy Policy — Hirete" }, { name: "description", content: "Hirete privacy policy." }],
	}),
});

// Placeholder page — replace this copy with Hirete's finalised privacy policy.
function PrivacyRoute() {
	return (
		<main id="main-content" className="container mx-auto min-h-screen max-w-3xl px-4 py-16 sm:px-6">
			<h1 className="font-semibold text-3xl tracking-tight">Privacy Policy</h1>
			<p className="mt-4 text-muted-foreground">Last updated: [add date]</p>

			<div className="wysiwyg mt-8">
				<p>
					This is a placeholder privacy policy for Hirete. Replace this text with your finalised policy describing what
					data you collect, how it is used and stored, the legal bases for processing under GDPR, and how users can
					exercise their rights.
				</p>
				<h2>Data we collect</h2>
				<p>[Describe the personal data Hirete collects.]</p>
				<h2>How we use your data</h2>
				<p>[Describe how the data is used.]</p>
				<h2>Your rights</h2>
				<p>[Describe access, rectification, erasure, and portability rights.]</p>
				<h2>Contact</h2>
				<p>
					Questions about this policy? Email <a href="mailto:hello@hirete.eu">hello@hirete.eu</a>.
				</p>
			</div>

			<Link to="/" className="mt-12 inline-block text-primary text-sm hover:underline">
				← Back to home
			</Link>
		</main>
	);
}
