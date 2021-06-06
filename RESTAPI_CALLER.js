import axios from "axios";

function GetProjects(params) {
  return axios({ method: "GET", url: "http://localhost:3001/projects" });
}

// function PostUser(params) {
//   console.log("123  " + params[0]);
//   console.log("1234 " + params[1]);
//   console.log(params);
//   const new_user = {
//     fullname: params.fullname,
//     username: params.username,
//     email: params.email,
//     password: params.password,
//     country: params.country,
//   };
//   return axios({
//     method: "POST",
//     url: "http://localhost:3000",
//     data: new_user,
//   });
// }

export default GetProjects;
