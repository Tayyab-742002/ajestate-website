import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/ui/service-detail-page";
import {
  services,
  getServiceBySlug,
  getRelatedServices,
  serializeService,
} from "@/lib/services-data";

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Prevent 404s for unknown slugs - return 404 instead
export const dynamicParams = false;

// Generate metadata for each service
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found - A.J.Estate",
    };
  }

  return {
    title: `${service.title} | A.J.Estate`,
    description: service.overview.description,
    keywords: [
      service.title,
      service.tagline,
      "A.J.Estate",
      "real estate Pakistan",
      "property services",
      "property investment advice",
    ],
    openGraph: {
      title: `${service.title} | A.J.Estate`,
      description: service.overview.description,
      images: [service.hero.image],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service.id);

  // Serialize services to remove icon components (functions) before passing to client
  const serializedService = serializeService(service);
  const serializedRelatedServices = relatedServices.map(serializeService);

  return (
    <ServiceDetailPage
      service={serializedService}
      relatedServices={serializedRelatedServices}
    />
  );
}
