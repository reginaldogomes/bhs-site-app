// components/FloatingWhatsAppButton.tsx
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../constants";

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 bg-teal-500 text-white p-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-teal-600 animate-bounce"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default FloatingWhatsAppButton;
