//Ejemplo asincrono paralelo
import { readFile } from "node:fs/promises";
//los ESM emac script modules, tienen el soporte de utilizar
//await en el cuerpo, esto se llama Top level

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("archivo2.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("primer texto amigo", text);
  console.log("segundo texto", secondText);
});
