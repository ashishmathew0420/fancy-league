module.exports = (app) => {
  const players = require("../controllers/player.controller");
  var router = require("express").Router();

  //create new player
  router.post("/:id", players.create);

  //get all players
  router.get("/", players.findAll);

  app.use("/api/teams/players", router);
};
