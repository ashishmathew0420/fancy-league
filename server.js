const express = require("express");
require("dotenv").config();
const { Client } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());

const db = require("./app/models/index");
db.sequelize.sync({ force: true });

require("./app/routes/teams.routes")(app);

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json({ message: "ChampionsLeague" });
// });

const PORT = process.env.PORT || 5000;

// //connection url
// const db_url = process.env.DB_URL;
// const client = new Client(db_url);

// //check coneection
// async function connect(client) {
//   try {
//     await client.connect();
//     console.log("connected");
//   } catch (error) {
//     console.log(error);
//   }
// }
// connect(client);

// //get all teams

// app.get("/teams", (req, res) => {
//   client.query("select * from team", (err, result) => {
//     if (!err) return res.send(result.rows);
//   });
//   client.end;
// });

// //get team by id

// app.get("/teams/:id", (req, res) => {
//   client.query(
//     `select * from team where team_key = ${req.params.id}`,
//     (err, result) => {
//       if (!err) return res.send(result.rows);
//     }
//   );
//   client.end;
// });

// //post a new team

// app.post("/teams", (req, res) => {
//   const newTeam = req.body;
//   client.query(
//     `insert into team values(${newTeam.id},'  ${newTeam.name}')`,
//     (err, result) => {
//       if (!err) return res.send("insertion succesfull");
//     }
//   );
//   client.end;
// });

// //update team

// app.put("/teams/:id", (req, res) => {
//   const team = req.body;
//   client.query(
//     `update team set team_name = '${team.name}' where team_key = ${team.id}`,
//     (err, result) => {
//       if (!err) return res.send("update succesfull");
//     }
//   );
//   client.end;
// });

// //delete user

// app.delete("/teams/:id", (req, res) => {
//     const team = req.body;
//     client.query(`delete from team where team_key = ${team.id}`, (err, result) => {
//       if (!err) return res.send("delete succesfull");
//     });
//     client.end;
//   });

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
