const mongoose = require("mongoose");

const conectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.ps7ksmf.mongodb.net/database?retryWrites=true&w=majority`, );
    console.log("Conexão ao banco de dados realizada com sucesso");
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar com o banco de dados!", error);
  }
};

module.exports = conectToDatabase;

/* const conectToDatabase = async () => { 
    try {
      await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.ps7ksmf.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se concectar com o banco de dados!",
          error
        );
      }
      return console.log("Conexão ao banco de dados realizada com sucesso");
    }
  );
}

};*/
