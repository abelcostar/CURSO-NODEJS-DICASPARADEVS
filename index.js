// const { Person } = require("./person");
const dotenv = require("dotenv");

const conectToDatabase = require("./src/database/connect");

dotenv.config();

conectToDatabase();



// require("./modules/path");
// require("./modules/fs");
// require("./modules/http")
require("./modules/express");

//const person = new Person("Abel costa");
