import React, { Component } from "react";
import Logo from "./edxlogo.PNG";
import smd from "./smedias.PNG";
import PostUser from "./RESTAPI_CALLER1";
import "./signup.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      new_user_fname: "",
      new_user_uname: "",
      new_user_email: "",
      new_user_pass: "",
      new_user_country: "",
    };
  }
  render() {
    return (
      <div>
        <div class="top_img">
          <img src={Logo} width="58px" height="38px" />
        </div>
        <div class="line"></div>
        <form
          onSubmit={(event) => {
            console.log(
              this.state.new_user_fname +
                this.state.new_user_uname +
                this.state.new_user_email +
                this.state.new_user_pass +
                this.state.new_user_country
            );
            console.log("Form's on Submit Called");
            event.preventDefault();
            PostUser({
              fullname: this.state.new_user_fname,
              username: this.state.new_user_uname,
              email: this.state.new_user_email,
              password: this.state.new_user_pass,
              country: this.state.new_user_country,
            }).then((response) => {
              console.log(response.data);
            });
          }}
        >
          <div class="form_div">
            <div class="already">Already have an edX account? Sign in.</div>
            <div class="line1"></div>
            <div class="account">Create a new account</div>
            <input
              class="input_box"
              type="input"
              placeholder="Full name (required)"
              value={this.state.new_user_fname}
              onChange={(event) => {
                this.setState({ new_user_fname: event.target.value });
              }}
            ></input>
            <input
              class="input_box"
              type="input"
              placeholder="Public username (required)"
              value={this.state.new_user_uname}
              onChange={(event) => {
                this.setState({ new_user_uname: event.target.value });
              }}
            ></input>
            <input
              class="input_box"
              type="input"
              placeholder="Email (required)"
              value={this.state.new_user_email}
              onChange={(event) => {
                this.setState({ new_user_email: event.target.value });
              }}
            ></input>
            <input
              class="input_box"
              type="input"
              placeholder="Password (required)"
              value={this.state.new_user_pass}
              onChange={(event) => {
                this.setState({ new_user_pass: event.target.value });
              }}
            ></input>
            <input
              class="input_box"
              type="input"
              placeholder="Country or region of residence (required)"
              value={this.state.new_user_country}
              onChange={(event) => {
                this.setState({ new_user_country: event.target.value });
              }}
            ></input>
            <div class="sup_text">
              <div>
                By creating an account, you agree to the Terms of Service and
                Honor Code
              </div>
              <div>
                and you acknowledge that edX and each Member process your
                personal
              </div>
              <div>data in accordance with the Privacy Policy.</div>
            </div>
            <div>
              <input type="checkbox" label="cb"></input>
              <label for="cb" class="cbtxt">
                Support education research by providing additional information.
                <div class="opt">(Optional)</div>
              </label>
            </div>
            <input
              onClick={() => {
                this.dispmsg();
              }}
              class="SignUp_button"
              type="submit"
              value="Create Account"
            ></input>
            <div class="line1"></div>
            <div class="bottom_text">or create an account using</div>
            <div class="bottom_img">
              <img src={smd} width="520px" height="90px" />
            </div>
          </div>
        </form>
      </div>
    );
  }
  componentDidMount() {
    console.log("Users_Display Mounted");
  }

  dispmsg() {
    alert("Registration Successful");
  }
}

// function openForm() {
//   document.getElementById("mymsg").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("mymsg").style.display = "none";
// }

export default SignUp;
