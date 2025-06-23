// src/components/TrustedBy.tsx

import { SiGoogle, SiMicrosoftazure, SiCloudflare } from "react-icons/si";

export const TrustedBy = () => {
  const techStack = [
    {
      name: "Google",
      icon: <SiGoogle className="text-[#4285F4]" />,
    },
    {
      name: "Microsoft",
      icon: <SiMicrosoftazure className="text-[#0078D4]" />,
    },
    {
      name: "Cloudflare",
      icon: <SiCloudflare className="text-[#F38020]" />,
    },
  ];

  return (
    <section className="py-12 bg-muted rounded-xl shadow-inner">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-primary">
          Tecnologias de Confiança
        </h2>
        <p className="text-muted-foreground mt-2">
          Utilizamos soluções das maiores empresas do mundo para garantir
          segurança, performance e escalabilidade.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="text-5xl">{tech.icon}</div>
            <span className="mt-2 text-sm font-semibold text-muted-foreground">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
