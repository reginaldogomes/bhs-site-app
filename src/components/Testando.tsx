import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  FaClipboardList,
  FaProjectDiagram,
  FaCloud,
  FaRedo,
} from "react-icons/fa";
import { BsServer } from "react-icons/bs";

const servicesData = {
  title: "Consultoria em TI com foco em resultados reais",
  description:
    "Apoiamos empresas a estruturar sua área de tecnologia da informação, identificar oportunidades de evolução digital e implementar soluções seguras, eficientes e escaláveis. Atuamos como parceiros estratégicos na transformação digital dos negócios.",
  items: [
    { icon: <FaClipboardList />, label: "Diagnóstico da área de TI" },
    {
      icon: <FaProjectDiagram />,
      label: "Planejamento e estratégia tecnológica",
    },
    { icon: <BsServer />, label: "Modernização de sistemas e infraestrutura" },
    { icon: <FaCloud />, label: "Consultoria em nuvem e segurança" },
    { icon: <FaRedo />, label: "Acompanhamento contínuo e evolução digital" },
  ],
};

const HighlightSection = () => {
  return (
    <section className="w-full flex justify-center py-12">
      <Card className="w-full max-w-5xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800">
            {servicesData.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-600 text-lg text-center px-6">
          {servicesData.description}
        </CardContent>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {servicesData.items.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.label}
              </h3>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default HighlightSection;
