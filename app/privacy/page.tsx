"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Server,
  RefreshCcw,
  ClipboardCheck,
  MailCheck,
  Users2,
} from "lucide-react";

const highlightCards = [
  {
    icon: ShieldCheck,
    title: "PDPA & GDPR aware",
    description:
      "We follow Pakistan&apos;s data protection rules and align with global GDPR best practices.",
  },
  {
    icon: Server,
    title: "Regional hosting",
    description:
      "Client data is stored in reputable data centres within the region with redundancy and access controls.",
  },
  {
    icon: Lock,
    title: "Security first",
    description:
      "Encryption in transit and at rest, principle-of-least-privilege access, 24/7 monitoring.",
  },
];

const policySections = [
  {
    title: "Information we collect",
    description:
      "We only request data that helps us deliver property advisory, brokerage, and investment services.",
    items: [
      "Client details such as names, CNIC copies, contact numbers, and billing information shared when you request guidance or sign a mandate.",
      "Property documentation including title deeds, allotment letters, payment schedules, valuations, and media you authorise us to review or publish.",
      "Communication history from emails, calls, WhatsApp, or forms so we can document instructions and compliance confirmations.",
    ],
  },
  {
    title: "How we use information",
    description:
      "Every data point has a clear purpose—matching you with opportunities, protecting transactions, and meeting regulations.",
    items: [
      "To verify listings, prepare market insights, and present properties to qualified buyers or investors.",
      "To deliver advisory, valuations, legal coordination, and customer support you request.",
      "To fulfil contractual obligations, invoicing, anti-fraud checks, and statutory record keeping.",
    ],
  },
  {
    title: "Retention & storage",
    description:
      "We define retention schedules and regularly purge what is no longer required. When a record expires, it is deleted or anonymised.",
    items: [
      "Commercial & tax records: retained up to 7 years to comply with FBR and SECP obligations.",
      "Deal files & communications: stored for the life of the mandate plus 5 years for audit defence.",
      "Marketing preferences: refreshed every 24 months or sooner if you opt out.",
    ],
  },
  {
    title: "Sharing data with partners",
    description:
      "We only share data with vetted partners who help us deliver your mandate, and every partner signs confidentiality clauses.",
    items: [
      "Technology providers powering our CRM, analytics, and communications.",
      "Banks, valuers, lawyers, and developers involved in processing your transaction.",
      "Regulators or professional advisors when legally required and under strict NDAs.",
    ],
  },
];

const rightsList = [
  {
    title: "Access & portability",
    description:
      "Request a copy of the information we hold and receive it in a portable format within 30 days.",
  },
  {
    title: "Rectification",
    description:
      "Update inaccurate records so our systems reflect your latest details and preferences.",
  },
  {
    title: "Restriction & objection",
    description:
      "Pause specific processing activities or opt out of marketing while keeping core services.",
  },
  {
    title: "Erasure",
    description:
      "Request deletion when data is no longer needed, subject to statutory retention duties.",
  },
];

const contactPoints = [
  {
    title: "Data Protection Contact",
    detail: "privacy@ajestate.com",
    description:
      "Use this email for privacy requests, DPIAs, or to report a concern.",
    icon: MailCheck,
  },
  {
    title: "Trust & Safety Team",
    detail: "0300-5238308",
    description:
      "Available Monday to Friday for urgent compliance or security queries.",
    icon: Users2,
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08 },
  }),
};

const PrivacyPage = () => {
  return (
    <div className="bg-white text-foreground">
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="w-20 h-1 bg-primary" />
            <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-widest text-gray-500">
              <span className="border border-gray-200 px-4 py-1">
                Updated · November 2025
              </span>
              <span className=" border border-gray-200 px-4 py-1">
                A.J.Estate
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl lg:text-7xl font-heading">
              Privacy & data protection
            </h1>
            <p className="max-w-3xl text-lg text-gray-600 md:text-xl">
              Transparency, accountability, and trust guide everything we do.
              This privacy statement explains how we collect, use, store, and
              protect your information when you work with A.J.Estate&apos;s real
              estate advisors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-black px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
              >
                Talk to compliance
              </Link>
              <a
                href="mailto:privacy@ajestate.com"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-black uppercase tracking-wide"
              >
                Email privacy team
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {highlightCards.map((card, index) => (
              <motion.div
                key={card.title}
                className=" border border-white/10 bg-[#0d0d0d] p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
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
              Your data lifecycle
            </p>
            <h2 className="text-4xl font-bold text-black md:text-5xl font-heading">
              What happens to your information
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Below is a transparent breakdown of how we handle personal and
              property information from the moment you reach out through
              mandate completion.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {policySections.map((section, index) => (
              <motion.div
                key={section.title}
                className=" border border-neutral-500/30 bg-white/80 p-8 shadow-2xl backdrop-blur"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={index}
              >
                <div className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
                  <span className="h-1 w-8 bg-primary" />
                  {section.title}
                </div>
                <p className="text-lg text-gray-700">{section.description}</p>
                <ul className="mt-6 space-y-4 text-gray-600">
                  {section.items.map((item) => (
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
                Your controls
              </p>
              <h3 className="mt-4 text-4xl font-bold font-heading">
                Data subject rights & choices
              </h3>
              <p className="mt-4 max-w-2xl text-white/70">
                We respond to privacy requests within 30 days (or faster for
                critical incidents). Identity verification protects your account
                before we release or delete data.
              </p>
            </div>
            <div className=" border border-white/20 px-4 py-2 text-sm text-white/70">
                Need help? Email privacy@ajestate.com
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {rightsList.map((right, index) => (
              <motion.div
                key={right.title}
                className=" border border-white/15 bg-white/5 p-8 backdrop-blur"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                custom={index}
              >
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                  <h4 className="text-2xl font-semibold font-heading">
                    {right.title}
                  </h4>
                </div>
                <p className="mt-4 text-white/70">{right.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
          <div className="border border-neutral-500/30 bg-primary p-10 md:p-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl space-y-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Contact our privacy team
                </p>
                <h3 className="text-4xl font-bold text-black font-heading">
                  We are real people ready to help you stay compliant
                </h3>
                <p className="text-lg text-gray-600">
                  Whether you need a signed DPA, a copy of our security
                  controls, or have a data subject request, the quickest path is
                  to reach out below.
                </p>
              </div>
              <RefreshCcw className="h-16 w-16 text-primary" />
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {contactPoints.map((point) => (
                <div
                  key={point.title}
                  className="border border-neutral-500/30 bg-white p-6 shadow-2xl"
                >
                  <point.icon className="h-8 w-8 text-primary" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
                    {point.title}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-black font-heading">
                    {point.detail}
                  </p>
                  <p className="mt-3 text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
