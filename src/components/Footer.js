import React from "react";
import "../App.css";

function footer() {
  return (
    <>
      <div className="footerbg">
        <footer className="text-center text-lg-start text-white">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    DONCOIN
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam sed deleniti enim dolores at aut! Sapiente amet illum
                    architecto? Praesentium cumque ullam, sit sapiente quisquam
                    ut! Molestiae blanditiis illo iure assumenda eum fuga,
                    nostrum nam.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Products
                  </h6>
                  <p>
                    <a className="text-white">Home</a>
                  </p>
                  <p>
                    <a className="text-white">Abour us</a>
                  </p>
                  <p>
                    <a className="text-white">Services</a>
                  </p>
                  <p>
                    <a className="text-white">Projects</a>
                  </p>
                  <p>
                    <a className="text-white">Contact us</a>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Contact
                  </h6>
                  <p>
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@doncoin.io
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> www.doncoin.com
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>
                </div>

                <div className=" text-center p-3">
                  © 2020 Copyright:
                  <a className="text-white">Best web creater</a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
}

export default footer;
