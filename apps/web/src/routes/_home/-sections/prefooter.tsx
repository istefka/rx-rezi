import { Trans } from "@lingui/react/macro";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { m } from "motion/react";
import { Button } from "@reactive-resume/ui/components/button";
import { TextMaskEffect } from "@/components/animation/text-mask";

export function Prefooter() {
	return (
		<section id="prefooter" className="relative overflow-hidden py-16 md:py-24">
			{/* Background decoration */}
			<div aria-hidden="true" className="pointer-events-none absolute inset-0">
				<div className="absolute inset-s-1/4 top-0 size-96 rounded-full bg-primary/5 blur-3xl" />
				<div className="absolute inset-e-1/4 bottom-0 size-96 rounded-full bg-accent/10 blur-3xl" />
			</div>

			<div className="relative space-y-8">
				<TextMaskEffect aria-hidden="true" text="Hirete" className="hidden md:block" />

				<m.div
					className="mx-auto max-w-2xl space-y-6 px-6 text-center will-change-[transform,opacity] md:px-8 xl:px-0"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.45 }}
				>
					<h2 className="font-semibold text-2xl tracking-tight md:text-4xl">
						<Trans>Ready to get hired?</Trans>
					</h2>

					<p className="text-muted-foreground leading-relaxed">
						<Trans>
							Build a CV that clears the filters and speaks the language of European recruiters — then export it and
							start applying today.
						</Trans>
					</p>

					<Button
						size="lg"
						nativeButton={false}
						className="group px-4"
						render={
							<Link to="/dashboard">
								<span className="flex items-center gap-2">
									<Trans>Build your CV — free</Trans>
									<ArrowRightIcon
										aria-hidden="true"
										className="size-4 transition-transform group-hover:translate-x-0.5"
									/>
								</span>
							</Link>
						}
					/>
				</m.div>
			</div>
		</section>
	);
}
