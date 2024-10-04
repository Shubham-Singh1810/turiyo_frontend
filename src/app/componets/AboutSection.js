import React from "react";
import CounterSection from "./CounterSection";

function AboutSection() {
  return (
    <div className="container marginNavTop">
      <div className="pageHeading mb-4">
        <h2>About Us</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="row m-0 p-0  ">
        <div className="col-lg-6 col-12 m-0 p-0 order-2 order-lg-1">
          <img
            src="https://bootstrapmade.com/content/demo/eNno/assets/img/about.png"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-6 col-12  p-0 my-auto heroSectionContent ps-lg-5 ps-0 order-2 order-lg-1">
          <div className="aboutContent mt-4 mt-lg-0 mx-2">
            <h2 className='mb-5 text-secondary'>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h2>
            <p className='mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="my-4 ms-lg-5 ms-0">
              <p className='mb-0'><i className='fa fa-check-circle text-success'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className='mb-0'><i className='fa fa-check-circle text-success'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className='mb-0'><i className='fa fa-check-circle text-success'/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              
            </div>
            <h5 className='mt-5 text-secondary'>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </h5>
          </div>
        </div>
      </div>
      <CounterSection/>
    </div>
  );
}

export default AboutSection;
