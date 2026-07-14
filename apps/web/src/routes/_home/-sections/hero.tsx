import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { ArrowRightIcon, CheckCircleIcon, PlayCircleIcon, SparkleIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { m } from "motion/react";
import { Badge } from "@reactive-resume/ui/components/badge";
import { Button } from "@reactive-resume/ui/components/button";
import { CometCard } from "@/components/animation/comet-card";
import { Spotlight } from "@/components/animation/spotlight";

export function Hero() {
	return (
		<section
			id="hero"
			className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden border-b py-24"
		>
			<Spotlight />

			<div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
				{/* Left: copy */}
				<div className="flex flex-col items-center text-center lg:items-start lg:text-start">
					<m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
						<Badge variant="secondary" className="h-auto gap-1.5 px-3 py-0.5">
							<SparkleIcon aria-hidden="true" className="size-3.5" weight="fill" />
							<Trans>Built for the European job market</Trans>
						</Badge>
					</m.div>

					<m.h1
						className="mt-6 font-semibold text-4xl tracking-tight md:text-5xl lg:text-6xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.1 }}
					>
						<Trans>
							Get hired,
							<br />
							<span className="text-primary">not filtered.</span>
						</Trans>
					</m.h1>

					<m.p
						className="mt-5 max-w-md text-base text-muted-foreground leading-relaxed md:text-lg"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.2 }}
					>
						<Trans>
							Hirete turns your experience into a recruiter-ready, ATS-optimised CV — tailored to how employers across
							Europe actually hire.
						</Trans>
					</m.p>

					<m.div
						className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.45, delay: 0.3 }}
					>
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

						<Button
							size="lg"
							variant="ghost"
							className="gap-2 px-4"
							nativeButton={false}
							render={
								<a href="#how-it-works">
									<PlayCircleIcon aria-hidden="true" className="size-4" />
									<Trans>See how it works</Trans>
								</a>
							}
						/>
					</m.div>

					<m.p
						className="mt-4 text-muted-foreground text-xs"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.45, delay: 0.4 }}
					>
						<Trans>No credit card required · Export to PDF & DOCX · GDPR-compliant</Trans>
					</m.p>
				</div>

				{/* Right: media-free CSS "CV" mock */}
				<m.div
					className="w-full will-change-[transform,opacity]"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				>
					<CometCard glareOpacity={0} className="mx-auto max-w-sm">
						<CvMock />
					</CometCard>
				</m.div>
			</div>

			{/* Scroll indicator - decorative */}
			<m.div
				aria-hidden="true"
				role="presentation"
				className="absolute inset-s-1/2 bottom-8 -translate-x-1/2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.7 }}
			>
				<m.div
					className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/30 p-1.5 will-change-transform"
					animate={{ y: [0, 5, 0] }}
					transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				>
					<m.div className="h-1.5 w-1 rounded-full bg-muted-foreground/50" />
				</m.div>
			</m.div>
		</section>
	);
}

/** A purely CSS/HTML representation of a résumé — no image assets. */
function CvMock() {
	return (
		<div
			aria-label={t`Illustration of a CV built with Hirete`}
			role="img"
			className="relative rounded-xl border bg-card p-6 shadow-xl"
		>
			{/* ATS pass chip */}
			<div className="absolute -top-3 -right-3 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 font-medium text-accent-foreground text-xs shadow-md">
				<CheckCircleIcon aria-hidden="true" weight="fill" className="size-3.5" />
				<Trans>ATS: 98%</Trans>
			</div>

			{/* Header: avatar monogram + name lines */}
			<div className="flex items-center gap-3">
				<div className="flex size-12 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
					AM
				</div>
				<div className="flex-1 space-y-2">
					<div className="h-3 w-2/3 rounded bg-foreground/80" />
					<div className="h-2 w-1/2 rounded bg-muted-foreground/40" />
				</div>
			</div>

			<div className="my-4 h-px bg-border" />

			{/* Body: two mock sections */}
			<div className="space-y-4">
				{[0, 1].map((block) => (
					<div key={block} className="space-y-2">
						<div className="flex items-center gap-2">
							<div className="size-2 rounded-full bg-accent" />
							<div className="h-2.5 w-24 rounded bg-primary/70" />
						</div>
						<div className="h-2 w-full rounded bg-muted-foreground/25" />
						<div className="h-2 w-11/12 rounded bg-muted-foreground/25" />
						<div className="h-2 w-4/5 rounded bg-muted-foreground/25" />
					</div>
				))}

				{/* Skill chips */}
				<div className="flex flex-wrap gap-1.5 pt-1">
					{[14, 10, 16, 12].map((w) => (
						<div key={w} className="h-4 rounded-full bg-secondary" style={{ width: `${w * 4}px` }} />
					))}
				</div>
			</div>
		</div>
	);
}
