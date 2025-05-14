"use client";

import { motion } from "framer-motion";
import { Card, CardHeader } from "@/components/ui/card";
import {
  CheckCircle,
  BarChart3,
  Zap,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  { icon: CheckCircle, text: "Redução de custos operacionais" },
  { icon: BarChart3, text: "Ganhos em produtividade e agilidade" },
  { icon: RefreshCcw, text: "Visibilidade em tempo real com dashboards" },
  { icon: Zap, text: "Automação de tarefas repetitivas" },
  { icon: ShieldCheck, text: "Escalabilidade com segurança em nuvem" },
];

const HighlightSection = () => {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-12 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Benefícios da Transformação Digital
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <Card className="w-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl border border-gray-200 rounded-lg p-8 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="flex items-center gap-4 text-lg font-semibold text-gray-700">
                <benefit.icon className="w-6 h-6 text-green-500" />
                {benefit.text}
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HighlightSection;
