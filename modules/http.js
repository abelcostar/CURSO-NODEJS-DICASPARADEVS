const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>home page</h1>");
  }
  if (req.url == "/users") {
    const users = [
      {
        name: "Abel",
        email: "abel.icpm@gmail.com",
      },
      {
        name: "isabel",
        email: "isabel.icpm376@gmail.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`));
