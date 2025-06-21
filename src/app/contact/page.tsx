"use client";
import PageHeading from "@/components/PageHeading";

import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { MdCall } from "react-icons/md"; // Importe o ícone de telefone

import ContactForm from "@/components/ContactForm";
import Main from "@/components/Main";

import { WHATSAPP_NUMBER, EMAIL_CONTACT, LINKEDIN_LINK } from "@/constants";

const contactInfo = {
  phone: WHATSAPP_NUMBER,
  email: EMAIL_CONTACT,
  socialMedia: [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={40} />, // Adicionei um tamanho padrão para o ícone
      link: LINKEDIN_LINK,
      bgColor: "blue", // Adicionei bgColor para consistência com o restante
      textColor: "blue", // Adicionei textColor para consistência com o restante
    },
    // Adicione outras redes sociais com suas informações de cor
  ],
};

const ContactPage: React.FC = () => {
  const headingData = {
    title: "Contato",
    description: "Preencha o formulário ou utilize os canais abaixo.",
  };

  return (
    <Main>
      <PageHeading {...headingData} />

      <div className="container mx-auto rounded-lg p-6 gap-8 md:w-5/6 lg:w-4/6 xl:w-3/5">
        {/* Formulário */}
        <ContactForm />

        {/* Informações de Contato */}
        <div className="mt-8 md:mt-12 space-y-8 md:space-y-10 lg:space-y-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
              Conecte-se Conosco
            </h2>
            <p className="text-gray-600 mt-3 md:mt-4 lg:text-lg">
              Estamos à disposição para conversarmos! Escolha seu canal
              preferido.
            </p>
          </div>

          {/* Detalhes */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* WhatsApp */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-green-100 hover:bg-green-200 text-green-500 hover:text-green-600 rounded-md shadow-md p-6 md:p-8 lg:p-10 flex items-center justify-center transition-all duration-200 transform hover:scale-105"
            >
              <FaWhatsapp size={40} />
            </a>

            {/* E-mail */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="bg-red-100 hover:bg-red-200 text-red-500 hover:text-red-600 rounded-md shadow-md p-6 md:p-8 lg:p-10 flex items-center justify-center transition-all duration-200 transform hover:scale-105"
            >
              <FaEnvelope size={40} />
            </a>

            {contactInfo.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link} // Use o link específico de cada rede social
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-${social.bgColor}-100 hover:bg-${social.bgColor}-200 text-${social.textColor}-500 hover:text-${social.textColor}-600 rounded-md shadow-md p-6 md:p-8 lg:p-10 flex items-center justify-center transition-all duration-200 transform hover:scale-105`}
              >
                {social.icon}
              </a>
            ))}

            {/* LinkedIn Padrão (caso não haja no array) */}
            {contactInfo.socialMedia.findIndex(
              (s) => s.name?.toLowerCase() === "linkedin",
            ) === -1 && (
              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 hover:bg-blue-200 text-blue-500 hover:text-blue-600 rounded-md shadow-md p-6 md:p-8 lg:p-10 flex items-center justify-center transition-all duration-200 transform hover:scale-105"
              >
                <FaLinkedin size={40} />
              </a>
            )}

            {/* Telefone (Opcional) */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-purple-100 hover:bg-purple-200 text-purple-500 hover:text-purple-600 rounded-md shadow-md p-6 md:p-8 lg:p-10 flex items-center justify-center transition-all duration-200 transform hover:scale-105"
            >
              <MdCall size={40} />
            </a>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ContactPage;
