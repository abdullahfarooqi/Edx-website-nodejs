import React, { Component } from "react";
import Logo from "./edxlogo.PNG";
import img1 from "./social_media.PNG";
import img2 from "./goog.PNG";
import img3 from "./apps.PNG";
import "./Edx.css";

class BottomMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <BottomMenu1></BottomMenu1>
      </div>
    );
  }
}

function BottomMenu1(params) {
  return (
    <div>
      <div class="last_rect">
        <div class="l_r_edximg_row">
          <div class="img_edx_set">
            <img src={Logo} width="102px" height="62px" />
          </div>
          <div class="heading_text_lr">edX</div>
          <div class="sub_text">About</div>
          <div class="sub_text">edX for Business</div>
          <div class="sub_text">Affiliates</div>
          <div class="sub_text">Open edX</div>
          <div class="sub_text">Careers</div>
          <div class="sub_text">News</div>
        </div>
        <div class="l_r_second_row">
          <div class="heading_text_lr1">Connect</div>
          <div class="sub_text">Blog</div>
          <div class="sub_text">Contact us</div>
          <div class="sub_text">Help Center</div>
          <div class="sub_text">Media Kit</div>
          <div class="sub_text">Donate</div>
        </div>
        <div class="l_r_second_row">
          <div class="heading_text_lr1">Legal</div>
          <div class="sub_text">Terms of Service & Honor Code</div>
          <div class="sub_text">Privacy Policy</div>
          <div class="sub_text">Accessibility Policy</div>
          <div class="sub_text">Trademark Policy</div>
          <div class="sub_text">Sitemap</div>
        </div>
        <div class="soc_imgs">
          <img src={img1} width="205px" height="45px" />
        </div>
        <div class="brain_text_headings_1">Choose Language</div>
        <div class="lang_app">
          <div class="lang">English</div>
          <div class="apply">Apply</div>
        </div>
        <div class="apps">
          <div class="img_apps">
            <img src={img3} width="120px" height="40px" />
          </div>
          <div class="img_apps">
            <img src={img2} width="120px" height="40px" />
          </div>
        </div>
        <div class="chinese">© 2021 edX Inc. All rights reserved.</div>
      </div>
    </div>
  );
}

export default BottomMenu;
