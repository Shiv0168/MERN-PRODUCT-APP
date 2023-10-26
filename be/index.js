const express = require("express");
const logger = require("morgan");
const DB = require("./config/DBconfig");
const cors = require("cors");

require("dotenv").config();

DB();

const app = express();
const port = process.env.PORT || 8081;
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use("/", require("./routes/product"));

app.listen(port, () => {
  console.log("APP LISTEN ON PORT : " + port);
});
