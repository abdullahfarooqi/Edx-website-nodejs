const { response } = require("express");
const expressModule = require("express");

const app = expressModule();
const cors = require("cors");
const Joi = require("joi");
app.use(expressModule.json());

const users = [
  {
    id: 1,
    fullname: "Abdullah",
    username: "abdullah11",
    email: "abdullah@gmail.com",
    password: "1234",
    country: "Pakistan",
  },
];

app.options("/", cors());
app.post("/", (request, response) => {
  console.log("Post method Called");
  console.log(request.body);
  const new_user = {
    id: users.length + 1,
    fullname: request.body.fullname,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
    country: request.body.country,
  };
  users.push(new_user);
  response.header("Access-Control-Allow-Origin", "*");
  response.send(users);
});

app.listen(3002, () => {
  console.log("Server started: Listening at port 3002");
});
