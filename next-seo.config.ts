// next-seo.config.ts
import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  title: "BHS Site App",
  description:
    "Aplicação fullstack para gerenciar e otimizar o site da BH Solutions",
  canonical: "https://bhs-site.vercel.app",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bhs-site.vercel.app",
    site_name: "BHS Site App",
    title: "BHS Site App",
    description:
      "Aplicação fullstack para gerenciar e otimizar o site da BH Solutions",
    images: [
      {
        url: "https://bhs-site.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BHS Site App",
      },
    ],
  },
  twitter: {
    handle: "@bhssiteapp",
    site: "@bhssiteapp",
    cardType: "summary_large_image",
  },
};

export default SEO;
