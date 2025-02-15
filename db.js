import { createPool } from "mysql2/promise";

createPool({
  host: "server-ejemplo.mysql.database.azure.com",
  port: 3306,
  user: "benjamin",
  password: "Uyjt3095?",
  database: "ejemplo",
  ssl: {
    ca: "SSL/DigiCertGlobalRootCA.crt.pem", // Ruta al certificado SSL
  },
});
