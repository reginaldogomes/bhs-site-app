// src/components/Footer.tsx
import { CURRENT_YEAR } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-6 bg-bhs-100 text-white text-center">
      <p>&copy; {CURRENT_YEAR} BH Solutions - Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;
