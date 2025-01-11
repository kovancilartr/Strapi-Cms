export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000",
        "http://192.168.1.12:8081",
        "http://192.168.1.12:3000",
        "http://10.0.2.2:1337",
        "http://10.0.2.2:3000",
        "http://192.168.1.12:1337",
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
