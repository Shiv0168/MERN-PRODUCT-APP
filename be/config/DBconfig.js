const mongoose = require("mongoose");

const DB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_STRING);
    console.log("DB CONNECTED :) ", connect.connection.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DB;
