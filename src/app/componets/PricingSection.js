import React from "react";

function PricingSection() {
  return (
    <div className="container marginNavTop">
      <div className="pageHeading mb-4">
        <h2>Pricing</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="row m-0 p-0 my-5 ">
        <div className="col-3 border bg-success d-flex justify-content-center align-items-center text-light" style={{ hight: "100%" }}>
          <div>
          <h3 className="mb-4">Services And Pricing</h3>
          <p>
            What's special about your services or offerings? Give your audience
            a reason to choose you over your competition. Cite it above, then
            flesh it out here.
          </p>
          </div>
        </div>
        {[1, 2, 3]?.map((v, i) => {
          return (
            <div className="col-3">
              <div className="pricingCard">
                <div className=" border shadow-sm">
                  <h5 className="p-3 mb-0 bg-light">Basic</h5>
                  <div className="p-3 my-3">
                    <h5 className="text-secondary mb-3">
                      <i className="fa fa-check text-success me-2"></i>Resume
                      Sourcing
                    </h5>
                    <h5 className="text-secondary mb-3">
                      <i className="fa fa-check text-success me-2"></i>Outreach
                    </h5>
                    <h5 className="text-secondary mb-3">
                      <i className="fa fa-check text-success me-2"></i>Interview
                    </h5>
                    <h5 className="text-secondary mb-3">
                      <i className="fa fa-check text-success me-2"></i>Vacancy
                      Closing
                    </h5>
                    <h5 className="text-secondary mb-3">
                      <i className="fa fa-check text-success me-2"></i>Vacancy
                      Closing
                    </h5>
                    <h5 className="text-secondary mb-3">
                      <i className="fa fa-check text-success me-2"></i>Vacancy
                      Closing
                    </h5>
                    <h5 className="text-secondary mb-3">
                      <i className="fa fa-check text-success me-2"></i>Vacancy
                      Closing
                    </h5>
                  </div>
                  <div className="p-3 bg-light">
                    <button className="btn btn-success w-100">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PricingSection;
