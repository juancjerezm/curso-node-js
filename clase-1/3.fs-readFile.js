//Esto solo en los modulos nativos que no tiene promesas
// const { promisify } = require("node:util");
// const readFilePromise = promisify(fs.readFile)


//Este es un ejemplo de asincrono con callbacks

const fs = require("node:fs");

console.log("leyendo el primer archivo...");

fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log("primer texto", text);
});
console.log("Hacer cosas mientras se lee el archivo");

console.log("leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log("segundo texto", text);
});
