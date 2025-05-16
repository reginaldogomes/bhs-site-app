"use client";

import { motion } from "framer-motion";
import { Card, CardHeader } from "@/components/ui/card";
import {
  CheckCircle,
  BarChart3,
  Zap,
  RefreshCcw,
  ShieldCheck,
  Globe,
} from "lucide-react";

const benefits = [
  { icon: CheckCircle, text: "Redução de custos e perdas operacionais" },
  { icon: BarChart3, text: "Mais agilidade e produtividade diária" },
  { icon: RefreshCcw, text: "Informações em tempo real e seguras" },
  { icon: Zap, text: "Automação de tarefas e processos internos" },
  { icon: ShieldCheck, text: "Escalabilidade com segurança e controle" },
  { icon: Globe, text: "Conectividade global com colaboração ativa" },
];

const HighlightSection = () => (
  <section className="py-16 px-6 max-w-6xl mx-auto text-center">
    <motion.h2
      className="text-4xl font-bold text-gray-800 mb-12 tracking-wide"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Benefícios da Transformação Digital
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {benefits.map(({ icon: Icon, text }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white shadow-lg border border-gray-100 rounded-xl p-6 hover:shadow-xl transition">
            <CardHeader className="flex items-center gap-4 text-gray-700 font-medium">
              <Icon className="w-6 h-6 text-primary" />
              {text}
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HighlightSection;
