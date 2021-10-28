const express = require("express");
require("dotenv").config();
const { Client } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());

const db = require("./app/models/index");
db.sequelize.sync();

require("./app/routes/teams.routes")(app);
require("./app/routes/players.routes")(app);

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
