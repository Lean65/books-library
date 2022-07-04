const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI } = process.env;

const checkConnection = () => {
  return mongoose.connection.readyState;
};

const connect = async () => {
  try {
    if (!checkConnection()) {
      console.log("Conectando...");
      mongoose.connect(MONGO_URI);
    }
    console.log("Conexion exitosa");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connect,
  checkConnection,
};
