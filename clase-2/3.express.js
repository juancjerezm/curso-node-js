const express = require("express");
const ditto = require("./pokemon/ditto.json");

const app = express();
app.disable("x-powered-by");
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.send("<h1>Mi pagina</h1>");
  // res.json({message: 'hola mundo'});
});

app.post("/pokemon", (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();
    res.status(201).json(data);
  });
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
