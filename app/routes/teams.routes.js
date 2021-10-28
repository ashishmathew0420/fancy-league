module.exports = (app) => {
  const teams = require("../controllers/team.controller");

  var router = require("express").Router();

  //create new team
  router.post("/", teams.create);

  //retrive all teams
  router.get("/", teams.findAll);

//   //retreive team by id
//   router.get("/:id", teams.findOne);

  //update a team by id
  router.put("/:id", teams.update);

  //delete team by id
  router.delete("/:id", teams.delete);

  app.use("/api/teams", router);
};
