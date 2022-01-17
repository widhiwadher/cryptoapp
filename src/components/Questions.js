import React from "react";
import '../App.css';

function Questions() {
  return (
    <div className="container-fluid questionbg">
      <div className="row">
        <div className="col-md-6">
          <h2 className="center">Frequently asked questions</h2>
        </div>
        <div className="col-md-6 mt-5 mb-5">
          <p>
            <a
              class="btn btn-warning"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              What is crypto Doncoin Token ?
            </a>
          
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>

          <p>
            <a
              class="btn btn-warning"
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample2"
            >
              What is crypto Doncoin Token ?
            </a>
          
          </p>
          <div class="collapse" id="collapseExample2">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>

          <p>
            <a
              class="btn btn-warning"
              data-bs-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample3"
            >
              What is crypto Doncoin Token ?
            </a>
          
          </p>
          <div class="collapse" id="collapseExample3">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>

          <p>
            <a
              class="btn btn-warning"
              data-bs-toggle="collapse"
              href="#collapseExample4"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample4"
            >
              What is crypto Doncoin Token ?
            </a>
          
          </p>
          <div class="collapse" id="collapseExample4">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
