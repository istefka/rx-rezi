import type { Icon } from "@phosphor-icons/react";
import { Trans } from "@lingui/react/macro";
import { CheckCircleIcon, FilePdfIcon, GlobeIcon, KeyIcon, SparkleIcon, TranslateIcon } from "@phosphor-icons/react";
import { m } from "motion/react";

type Feature = {
	icon: Icon;
	title: React.ReactNode;
	description: React.ReactNode;
};

const features: Feature[] = [
	{
		icon: CheckCircleIcon,
		title: <Trans>Beat the ATS</Trans>,
		description: (
			<Trans>
				Clean, parseable layouts and a live readability score help your CV get past applicant-tracking systems and in
				front of a human.
			</Trans>
		),
	},
	{
		icon: GlobeIcon,
		title: <Trans>European by design</Trans>,
		description: (
			<Trans>
				A4 formatting, optional photo, and Europass-friendly structure — matched to what recruiters across the EU expect
				to see.
			</Trans>
		),
	},
	{
		icon: SparkleIcon,
		title: <Trans>Smart suggestions</Trans>,
		description: (
			<Trans>
				Turn rough notes into sharp, achievement-led bullet points, and tailor your CV to each role in a couple of
				clicks.
			</Trans>
		),
	},
	{
		icon: TranslateIcon,
		title: <Trans>30+ languages</Trans>,
		description: <Trans>Build and switch your CV between languages to apply confidently anywhere in Europe.</Trans>,
	},
	{
		icon: FilePdfIcon,
		title: <Trans>Export anywhere</Trans>,
		description: (
			<Trans>Download pixel-perfect PDF or editable DOCX, or share a live link recruiters can open instantly.</Trans>
		),
	},
	{
		icon: KeyIcon,
		title: <Trans>Your data, your control</Trans>,
		description: (
			<Trans>
				GDPR-compliant and EU-hosted. Export everything or delete your account and data permanently, anytime.
			</Trans>
		),
	},
];

export function Features() {
	return (
		<section id="features" className="p-4 md:p-8 xl:py-16">
			<m.div
				className="mx-auto max-w-2xl text-center will-change-[transform,opacity]"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.45 }}
			>
				<h2 className="font-semibold text-2xl tracking-tight md:text-4xl xl:text-5xl">
					<Trans>Everything you need to land the interview</Trans>
				</h2>
				<p className="mt-4 text-muted-foreground leading-relaxed">
					<Trans>A focused toolkit that gets your CV noticed for the right reasons.</Trans>
				</p>
			</m.div>

			<div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{features.map((feature, index) => (
					<m.div
						key={index}
						className="group rounded-xl border bg-card p-6 transition-colors will-change-[transform,opacity] hover:border-primary/40"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: Math.min(0.2, index * 0.05) }}
					>
						<div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
							<feature.icon aria-hidden="true" className="size-5" weight="duotone" />
						</div>
						<h3 className="mt-4 font-medium text-lg tracking-tight">{feature.title}</h3>
						<p className="mt-2 text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
					</m.div>
				))}
			</div>
		</section>
	);
}
