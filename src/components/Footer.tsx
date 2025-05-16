// src/components/Footer.tsx
import Link from "next/link";
import { CURRENT_YEAR } from "../constants";

const footerData = {
  company: "BH Solutions",
  year: CURRENT_YEAR,
  links: [
    { name: "Política de Privacidade", href: "/politica-de-privacidade" },
    { name: "Termos de Uso", href: "/termos-de-uso" },
  ],
};

const Footer: React.FC = () => (
  <footer className="py-6 bg-accent text-white text-center text-sm">
    <p className="mb-2">
      &copy; {footerData.year} {footerData.company} - Todos os direitos
      reservados
    </p>
    <div className="flex justify-center gap-6 text-white/80 bg-primary">
      {footerData.links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="hover:underline hover:text-white transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </div>
  </footer>
);

export default Footer;
