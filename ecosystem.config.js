module.exports = {
  apps: [
    {
      name: "bhsolutions.com.br",
      cwd: "/home/ubuntu/apps/bhsolutions.com.br",
      script: "npm",
      args: "start",
      interpreter: "/bin/bash", // ✅ CORRETO para rodar npm
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
