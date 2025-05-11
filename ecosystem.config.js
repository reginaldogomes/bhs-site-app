module.exports = {
  apps: [
    {
      name: "bhsolutions.com.br",
      cwd: "/var/www/bhsolutions.com.br",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      interpreter: "node", // ✅ CORREÇÃO CRÍTICA
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
