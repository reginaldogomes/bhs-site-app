export default {
  apps: [
    {
      name: "bhsolutions.com.br", // nome personalizado do processo
      script: "npm",
      args: "run start",
      cwd: "/var/www/bhsolutions.com.br",
      interpreter: "bash",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
