module.exports = app => {
    const teams = require("../controllers/team.controller");

    var router = require("express").Router();

    //create new team
    router.post("/",teams.create);
}