const express = require("express");
const ditto = require("./pokemon/ditto.json");

const app = express();
app.disable("x-powered-by");
const PORT = process.env.PORT ?? 3001;

app.use(express.json());

// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();
//   //solo llegan request que son POST y que tienen el header Content-Type: application/json

//   let body = "";

//   //escuchar el evento
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });
//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();
//     req.body = data;
//     next();
//   });
// });

app.get("/", (req, res) => {
  res.send("<h1>Mi pagina</h1>");
  // res.json({message: 'hola mundo'});
});

app.post("/pokemon", (req, res) => {
  const data = req.body;
  data.timestamp = Date.now();

  res.status(201).json(req.body);
});

app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});

//el use, es para todas las opciones, es como si tuvieramos un asterisco
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
