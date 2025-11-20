"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileSignature,
  ShieldCheck,
  PackageCheck,
  CreditCard,
  Handshake,
  Building2,
} from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Client trust first",
    description:
      "Every mandate is backed by confidentiality, compliance, and transparent communication.",
  },
  {
    icon: PackageCheck,
    title: "Verified intelligence",
    description:
      "Listings, valuations, and reports are vetted with on-ground checks before they reach you.",
  },
  {
    icon: FileSignature,
    title: "Clear documentation",
    description:
      "Agreements and disclosures follow Pakistani property regulations and are easy to audit.",
  },
];

const termSections = [
  {
    heading: "1. Scope & definitions",
    intro:
      "These Terms cover all advisory, brokerage, marketing, valuation, and documentation services delivered by A.J.Estate (“we”, “us”, “our”). By engaging us, you (“Client”) accept the latest version published here.",
    bullets: [
      "“Services” include property discovery, listing, marketing, valuation, investment consulting, legal coordination, and project launches agreed in writing.",
      "“Property Data” refers to ownership documents, financial statements, surveys, or media provided to us for verification or marketing.",
      "“Business Day” means Monday to Friday, excluding public holidays in Pakistan.",
    ],
  },
  {
    heading: "2. Client responsibilities",
    intro:
      "Property mandates succeed when data and expectations are aligned. Help us protect your interests by sharing accurate information on time.",
    bullets: [
      "Provide clear proof of ownership, CNIC copies, and authority letters before marketing or negotiations begin.",
      "Disclose encumbrances, litigation, or developer dues that may impact timelines or pricing.",
      "Respond to due-diligence queries within mutually agreed timeframes so buyers, sellers, and partners stay confident.",
    ],
  },
  {
    heading: "3. Fees & settlement",
    intro:
      "Advisory retainers and success fees are quoted in PKR unless otherwise agreed. Payment schedules are shared in each engagement letter.",
    bullets: [
      "Brokerage commissions become payable on token receipt, bayana, or registration as stated in the mandate.",
      "Consulting, valuation, or marketing retainers are invoiced upfront or monthly depending on scope.",
      "Late payments accrue KIBOR + 4% per annum. Persistent non-payment may pause active campaigns or advisory.",
    ],
  },
  {
    heading: "4. Liability & reliance",
    intro:
      "Our role is to facilitate informed decisions. We do not assume responsibility for undisclosed facts, market volatility, or third-party performance.",
    bullets: [
      "Liability for any claim is capped at the professional fees paid in the prior 3 months.",
      "We are not liable for indirect loss, lost opportunity, or financing outcomes beyond our control.",
      "Clients must independently verify bank transfers, taxation, and regulatory filings before completion.",
    ],
  },
  {
    heading: "5. Term, renewal & suspension",
    intro:
      "Mandates renew automatically unless terminated with 30 days’ written notice. Outstanding dues must be cleared before marketing is halted.",
    bullets: [
      "Either party may end the engagement for convenience after settling committed media spends and professional fees.",
      "We may suspend services if documents are fraudulent, payments lapse, or compliance risks emerge.",
      "Upon termination we return client documents and conclude ongoing negotiations in accordance with written instructions.",
    ],
  },
];

const processSteps = [
  {
    title: "Kickoff",
    detail: "We capture your objectives, timelines, and compliance requirements.",
  },
  {
    title: "Due diligence",
    detail:
      "Our team vets documents, gathers market data, and prepares the mandate pack.",
  },
  {
    title: "Marketing & negotiations",
    detail:
      "Listings go live, buyers or tenants are screened, and offers are negotiated transparently.",
  },
  {
    title: "Completion",
    detail:
      "Tokens, bayana, finance, and registration are coordinated with lawyers and regulators.",
  },
];

const contactBlocks = [
  {
    title: "Contract questions",
    value: "legal@ajestate.com",
    description: "Use this email for addendums, confidentiality requests, or mandate tweaks.",
    icon: Handshake,
  },
  {
    title: "Accounts & billing",
    value: "0300-5238308",
    description: "Finance desk available Mon–Fri 9am-6pm PKT for payment queries.",
    icon: CreditCard,
  },
];

const heroAnimation = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08 },
  }),
};

const TermsPage = () => {
  return (
    <div className="bg-white text-foreground">
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroAnimation}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="w-20 h-1 bg-primary" />
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-500">
              <span className=" border border-gray-200 px-4 py-1">
                Effective · November 2025
              </span>
              <span className=" border border-gray-200 px-4 py-1">
                Version 3.2
              </span>
            </div>
            <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-6xl lg:text-7xl font-heading leading-tight">
              Terms of Service
            </h1>
            <p className="max-w-3xl text-lg text-gray-600 md:text-xl">
              A practical, transparent framework for how A.J.Estate delivers
              advisory, brokerage, and investment services across Pakistan. Review
              the clauses below and contact us if you require bespoke terms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-3  border border-black px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
              >
                View privacy policy
              </Link>
              <a
                href="mailto:legal@ajestate.com"
                className="inline-flex items-center gap-2  bg-primary px-6 py-3 text-sm font-semibold text-black uppercase tracking-wide"
              >
                Email legal desk
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {commitments.map((card, index) => (
              <motion.div
                key={card.title}
                className=" border border-white/10 bg-[#0d0d0d] p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
                custom={index}
              >
                <card.icon className="mb-6 h-10 w-10 text-primary" />
                <h3 className="text-2xl font-semibold text-white font-heading">
                  {card.title}
                </h3>
                <p className="mt-4 text-white/70">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="mb-16 space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              Read before onboarding
            </p>
            <h2 className="text-4xl font-bold text-black md:text-5xl font-heading">
              The clauses that keep operations smooth
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              We have removed jargon and added practical examples so teams can
              collaborate faster. Save or export this document for procurement
              reviews.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {termSections.map((section, index) => (
              <motion.div
                key={section.heading}
                className=" border border-neutral-500/30 bg-white/85 p-8 shadow-2xl backdrop-blur"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                custom={index}
              >
                <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                  <span className="h-1 w-8 bg-primary" />
                  {section.heading}
                </div>
                <p className="text-lg text-gray-700">{section.intro}</p>
                <ul className="mt-6 space-y-4 text-gray-600">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <div className="mt-1 h-2.5 w-2.5 bg-primary"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-20 md:py-28 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
                Engagement lifecycle
              </p>
              <h3 className="mt-4 text-4xl font-bold font-heading">
                How the partnership runs
              </h3>
              <p className="mt-4 max-w-2xl text-white/70">
                Four milestones keep both teams aligned and accountable. Each
                step is documented inside your client workspace.
              </p>
            </div>
            <div className="border border-white/20 px-4 py-2 text-sm text-white/70">
                Need a bespoke addendum? legal@ajestate.com
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className=" border border-white/15 bg-white/5 p-6 backdrop-blur"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={reveal}
                custom={index}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  0{index + 1}
                </div>
                <h4 className="mt-4 text-2xl font-semibold font-heading">
                  {step.title}
                </h4>
                <p className="mt-3 text-white/70">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="border border-neutral-500/30 bg-primary p-10 md:p-16 shadow-2xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Still reviewing?
                </p>
                <h3 className="text-4xl font-bold text-black font-heading">
                  Legal & operations teams ready to collaborate
                </h3>
                <p className="text-lg text-gray-600">
                  Need procurement wording, certificates of insurance, or a
                  clause review? We answer most requests within two business
                  days.
                </p>
              </div>
              <Building2 className="h-16 w-16 text-primary" />
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {contactBlocks.map((block) => (
                <div
                  key={block.title}
                  className=" border border-neutral-500/30 bg-white p-6 shadow-2xl"
                >
                  <block.icon className="h-8 w-8 text-primary" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
                    {block.title}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-black font-heading">
                    {block.value}
                  </p>
                  <p className="mt-3 text-gray-600">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
