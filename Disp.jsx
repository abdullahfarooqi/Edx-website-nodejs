import React, { Component } from "react";
import GetProjects from "./RESTAPI_CALLER";
import Logo from "./edxlogo.PNG";
import EdxPage from "./Edx.js";
import BottomMenu from "./BottomMenu.js";
import SignUp from "./signup.js";
import "./Edx.css";

class DispData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects_l: [],
      temp: true,
    };
  }
  render() {
    if (this.state.temp == true) {
      return (
        //      <Multiple_Projects projects={this.state.projects_l}></Multiple_Projects>
        <div>
          <EdxPage></EdxPage>
          <div class="main">
            <div class="row_main">
              {this.state.projects_l.map((proj) => {
                return (
                  <div class="disp_prj">
                    <img
                      class="uni_img"
                      src={proj.img_src}
                      style={{ height: "100px", width: "266px" }}
                    />
                    <div class="img2_box">
                      <img
                        class="uni_img"
                        src={proj.img_src2}
                        style={{ height: "50px", width: "80px" }}
                      />
                    </div>
                    <div class="div_coursename">{proj.Course_name}</div>
                    <div class="div_uni">{proj.University}</div>
                  </div>
                );
              })}
            </div>
            <div class="row_main">
              {this.state.projects_l.map((proj) => {
                return (
                  <div class="disp_prj">
                    <img
                      class="uni_img"
                      src={proj.img_src}
                      style={{ height: "100px", width: "266px" }}
                    />
                    <div class="img2_box">
                      <img
                        class="uni_img"
                        src={proj.img_src2}
                        style={{ height: "50px", width: "80px" }}
                      />
                    </div>
                    <div class="div_coursename">{proj.Course_name}</div>
                    <div class="div_uni">{proj.University}</div>
                  </div>
                );
              })}
            </div>
            <div class="row_main">
              {this.state.projects_l.map((proj) => {
                return (
                  <div class="disp_prj">
                    <img
                      class="uni_img"
                      src={proj.img_src}
                      style={{ height: "100px", width: "266px" }}
                    />
                    <div class="img2_box">
                      <img
                        class="uni_img"
                        src={proj.img_src2}
                        style={{ height: "50px", width: "80px" }}
                      />
                    </div>
                    <div class="div_coursename">{proj.Course_name}</div>
                    <div class="div_uni">{proj.University}</div>
                  </div>
                );
              })}
            </div>
            <div class="row_main">
              {this.state.projects_l.map((proj) => {
                return (
                  <div class="disp_prj">
                    <img
                      class="uni_img"
                      src={proj.img_src}
                      style={{ height: "100px", width: "266px" }}
                    />
                    <div class="img2_box">
                      <img
                        class="uni_img"
                        src={proj.img_src2}
                        style={{ height: "50px", width: "80px" }}
                      />
                    </div>
                    <div class="div_coursename">{proj.Course_name}</div>
                    <div class="div_uni">{proj.University}</div>
                  </div>
                );
              })}
            </div>
            <div class="row_main">
              {this.state.projects_l.map((proj) => {
                return (
                  <div class="disp_prj">
                    <img
                      class="uni_img"
                      src={proj.img_src}
                      style={{ height: "100px", width: "266px" }}
                    />
                    <div class="img2_box">
                      <img
                        class="uni_img"
                        src={proj.img_src2}
                        style={{ height: "50px", width: "80px" }}
                      />
                    </div>
                    <div class="div_coursename">{proj.Course_name}</div>
                    <div class="div_uni">{proj.University}</div>
                  </div>
                );
              })}
            </div>
            <div class="row_main">
              {this.state.projects_l.map((proj) => {
                return (
                  <div class="disp_prj">
                    <img
                      class="uni_img"
                      src={proj.img_src}
                      style={{ height: "100px", width: "266px" }}
                    />
                    <div class="img2_box">
                      <img
                        class="uni_img"
                        src={proj.img_src2}
                        style={{ height: "50px", width: "80px" }}
                      />
                    </div>
                    <div class="div_coursename">{proj.Course_name}</div>
                    <div class="div_uni">{proj.University}</div>
                  </div>
                );
              })}
            </div>
            <button
              class="prg1"
              onClick={() => {
                this.updatetemp();
              }}
            >
              Register
            </button>
          </div>
          <BottomMenu></BottomMenu>
        </div>
      );
    } else {
      return <SignUp></SignUp>;
    }
  }
  componentDidMount() {
    console.log("Project_Display Mounted");
    this.FetchProjects();
  }

  FetchProjects() {
    GetProjects().then((response) => {
      console.log(response.data);
      this.setState({ projects_l: response.data });
    });
    return [];
  }

  updatetemp() {
    this.setState({ temp: false });
  }
}

// function Multiple_Projects(props) {
//   let i = 0;
//   return (
//     <div class="main">
//       <div class="row_main">
//         <div class="disp_prj">
//           <div class="img">
//             <span>
//               <img src={props[i].img_src} />
//             </span>
//           </div>
//           {props[i].Course_name} {props[i].University}
//         </div>
//         <div class="disp_prj">
//           {props[i + 1].Course_name} {props[i + 1].University}
//         </div>
//         <div class="disp_prj">
//           {props[i + 2].Course_name} {props[i + 2].University}
//         </div>
//         <div class="disp_prj">
//           {props[i + 3].Course_name} {props[i + 3].University}
//         </div>
//       </div>
//     </div>
//   );
// }

// function Multiple_Projects(props) {
//   let projs = props.projects;
//   let i = 0;
//     <div class="main">
//       let list_items = projs.map((proj) => (
//       <div class="row_main">
//         <div class="disp_prj">
//           <img
//             class="img_c"
//             src={proj.img_src}
//             style={{ height: "50px", width: "50px" }}
//           />
//           {projs[i].Course_name} {projs[i].University}
//         </div>
//         <div class="disp_prj">
//           {projs[i + 1].Course_name} {projs[i + 1].University}
//         </div>
//         <div class="disp_prj">
//           {projs[i + 2].Course_name} {projs[i + 2].University}
//         </div>
//         <div class="disp_prj">
//           {projs[i + 3].Course_name} {projs[i + 3].University}
//         </div>
//       </div>
//     </div>
//     // <li key={proj.Course_name}>
//     //   <div>
//     //     <div>
//     //       {proj.Course_name} {proj.University}
//     //     </div>
//     //   </div>
//     // </li>
//   ));
// }

export default DispData;
