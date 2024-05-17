const controllerTaks = require("../controller/taks.controller");

const Taks = (app) => {
  app.get("/api/taks", controllerTaks.getList);
  app.post("/api/taks", controllerTaks.addNews);
};

module.exports = Taks;
