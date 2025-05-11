module.exports = {
  apps: [
    {
      name: "bhsolutions.com.br",
      cwd: "/var/www/bhsolutions.com.br",
      script: "npm",
      args: "start",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
