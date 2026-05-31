module.exports = {
  apps: [
    {
      name: "maxera-talent",
      cwd: __dirname,
      script: "npm",
      args: "run start",
      exec_mode: "fork",
      instances: 1,
      watch: false,
      autorestart: true,
      restart_delay: 5000,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,
      },
    },
  ],
};
