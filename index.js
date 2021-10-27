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
app.listen(3300, () => console.log("listening on port 3300"));