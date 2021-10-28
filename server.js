const express = require("express");

const { Client } = require("pg");
const cors = require("cors");

const app = express();
app.use(express.json());

const db = require("./app/models/index");
db.sequelize.sync();

require("./app/routes/teams.routes")(app);
require("./app/routes/players.routes")(app);


app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
