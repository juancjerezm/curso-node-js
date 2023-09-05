// Este ejemplo es asincrono secuencial

import { readFile } from "node:fs/promises";
//los ESM emac script modules, tienen el soporte de utilizar
//await en el cuerpo, esto se llama Top level
console.log("leyendo el primer archivo...");
const text = await readFile("./archivo.txt", "utf-8");
console.log("primer texto", text);

console.log("Hacer cosas mientras se lee el archivo");

console.log("leyendo el segundo archivo...");
const secondText = await readFile("./archivo2.txt", "utf-8");
console.log("segundo texto", secondText);
