const { response } = require("express");
const expressModule = require("express");

const app = expressModule();
const cors = require("cors");
const Joi = require("joi");
app.use(expressModule.json());

var parsedJSON = require("./testdata.json");
var projects = parsedJSON.courses;

app.options("/projects", cors());
app.get("/projects", (request, response) => {
  console.log("/projects page accessed");
  response.header("Access-Control-Allow-Origin", "*");
  response.send(projects);
});

app.listen(3001, () => {
  console.log("Server started: Listening at port 3001");
});
