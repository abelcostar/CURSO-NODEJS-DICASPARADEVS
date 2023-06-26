const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro:", error);
  }
  console.log("Pasta criada com sucesso");
});

fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "hello node,",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Arquivo criado com sucesso");
  }
);

// Adicionar a um arquivo
fs.appendFile(
  path.join(__dirname, "test", "test.txt"),
  " helo wolrd",
  (error) => {
    if (error) {
      return console.log("Erro:", error);
    }
    console.log("Arquivo modificado com sucesso!");
  }
);

// Ler Arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log(data);
  }
);
