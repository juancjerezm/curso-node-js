const path = require("node:path");
// unir rutas con path.join

// barra separadora de carpetas segun, SO
console.log(path.sep);

//Unir rutas
const filePath = path.join("content", "subFolder", "text.txt");
console.log(filePath);

const base = path.basename("tmp/juancho-secrect-files/pasword.txt");
console.log(`Base name ${base}`);

const filename = path.basename("tmp/juancho-secrect-files/pasword.txt", ".txt");
console.log(`${filename} without extension`);

const extension = path.extname("my.name.image.jpg");
console.log(extension);
