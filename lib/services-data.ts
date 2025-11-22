import {
  Briefcase,
  Building2,
  Coins,
  FileCheck2,
  Handshake,
  Home,
  Landmark,
  LineChart,
  MapPin,
  Shield,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  hero: {
    image: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  overview: {
    description: string;
    features: string[];
  };
  process: {
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  benefits: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  gallery: string[];
  related: string[];
}

export const services: Service[] = [
  {
    id: "buy-sell",
    slug: "buy-and-sell-properties",
    icon: Home,
    title: "Buy & Sell Properties",
    tagline: "Verified listings with transparent pricing",
    hero: {
      image:
        "https://images.unsplash.com/photo-1690731987727-ab5daed3620b?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "7K+", label: "Verified Listings" },
        { value: "14", label: "Cities Covered" },
        { value: "99%", label: "Deal Transparency" },
      ],
    },
    overview: {
      description:
        "Explore accurate residential, commercial, and land listings updated daily with market-backed pricing, legal vetting, and neighborhood intelligence so your real estate Pakistan journey stays confident and fast.",
      features: [
        "City and suburb-specific advisors",
        "Transparent comps and price histories",
        "Documentation and title screening",
        "Virtual tours plus guided site visits",
        "Offer strategy and negotiation support",
        "Closing coordination with banks and registries",
      ],
    },
    process: {
      title: "Acquisition & Exit Flow",
      steps: [
        {
          number: "01",
          title: "Needs Mapping",
          description:
            "Share budget, timelines, and property goals to frame a personalized brief.",
        },
        {
          number: "02",
          title: "Curated Shortlist",
          description:
            "Receive verified listings with disclosures, valuations, and media tours.",
        },
        {
          number: "03",
          title: "Negotiation",
          description:
            "Advisors structure offers, handle counter proposals, and lock transparent MOUs.",
        },
        {
          number: "04",
          title: "Close & Transfer",
          description:
            "We guide banking, payments, and registration so handovers remain seamless.",
        },
      ],
    },
    benefits: [
      {
        icon: Handshake,
        title: "Single Advisor",
        description: "Dedicated partner from first viewing to possession",
      },
      {
        icon: Shield,
        title: "Verified Files",
        description: "Multi-layer title and NOC verification",
      },
      {
        icon: MapPin,
        title: "Local Insights",
        description: "Lifestyle, rental, and infrastructure data per area",
      },
      {
        icon: LineChart,
        title: "Market Signals",
        description: "Live dashboards on demand and pricing trends",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1545179965-adc7e9ebc249?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fENpdHklMjBhbmQlMjBzdWJ1cmItc3BlY2lmaWMlMjBhZHZpc29yc3xlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1711915471301-ff1173311e1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFRyYW5zcGFyZW50JTIwY29tcHMlMjBhbmQlMjBwcmljZSUyMGhpc3Rvcmllc3xlbnwwfDB8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1661481589064-347d73e24e23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWwlMjBlc3RhdGUlMjBEb2N1bWVudGF0aW9uJTIwYW5kJTIwdGl0bGV8ZW58MHwwfDB8fHww",
      "https://plus.unsplash.com/premium_photo-1711508491855-22fd09a18bc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFZpcnR1YWwlMjB0b3VycyUyMHBsdXMlMjBndWlkZWQlMjBzaXRlJTIwdmlzaXRzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1681505526188-b05e68c77582?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T2ZmZXIlMjBzdHJhdGVneSUyMGFuZCUyMG5lZ290aWF0aW9uJTIwc3VwcG9ydHxlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1672348094581-c45541f98d60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENsb3NpbmclMjBjb29yZGluYXRpb24lMjB3aXRoJTIwYmFua3MlMjBhbmQlMjByZWdpc3RyaWVzfGVufDB8MHwwfHx8MA%3D%3D",
    ],
    related: ["rentals", "valuations", "legal"],
  },
  {
    id: "rentals",
    slug: "rentals-and-leasing",
    icon: Building2,
    title: "Property Rentals & Leasing",
    tagline: "Homes, offices, and retail tailored to you",
    hero: {
      image:
        "https://images.unsplash.com/photo-1706931175437-540947415dc2?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "1.2K+", label: "Active Rentals" },
        { value: "15", label: "Day Avg. Placement" },
        { value: "95%", label: "Occupancy" },
      ],
    },
    overview: {
      description:
        "Find apartments, villas, co-working floors, or high-street retail spaces that match your budget and footprint. We screen landlords and tenants, benchmark rental terms, and secure compliant leases.",
      features: [
        "Shortlist based on commute, amenities, and zoning",
        "Benchmark rental terms per micro-market",
        "Tenant and landlord KYC checks",
        "Lease drafting with renewal reminders",
        "Fit-out and move-in coordination",
        "Deposit protection and dispute support",
      ],
    },
    process: {
      title: "Leasing Journey",
      steps: [
        {
          number: "01",
          title: "Requirement Brief",
          description:
            "Capture occupancy date, space specs, budget, and compliance needs.",
        },
        {
          number: "02",
          title: "Tour & Compare",
          description:
            "Visit shortlisted properties with rent rolls, utilities, and TCO insights.",
        },
        {
          number: "03",
          title: "Lease Structuring",
          description:
            "We negotiate deposits, escalations, maintenance, and exit clauses.",
        },
        {
          number: "04",
          title: "Move-in Support",
          description:
            "Our team manages documentation, key handover, and tenancy onboarding.",
        },
      ],
    },
    benefits: [
      {
        icon: Briefcase,
        title: "Corporate Ready",
        description: "Dedicated desk for office and retail leasing",
      },
      {
        icon: Shield,
        title: "Risk Mitigated",
        description: "Compliance-focused agreements and KYC",
      },
      {
        icon: Handshake,
        title: "Tenant-Landlord Match",
        description: "Transparent expectations reduce churn",
      },
      {
        icon: MapPin,
        title: "Neighborhood Fit",
        description: "Insights on footfall, schools, and traffic",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1644978480124-6b10a9affb6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hvcnRsaXN0JTIwYmFzZWQlMjBvbiUyMGNvbW11dGUlMkMlMjBhbWVuaXRpZXMlMkMlMjBhbmQlMjB6b25pbmd8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1754039985021-5c50d180d7cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEJlbmNobWFyayUyMHJlbnRhbCUyMHRlcm1zJTIwcGVyJTIwbWljcm8tbWFya2V0fGVufDB8MHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678208881212-67caec2d4baa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VGVuYW50JTIwYW5kJTIwbGFuZGxvcmQlMjBLWUMlMjBjaGVja3N8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1642239667157-575fb4ce3851?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxMZWFzZSUyMGRyYWZ0aW5nJTIwd2l0aCUyMHJlbmV3YWwlMjByZW1pbmRlcnN8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1594761051343-96ff2105fdf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZpdC1vdXQlMjBhbmQlMjBtb3ZlLWluJTIwY29vcmRpbmF0aW9uJTIwcHJvcGVydHl8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1642239817356-9dffb1bcc156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fERlcG9zaXQlMjBwcm90ZWN0aW9uJTIwYW5kJTIwZGlzcHV0ZSUyMHN1cHBvcnR8ZW58MHwwfDB8fHww",
    ],
    related: ["buy-sell", "property-management", "legal"],
  },
  {
    id: "valuations",
    slug: "property-valuations",
    icon: Coins,
    title: "Property Valuations & Appraisals",
    tagline: "Data-backed property valuation Pakistan",
    hero: {
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "4K+", label: "Reports Issued" },
        { value: "72hr", label: "Avg. Turnaround" },
        { value: "100%", label: "Bank Accepted" },
      ],
    },
    overview: {
      description:
        "Receive precise valuations for mortgages, estate planning, taxation, or sale decisions. Our valuers benchmark comparable sales, rental yields, construction quality, and macro indicators to protect your equity.",
      features: [
        "Comparable sales and rental benchmarking",
        "GIS-backed micro market scoring",
        "Condition and compliance inspections",
        "Income and cost-based valuation models",
        "Bank, court, and tax-ready documentation",
        "Advisory on pricing strategy and timing",
      ],
    },
    process: {
      title: "Valuation Workflow",
      steps: [
        {
          number: "01",
          title: "Scope Definition",
          description:
            "Clarify purpose, property specs, and required compliance formats.",
        },
        {
          number: "02",
          title: "Data & Inspection",
          description:
            "Collect deeds, conduct site visits, and capture condition photos.",
        },
        {
          number: "03",
          title: "Analysis",
          description:
            "Apply market, income, and cost approaches with sensitivity tests.",
        },
        {
          number: "04",
          title: "Reporting",
          description:
            "Deliver certified reports plus pricing or retention recommendations.",
        },
      ],
    },
    benefits: [
      {
        icon: LineChart,
        title: "Market Precision",
        description: "Live datasets across Pakistan’s key markets",
      },
      {
        icon: Shield,
        title: "Regulatory Ready",
        description: "Formats accepted by banks and regulators",
      },
      {
        icon: MapPin,
        title: "Hyperlocal",
        description: "Block-level insight into absorption and yields",
      },
      {
        icon: FileCheck2,
        title: "Audit Trail",
        description: "Evidence-backed appendices for investors",
      },
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1715183752248-a682f0b22959?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWwlMjBlc3RhdGUlMjBDb21wYXJhYmxlJTIwc2FsZXMlMjBhbmQlMjByZW50YWwlMjBiZW5jaG1hcmtpbmd8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1610814651936-61f4b9e31679?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMEdJUy1iYWNrZWQlMjBtaWNybyUyMG1hcmtldCUyMHNjb3Jpbmd8ZW58MHwwfDB8fHww",
      "https://plus.unsplash.com/premium_photo-1663039879890-dade33a781e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWwlMjBlc3RhdGUlMjBDb25kaXRpb24lMjBhbmQlMjBjb21wbGlhbmNlJTIwaW5zcGVjdGlvbnN8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1730875492072-f385713efae9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZSUyMEluY29tZSUyMGFuZCUyMGNvc3QtYmFzZWQlMjB2YWx1YXRpb24lMjBtb2RlbHN8ZW58MHwwfDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661402104150-95938d0c48c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWwlMjBlc3RhdGUlMjBCYW5rJTJDJTIwY291cnQlMkMlMjBhbmQlMjB0YXgtcmVhZHklMjBkb2N1bWVudGF0aW9ufGVufDB8MHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661443273363-62cf1a4c2321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJlYWwlMjBlc3RhdGUlMjBBZHZpc29yeSUyMG9uJTIwcHJpY2luZyUyMHN0cmF0ZWd5JTIwYW5kJTIwdGltaW5nfGVufDB8MHwwfHx8MA%3D%3D",
    ],
    related: ["buy-sell", "investment", "legal"],
  },
  {
    id: "investment",
    slug: "real-estate-investment-consulting",
    icon: LineChart,
    title: "Investment Consulting",
    tagline: "Real estate investment advice across Pakistan",
    hero: {
      image:
        "https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "PKR 30B+", label: "Deals Guided" },
        { value: "15%", label: "Avg. Projected IRR" },
        { value: "400+", label: "Investors Advised" },
      ],
    },
    overview: {
      description:
        "Tap into curated high-return projects, land banking, and income assets vetted through absorption data, developer health, and macro research so you can deploy capital with clarity.",
      features: [
        "Customized portfolio roadmaps",
        "Deal rooms for off-market assets",
        "Scenario modelling and stress tests",
        "Developer and legal due diligence",
        "Exit timing and hold strategies",
        "Quarterly reporting with KPIs",
      ],
    },
    process: {
      title: "Investor Playbook",
      steps: [
        {
          number: "01",
          title: "Strategy Session",
          description:
            "Define holding period, risk appetite, liquidity, and income goals.",
        },
        {
          number: "02",
          title: "Deal Sourcing",
          description:
            "Analysts shortlist assets in Karachi, Lahore, Islamabad, Gwadar, and secondary hubs.",
        },
        {
          number: "03",
          title: "Structuring",
          description:
            "Negotiate allocations, payment plans, and partnerships.",
        },
        {
          number: "04",
          title: "Monitoring",
          description:
            "Provide dashboards on construction, leasing, and exit triggers.",
        },
      ],
    },
    benefits: [
      {
        icon: Coins,
        title: "Optimized Yields",
        description: "Access curated, high-potential opportunities",
      },
      {
        icon: Shield,
        title: "Risk Managed",
        description: "Legal, developer, and market diligence baked in",
      },
      {
        icon: Handshake,
        title: "Co-Invest Access",
        description: "Pool capital with vetted investor circles",
      },
      {
        icon: LineChart,
        title: "Transparent Reporting",
        description: "Live dashboards on capital deployment",
      },
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1716259490205-dfbb08f9919f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZSUyMEN1c3RvbWl6ZWQlMjBwb3J0Zm9saW8lMjByb2FkbWFwc3xlbnwwfDB8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1661872770044-5b5155c69ea5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWwlMjBlc3RhdGUlMjBEZWFsJTIwcm9vbXMlMjBmb3IlMjBvZmYtbWFya2V0JTIwYXNzZXRzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1723489322948-8bd32cd25f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZSUyMFNjZW5hcmlvJTIwbW9kZWxsaW5nJTIwYW5kJTIwc3RyZXNzJTIwdGVzdHN8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1753774050094-867f85e986fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWwlMjBlc3RhdGUlMjBEZXZlbG9wZXIlMjBhbmQlMjBsZWdhbCUyMGR1ZSUyMGRpbGlnZW5jZXxlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1582371639897-77276e4f2ca9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJlYWwlMjBlc3RhdGUlMjBFeGl0JTIwdGltaW5nJTIwYW5kJTIwaG9sZCUyMHN0cmF0ZWdpZXN8ZW58MHwwfDB8fHww",
      "https://plus.unsplash.com/premium_photo-1726776085196-80af67986815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZSUyMFF1YXJ0ZXJseSUyMHJlcG9ydGluZyUyMHdpdGglMjBLUElzfGVufDB8MHwwfHx8MA%3D%3D",
    ],
    related: ["valuations", "project-marketing", "market-research"],
  },
  {
    id: "legal",
    slug: "legal-and-documentation-support",
    icon: FileCheck2,
    title: "Legal & Documentation Support",
    tagline: "Smooth compliance for every transaction",
    hero: {
      image:
        "https://images.unsplash.com/photo-1627976852862-588ed3f654cb?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "1,500+", label: "Files Cleared" },
        { value: "0", label: "Litigation Escalations" },
        { value: "48hr", label: "Avg. Vetting SLA" },
      ],
    },
    overview: {
      description:
        "Navigate property laws, succession, and registration confidently. Our legal desk handles title checks, agreements, token structures, and authority submissions across Pakistan’s regulators.",
      features: [
        "Title search and mutation verification",
        "NOC, allotment, and dues clearance",
        "Agreement drafting, stamping, and notarization",
        "Token, bayana, and payment scheduling",
        "Power of attorney and estate planning support",
        "Representation at LDA, SBCA, CDA, DHA, and registries",
      ],
    },
    process: {
      title: "Compliance Pathway",
      steps: [
        {
          number: "01",
          title: "Document Intake",
          description:
            "Collect deeds, identity docs, and society letters for screening.",
        },
        {
          number: "02",
          title: "Verification",
          description:
            "Coordinate with authorities for title, dues, and legal status.",
        },
        {
          number: "03",
          title: "Draft & Approve",
          description:
            "Prepare sale deeds, leases, or NDAs aligned to deal structures.",
        },
        {
          number: "04",
          title: "Registration",
          description:
            "Manage biometrics, payments, and collection of registered instruments.",
        },
      ],
    },
    benefits: [
      {
        icon: Shield,
        title: "Dispute Proof",
        description: "Multi-step checks guard against fraud",
      },
      {
        icon: FileCheck2,
        title: "Document Control",
        description: "Digital vault with logs and approvals",
      },
      {
        icon: Handshake,
        title: "Authority Liaison",
        description: "Queueing and follow-ups done on your behalf",
      },
      {
        icon: MapPin,
        title: "Nationwide Panel",
        description: "Lawyers and registrars across provinces",
      },
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1661483047743-be39e3ee582a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHJlYWwlMjBlc3RhdGUlMjBUaXRsZSUyMHNlYXJjaCUyMGFuZCUyMG11dGF0aW9uJTIwdmVyaWZpY2F0aW9ufGVufDB8MHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661776260388-f5d1b14ce8a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZSUyME5PQyUyQyUyMGFsbG90bWVudCUyQyUyMGFuZCUyMGR1ZXMlMjBjbGVhcmFuY2V8ZW58MHwwfDB8fHww",
      "https://plus.unsplash.com/premium_photo-1723464017140-abfc4068cd37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHJlYWwlMjBlc3RhdGUlMjBBZ3JlZW1lbnQlMjBkcmFmdGluZyUyQyUyMHN0YW1waW5nJTJDJTIwYW5kJTIwbm90YXJpemF0aW9ufGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1730094915697-bd504b857145?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjBlc3RhdGUlMjBUb2tlbiUyMGFuZCUyMHBheW1lbnQlMjBzY2hlZHVsaW5nfGVufDB8MHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661765206082-c82f184c4e41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJlYWwlMjBlc3RhdGUlMjBQb3dlciUyMG9mJTIwYXR0b3JuZXklMjBhbmQlMjBlc3RhdGUlMjBwbGFubmluZyUyMHN1cHBvcnR8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1763482933895-11eb9a31e4dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlYWwlMjBlc3RhdGUlMjBwcm9qZWN0fGVufDB8MHwwfHx8MA%3D%3D",
    ],
    related: ["buy-sell", "rentals", "investment"],
  },
  {
    id: "project-marketing",
    slug: "project-marketing-and-development",
    icon: Landmark,
    title: "Project Marketing & Development",
    tagline: "Launch and sell-out real estate projects",
    hero: {
      image:
        "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "35+", label: "Projects Managed" },
        { value: "5", label: "Month Avg. Sellout" },
        { value: "PKR 20B", label: "Inventory Sold" },
      ],
    },
    overview: {
      description:
        "Developers partner with us to position, promote, and manage residential and commercial launches. We combine feasibility studies, omni-channel marketing, and channel partner governance to maximize absorption.",
      features: [
        "Market feasibility and pricing playbooks",
        "Branding, collateral, and experience centers",
        "End-to-end digital funnels with automation",
        "Broker onboarding and governance",
        "Sales floor staffing and training",
        "Inventory analytics with daily dashboards",
      ],
    },
    process: {
      title: "Launch Engine",
      steps: [
        {
          number: "01",
          title: "Insight & Positioning",
          description:
            "Audit target buyers, competitor mix, and pricing corridors.",
        },
        {
          number: "02",
          title: "Go-To-Market Build",
          description:
            "Craft story, media plans, CRM, and partner programs.",
        },
        {
          number: "03",
          title: "Activation",
          description:
            "Run events, digital campaigns, and channel pushes to convert leads.",
        },
        {
          number: "04",
          title: "Scale & Optimize",
          description:
            "Use daily dashboards to refine pricing, inventory, and messaging.",
        },
      ],
    },
    benefits: [
      {
        icon: Landmark,
        title: "Developer Ally",
        description: "Shared KPIs around sell-through and cash flows",
      },
      {
        icon: Briefcase,
        title: "Integrated Team",
        description: "Creative, digital, and sales ops under one roof",
      },
      {
        icon: LineChart,
        title: "Demand Intelligence",
        description: "Heatmaps on budgets, intent, and absorption",
      },
      {
        icon: Handshake,
        title: "Channel Control",
        description: "Governance for broker and affiliate ecosystems",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1710508946291-54a2c98472b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHJlYWwlMjBlc3RhdGUlMjBNYXJrZXQlMjBmZWFzaWJpbGl0eSUyMGFuZCUyMHByaWNpbmclMjBwbGF5Ym9va3N8ZW58MHwwfDB8fHww",
      "https://plus.unsplash.com/premium_photo-1683134345262-298f58457bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZSUyMEJyYW5kaW5nJTJDJTIwY29sbGF0ZXJhbCUyQyUyMGFuZCUyMGV4cGVyaWVuY2UlMjBjZW50ZXJzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1754244539206-50a2517780a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVhbCUyMGVzdGF0ZSUyMEVuZC10by1lbmQlMjBkaWdpdGFsJTIwZnVubmVscyUyMHdpdGglMjBhdXRvbWF0aW9ufGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1723642502315-1b94cf8cd0d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJlYWwlMjBlc3RhdGUlMjBCcm9rZXIlMjBvbmJvYXJkaW5nJTIwYW5kJTIwZ292ZXJuYW5jZXxlbnwwfDB8fHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1704652838666-450ab358467b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJlYWwlMjBlc3RhdGUlMjBTYWxlcyUyMGZsb29yJTIwc3RhZmZpbmclMjBhbmQlMjB0cmFpbmluZ3xlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1724709162875-fe100dd0e04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJlYWwlMjBlc3RhdGUlMjBJbnZlbnRvcnklMjBhbmFseXRpY3MlMjB3aXRoJTIwZGFpbHklMjBkYXNoYm9hcmRzfGVufDB8MHwwfHx8MA%3D%3D",
    ],
    related: ["investment", "market-research", "buy-sell"],
  },
  {
    id: "market-research",
    slug: "market-research-and-insights",
    icon: Briefcase,
    title: "Market Research & Insights",
    tagline: "Decision-ready research for Pakistan property",
    hero: {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop&q=80",
      stats: [
        { value: "130+", label: "Reports Published" },
        { value: "50+", label: "Micro Markets Studied" },
        { value: "8", label: "Macro Indicators Tracked" },
      ],
    },
    overview: {
      description:
        "Stay informed with pricing trends, absorption, rental yields, and economic signals shaping real estate services Pakistan. Developers and investors rely on our dashboards to greenlight launches and exits.",
      features: [
        "Quarterly city scorecards and dashboards",
        "Pricing, rental, and absorption analytics",
        "Feasibility studies with product mix advice",
        "Consumer sentiment and demand surveys",
        "Geo-spatial insights for land acquisition",
        "Custom research retainers with executive briefings",
      ],
    },
    process: {
      title: "Insight Delivery Model",
      steps: [
        {
          number: "01",
          title: "Brief Alignment",
          description:
            "Define business questions, geographies, and confidentiality layers.",
        },
        {
          number: "02",
          title: "Data Build",
          description:
            "Blend proprietary transactions, public data, and field interviews.",
        },
        {
          number: "03",
          title: "Insight Modeling",
          description:
            "Create scenarios, KPIs, and narrative visualizations for decisions.",
        },
        {
          number: "04",
          title: "Activation",
          description:
            "Deliver workshops, dashboards, and action plans for leadership teams.",
        },
      ],
    },
    benefits: [
      {
        icon: LineChart,
        title: "Forward Looking",
        description: "Forecasts built on live supply-demand indicators",
      },
      {
        icon: MapPin,
        title: "Hyperlocal",
        description: "Block-level heatmaps and pipeline tracking",
      },
      {
        icon: Briefcase,
        title: "Board Ready",
        description: "Executive summaries with clear recommendations",
      },
      {
        icon: Shield,
        title: "Trusted Inputs",
        description: "Triangulated data from vetted sources",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1761002068081-ab24b0478a41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlYWwlMjBlc3RhdGUlMjBRdWFydGVybHklMjBjaXR5JTIwc2NvcmVjYXJkcyUyMGFuZCUyMGRhc2hib2FyZHN8ZW58MHwwfDB8fHww",
      "https://plus.unsplash.com/premium_photo-1681823227186-346750f89d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZSUyMGFic29ycHRpb24lMjBhbmFseXRpY3N8ZW58MHwwfDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664301098953-a2d275d3a18a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlYWwlMjBlc3RhdGUlMjBGZWFzaWJpbGl0eSUyMHN0dWRpZXMlMjB3aXRoJTIwcHJvZHVjdCUyMG1peCUyMGFkdmljZXxlbnwwfDB8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1742418222453-6940c5a033b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZSUyMENvbnN1bWVyJTIwc2VudGltZW50JTIwYW5kJTIwZGVtYW5kJTIwc3VydmV5c3xlbnwwfDB8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1672441125695-8c99d9e77be6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZSUyMEdlby1zcGF0aWFsJTIwaW5zaWdodHMlMjBmb3IlMjBsYW5kJTIwYWNxdWlzaXRpb258ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1714974528718-b3b52f91c334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJlYWwlMjBlc3RhdGUlMjBDdXN0b20lMjByZXNlYXJjaCUyMHJldGFpbmVycyUyMHdpdGglMjBleGVjdXRpdmUlMjBicmllZmluZ3N8ZW58MHwwfDB8fHww",
    ],
    related: ["investment", "project-marketing", "valuations"],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getRelatedServices = (serviceId: string): Service[] => {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return [];

  return service.related
    .map((relatedId) => services.find((s) => s.id === relatedId))
    .filter((s): s is Service => s !== undefined);
};

// Serialized service type for passing to client components
export interface SerializedService {
  id: string;
  slug: string;
  iconName: string;
  title: string;
  tagline: string;
  hero: {
    image: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  overview: {
    description: string;
    features: string[];
  };
  process: {
    title: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  benefits: {
    iconName: string;
    title: string;
    description: string;
  }[];
  gallery: string[];
  related: string[];
}

// Icon name mapping
const iconNameMap: Record<string, LucideIcon> = {
  Briefcase,
  Building2,
  Coins,
  FileCheck2,
  Handshake,
  Home,
  Landmark,
  LineChart,
  MapPin,
  Shield,
};

// Helper to get icon name from service
function getIconName(icon: LucideIcon): string {
  for (const [name, IconComponent] of Object.entries(iconNameMap)) {
    if (IconComponent === icon) {
      return name;
    }
  }
  return "Home";
}

// Serialize service for client component
export function serializeService(service: Service): SerializedService {
  return {
    id: service.id,
    slug: service.slug,
    iconName: getIconName(service.icon),
    title: service.title,
    tagline: service.tagline,
    hero: service.hero,
    overview: service.overview,
    process: service.process,
    benefits: service.benefits.map((benefit) => ({
      iconName: getIconName(benefit.icon),
      title: benefit.title,
      description: benefit.description,
    })),
    gallery: service.gallery,
    related: service.related,
  };
}

// Get icon component from name
export function getIconFromName(name: string): LucideIcon {
  return iconNameMap[name] || Home;
}

