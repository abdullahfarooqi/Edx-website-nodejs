import React, { Component } from "react";
import Logo from "./edxlogo.PNG";
import "./Edx.css";

class EdxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TopMenu></TopMenu>
      </div>
    );
  }
}

function TopMenu(params) {
  return (
    <div>
      <div class="top_border">
        <div class="edx_img_border">
          <img src={Logo} width="90px" height="57px" />
        </div>
        <div class="courses_trans">
          <div class="courses_top">
            Courses <i class="arrow down"></i>
          </div>
        </div>
        <div class="pnd_trans">
          <div class="courses_top">
            Programs & Degrees <i class="arrow down"></i>
          </div>
        </div>
        <div class="snp_trans">
          <div class="courses_top">Schools & Partners</div>
        </div>
        <div class="edb_trans">
          <div class="courses_top">edX for Business</div>
        </div>
        <div class="search_img">
          <i class="fa fa-search"></i>
        </div>
        <div class="signin">Sign In</div>
        <button
          id="register"
          class="prg"
          button
          onclick="window.location.href = 'signup.js';"
        >
          <div class="reg">Register</div>
        </button>
      </div>
      <div class="second_border">
        <div class="text_1">Search Courses and Programs</div>
        <div class="search_brntton">
          <div class="rec_box">
            <div class="search_white">
              <div class="btnn">
                <i class="fa fa-search"></i>
              </div>
              computer science
            </div>
          </div>
          <div class="rec_sbutton">
            <div class="search_red">Search</div>
          </div>
        </div>
        <div class="five_section">
          <div class="rect_1">
            Subject <i class="arrow1 down1"></i>
          </div>
          <div class="rect_2">
            Partner<i class="arrow1 down1"></i>
          </div>
          <div class="rect_3">
            Program<i class="arrow1 down1"></i>
          </div>
          <div class="rect_4">
            Level<i class="arrow1 down1"></i>
          </div>
          <div class="rect_5">
            Availability<i class="arrow1 down1"></i>
          </div>
          <div class="rect_6">
            Language<i class="arrow1 down1"></i>
          </div>
        </div>
        <div class="three_section">
          <div class="rect_11">All</div>
          <div class="rect_22">Courses</div>
          <div class="rect_11">Programs</div>
        </div>
      </div>
      <div class="up_text">
        <div class="cs">"computer science" Courses (176 results)</div>
      </div>
    </div>
  );
}

export default EdxPage;
<div></div>;
