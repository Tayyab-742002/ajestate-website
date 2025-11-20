import type { Metadata } from "next";
import { Inter, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar-menu";
import { Footer } from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/next";
// Primary font for body text - clean and professional
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Secondary font for headings - bold and modern
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Third font for headings - bold and modern
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "A.J.Estate | Trusted Real Estate Services Across Pakistan",
  description:
    "A.J.Estate helps buyers, sellers, and investors navigate Pakistan's property market with verified listings, valuations, legal support, and investment advisory.",
  keywords: [
    "A.J.Estate",
    "real estate Pakistan",
    "property buying Pakistan",
    "property valuation Pakistan",
    "real estate investment advice",
    "Karachi property",
    "Lahore property",
    "Islamabad real estate",
  ],
  authors: [{ name: "A.J.Estate" }],
  openGraph: {
    title: "A.J.Estate | Pakistan Real Estate Advisors",
    description:
      "Discover verified listings, transparent advisory, and end-to-end property solutions with A.J.Estate.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${montserrat.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
