import React from "react";
import CounterSection from "./CounterSection";

function AboutSection() {
  return (
    <div className="container marginNavTop">
      <div className="pageHeading mb-4">
        <h2>About Us</h2>
        <p>
        Deep Tech |  Generative AI |  Company Assisting the Recruitment Industry 
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
            
            
            
            <h3 className='mt-5 text-secondary'>
            We bring in the much-needed support to the job platforms and third-party recruiters through quick authentication of the candidates and fast hiring. With accurate identification of the right candidate – we initiate fast communication and conduct multimodal assessments of the candidate with precision. Existing job platforms and third-party recruiters are boosting their credibility and services with us.
            </h3>
          </div>
        </div>
      </div>
      {/* <CounterSection/> */}
    </div>
  );
}

export default AboutSection;
