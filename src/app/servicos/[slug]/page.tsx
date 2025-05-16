import { notFound } from "next/navigation";
import { serviceDetails } from "@/data/services";
import Link from "next/link";
import Main from "@/components/Main";
import PageHeading from "@/components/PageHeading";

interface PageProps {
  params: { slug: string }; // Removido o Promise
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params; // Removido o await pois params não é mais uma Promise
  const service = serviceDetails.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <Main>
      <PageHeading
        title="Soluções"
        description="Soluções que geram valor real e aumentam seus resultados."
      />

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6">
            {service.title}
          </h1>
          <p className="text-lg text-gray-700 mb-4">{service.intro}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            O que oferecemos:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {service.offerings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Benefícios para sua empresa
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {service.benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <Link
              href="/contato"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
              aria-label="Solicitar uma demonstração"
            >
              Solicitar uma demonstração
            </Link>
          </div>
        </div>
      </section>
    </Main>
  );
}
