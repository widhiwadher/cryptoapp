import React from "react";
import logo from "../img/building-g8c3ec1197_1920.jpg";

function AboutUs() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h2 className="center">About us</h2>
          <h3 className="center">
            Lorem ipsum dolor sit, amet consectetur.
          </h3>

          <h6>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            architecto quisquam dicta voluptate rerum consectetur esse dolores
            ut? Ea aliquid sunt vero. Placeat expedita sunt sequi quam pariatur
            repellendus! Obcaecati?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam vitae quod omnis facilis labore repudiandae in quibusdam amet assumenda numquam, exercitationem tenetur facere rerum nostrum.
          </h6>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img className="img-fluid" src={logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
