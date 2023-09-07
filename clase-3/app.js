const express = require("express");

const app = express();
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.json({ message: "hola mundo" });
});

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});
