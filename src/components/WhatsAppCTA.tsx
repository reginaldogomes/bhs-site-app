// components/WhatsAppCTA.tsx
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppCTA: React.FC = () => {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <div className="mt-8">
      <p className="text-lg font-semibold">
        Ou entre em contato diretamente pelo WhatsApp:
      </p>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center mt-6 bg-teal-500 text-white py-4 px-8 rounded-full shadow-lg hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <FaWhatsapp className="mr-4 text-2xl" />
        Fale conosco no WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppCTA;
