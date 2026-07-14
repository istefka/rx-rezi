import { t } from "@lingui/core/macro";
import { Trans } from "@lingui/react/macro";
import { m } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@reactive-resume/ui/components/accordion";
import { cn } from "@reactive-resume/utils/style";

type FAQItemData = {
	question: string;
	answer: React.ReactNode;
};

const getFaqItems = (): FAQItemData[] => [
	{
		question: t`What makes a CV "ATS-friendly"?`,
		answer: t`Applicant-tracking systems scan your CV before a person does. Hirete uses clean, single-column-friendly layouts, standard section headings, and selectable text so the systems can read your CV correctly — and shows you a live score as you edit.`,
	},
	{
		question: t`Is Hirete suitable for the European job market?`,
		answer: t`Yes. Hirete supports A4 formatting, an optional photo, and a Europass-friendly structure, so your CV matches what recruiters and employers across the EU expect.`,
	},
	{
		question: t`Can I export my CV to PDF and DOCX?`,
		answer: t`Absolutely. Export a pixel-perfect PDF or an editable Microsoft Word (DOCX) file with one click, or share a live link that recruiters can open in the browser.`,
	},
	{
		question: t`Is my data private and GDPR-compliant?`,
		answer: t`Your data is stored securely on EU infrastructure and is never sold or shared with third parties. You can export everything or permanently delete your account and data at any time.`,
	},
	{
		question: t`In how many languages can I build my CV?`,
		answer: t`Hirete supports 30+ interface languages, and you can build and switch your CV between languages to apply confidently anywhere in Europe.`,
	},
	{
		question: t`How much does Hirete cost?`,
		answer: t`You can create and export your first CV for free. Paid plans for advanced tailoring and multiple CVs are on the way — you'll always know exactly what's included before you upgrade.`,
	},
];

export function Faq() {
	const faqItems = getFaqItems();

	return (
		<section
			id="frequently-asked-questions"
			className="flex flex-col gap-x-16 gap-y-6 p-4 md:p-8 lg:flex-row lg:gap-x-18 xl:py-16"
		>
			<m.h2
				className={cn(
					"flex-1 font-semibold text-2xl tracking-tight will-change-[transform,opacity] md:text-4xl xl:text-5xl",
					"flex shrink-0 flex-wrap items-center gap-x-1.5 lg:flex-col lg:items-start",
				)}
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.45 }}
			>
				<Trans context="Home page FAQ section heading with each word visually separated into individual spans">
					<span>Frequently</span>
					<span>Asked</span>
					<span>Questions</span>
				</Trans>
			</m.h2>

			<m.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.45, delay: 0.08 }}
				className="max-w-2xl flex-2 will-change-[transform,opacity] lg:ml-auto 2xl:max-w-3xl"
			>
				<Accordion multiple>
					{faqItems.map((item, index) => (
						<FAQItemComponent key={item.question} item={item} index={index} />
					))}
				</Accordion>
			</m.div>
		</section>
	);
}

type FAQItemComponentProps = {
	item: FAQItemData;
	index: number;
};

function FAQItemComponent({ item, index }: FAQItemComponentProps) {
	return (
		<m.div
			className="will-change-[transform,opacity] last:border-b"
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.24, delay: Math.min(0.16, index * 0.03) }}
		>
			<AccordionItem value={item.question} className="group border-t">
				<AccordionTrigger className="py-5">{item.question}</AccordionTrigger>
				<AccordionContent className="pb-5 text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
			</AccordionItem>
		</m.div>
	);
}
