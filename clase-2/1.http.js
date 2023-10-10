const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  res.setHeader("Content-type", "text/html ;charset= utf-8 ");

  if (req.url === "/") {
    res.end("<h1>Bienvenido a mi página de inicio</h1>");
  } else if (req.url === "/contacto") {
    res.end("<h1>Contacto</h1>");
  } else if (req.url === "/lay.jpg") {

    fs.readFile('./lay.jpg', (err,data)=>{ 
        if(err){
            res.statusCode = 500
            res.end('<h1>Internal server Error</h1>')
        }else{
            res.setHeader('Content-type', 'image/jpg')
            res.end(data)
        }
    })
  } else {
    res.statusCode = 404;
    res.end("<h1>404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});
