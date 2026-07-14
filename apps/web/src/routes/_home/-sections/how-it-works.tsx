import { Trans } from "@lingui/react/macro";
import { m } from "motion/react";

type Step = {
	number: string;
	title: React.ReactNode;
	description: React.ReactNode;
};

const steps: Step[] = [
	{
		number: "01",
		title: <Trans>Start in minutes</Trans>,
		description: (
			<Trans>Import an existing CV or begin from a clean, recruiter-approved template. No formatting headaches.</Trans>
		),
	},
	{
		number: "02",
		title: <Trans>Tailor to the role</Trans>,
		description: (
			<Trans>
				Sharpen your wording, reorder sections, and adapt the CV for each application while the readability score guides
				you.
			</Trans>
		),
	},
	{
		number: "03",
		title: <Trans>Export and apply</Trans>,
		description: <Trans>Download a polished PDF or DOCX, or send a live link — and apply with confidence.</Trans>,
	},
];

export function HowItWorks() {
	return (
		<section id="how-it-works" className="p-4 md:p-8 xl:py-16">
			<m.div
				className="mx-auto max-w-2xl text-center will-change-[transform,opacity]"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.45 }}
			>
				<h2 className="font-semibold text-2xl tracking-tight md:text-4xl xl:text-5xl">
					<Trans>From blank page to sent in three steps</Trans>
				</h2>
			</m.div>

			<ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
				{steps.map((step, index) => (
					<m.li
						key={step.number}
						className="relative will-change-[transform,opacity]"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: Math.min(0.2, index * 0.08) }}
					>
						<span className="font-semibold text-5xl text-primary/15 tabular-nums">{step.number}</span>
						<h3 className="mt-3 font-medium text-lg tracking-tight">{step.title}</h3>
						<p className="mt-2 text-muted-foreground text-sm leading-relaxed">{step.description}</p>
					</m.li>
				))}
			</ol>
		</section>
	);
}
