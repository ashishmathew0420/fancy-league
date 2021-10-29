module.exports = (app) => {
  const players = require("../controllers/player.controller");
  var router = require("express").Router();

  //create new player
  router.post("/:id", players.create);

  //get all players
  router.get("/:id", players.findAll);

  //update player
  router.put("/:id", players.update);

  //delete player
  router.delete("/:id", players.delete);

  app.use("/api/teams/players", router);
};
