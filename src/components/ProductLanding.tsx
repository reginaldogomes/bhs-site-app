import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";

interface LandingProps {
  title: string;
  description: string;
  keywords?: string;
  heroCtaLabel: string;
  heroCtaHref: string;
  features: { title: string; desc: string }[];
  technologies: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaHref: string;
  ctaButton: string;
}

export default function ProductLanding({
  title,
  description,
  keywords = "consultoria em nuvem, inteligência artificial, agentes de IA, transformação digital, soluções cloud, IA generativa, automação empresarial, BH Solutions",
  heroCtaLabel,
  heroCtaHref,
  features,
  technologies,
  ctaTitle,
  ctaDescription,
  ctaHref,
  ctaButton,
}: LandingProps) {
  return (
    <>
      <Head>
        <title>{title} | BH Solutions</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${title} | BH Solutions`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | BH Solutions`} />
        <meta name="twitter:description" content={description} />
      </Head>

      <section className="w-full bg-white text-gray-900">
        {/* Hero */}
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">{description}</p>
          <Button asChild className="px-6 py-3 text-base">
            <a href={heroCtaHref}>{heroCtaLabel}</a>
          </Button>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            O que entregamos para sua empresa
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ title, desc }, i) => (
              <Card key={i} className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-gray-50 py-14">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Tecnologias e ferramentas que utilizamos
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center text-center text-sm text-gray-700">
              {technologies.map((tech, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="py-3">{tech}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="max-w-4xl mx-auto px-4 py-20 text-center" id="contato">
          <h2 className="text-3xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-gray-600 mb-6">{ctaDescription}</p>
          <Button asChild className="px-6 py-3 text-base">
            <a href={ctaHref}>{ctaButton}</a>
          </Button>
        </div>
      </section>
    </>
  );
}
