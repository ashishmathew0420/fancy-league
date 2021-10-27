const express = require("express");
require("dotenv").config();
const { Client } = require("pg");

const app = express();
app.use(express.json());

//connection url
const db_url = process.env.DB_URL;
const client = new Client(db_url);

//check coneection
async function connect(client) {
  try {
    await client.connect();
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
}
connect(client);

//get all teams

app.get("/teams", (req, res) => {
  client.query("select * from team", (err, result) => {
    if (!err) return res.send(result.rows);
  });
  client.end;
});

app.listen(3300, () => console.log("listening on port 3300"));


//get team by id 


app.get("/teams/:id", (req, res) => {
    client.query(
      `select * from team where team_key = ${req.params.id}`,
      (err, result) => {
        if (!err) return res.send(result.rows);
      }
    );
    client.end;
  });
  

  //post a new team 

  app.post("/teams", (req, res) => {
    const newTeam = req.body;
    client.query(
      `insert into team values(${newTeam.id},'  ${newTeam.name}')`,
      (err, result) => {
        if (!err) return res.send("insertion succesfull");
      }
    );
    client.end;
  });