"use client";
import PageHeading from "@/components/PageHeading";

import { FaLinkedin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const contactInfo = {
  phone: "+55 (38) 3740 4012",
  email: "contato@bhsolutions.com.br",
  socialMedia: [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/bh-solutions-br",
      color: "text-blue-500 hover:text-blue-700",
    },
  ],
};

const ContactPage: React.FC = () => {
  const headingData = {
    title: "Entre em Contato",
    description:
      "Preencha o formulário abaixo ou use as informações de contato para falar diretamente conosco. Estamos prontos para ajudar sua empresa a crescer com transformação digital.",
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <PageHeading {...headingData} />

      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulário */}

        <ContactForm />
        {/* Informações de Contato */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Informações de Contato
            </h2>
            <p className="text-gray-600 mt-2">
              Entre em contato pelos canais abaixo. Ficaremos felizes em atender
              você!
            </p>
          </div>

          {/* Detalhes */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700">WhatsApp</h3>
              <p className="text-gray-600">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  {contactInfo.phone}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">E-mail</h3>
              <p className="text-gray-600">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700">
                Redes Sociais
              </h3>
              <div className="flex space-x-4 mt-2">
                {contactInfo.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} transition flex items-center space-x-2`}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
