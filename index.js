import express from "express";

const app = express();

app.get("/employes", (req, res) => res.send("obteniendo empleados"));

app.listen(3000);
console.log("corriendo en el puerto 3000");
