module.exports = {
  apps: [
    {
      name: "bhsolutions.com.br",
      cwd: "/var/www/bhsolutions.com.br", // Caminho onde está o package.json
      script: "npm",
      args: "run start",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
