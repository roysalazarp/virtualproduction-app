module.exports = {
  apps: [
    {
      name: "scenes-service",
      script: "dist/bundle.js",
      env: {
        PORT: 80,
        NODE_ENV: "production"
      }
    }
  ]
};
