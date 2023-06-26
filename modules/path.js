const { Console } = require("console");
const path = require("path");

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Diretório atual
console.log(path.dirname(__filename));

// Extenssão do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test"));
