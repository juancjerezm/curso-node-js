const http = require("node:http");
const dittoJSON = require("./pokemon/ditto.json");

//procesar la request
const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));
        default:
          res.statusCode = 404;
          res.setHeader("Content-type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }
    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", () => {
            const data = JSON.parse(body);
            //acapodriamos llamara a una base de datos para guardar la info
            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });
            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });
          break;
        }

        default:
          res.statusCode = 404;
          res.setHeader("Content-type", "text/plain; charset=utf-8");
          return res.end("404 Not found");
      }
  }
};

// para crear el servidor
const server = http.createServer(processRequest);

// para levantar el servidor
server.listen(3000, () => {
  console.log("server listening on port http://localhost:3000");
});
