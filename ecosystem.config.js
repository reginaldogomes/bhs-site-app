module.exports = {
  apps: [
    {
      name: "bhsolutions.com.br",
      cwd: "/home/ubuntu/apps/bhsolutions.com.br",
      script: "node_modules/next/dist/bin/next", // Caminho direto para o binário Next.js
      args: "start -p 3000", // Porta definida nos argumentos
      interpreter: "node", // Usa Node.js como interpretador
      instances: "max", // Otimização para multi-core
      exec_mode: "cluster", // Modo cluster para melhor performance
      watch: false, // Desativado em produção
      max_memory_restart: "1G", // Reinicia se usar mais de 1GB
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NEXT_TELEMETRY_DISABLED: "1", // Desativa telemetria do Next.js
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
