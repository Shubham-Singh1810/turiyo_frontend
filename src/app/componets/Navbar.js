"use client";
import React, { useState, useEffect } from "react";

function Navbar() {
  const navItem = [
    {
      title: "AI Cloud",
      path: "/",
    },
    {
      title: "Service",
      path: "/",
      href: "home",
    },
    {
      title: "Consulting",
      path: "/",
      href: "about",
    },
    {
      title: "Application CLoud",
      path: "/",
      href: "services",
    },
    {
      title: "Solutions",
      path: "/",
      href: "pricing",
    },
  ];
  const [showServiceModal, setshowServiceModal] = useState(false);
  const [showConsultingModal, setShowConsultingModal] = useState(false);
  const [showApplicationCLoudModule, setShowApplicationCLoudModule] = useState(false);
  const [showSolutionsModule, setShowSolutionModule] = useState(false);
  const handleClose = () => {
    setshowServiceModal(false);
    setShowSolutionModule(false);
    setShowApplicationCLoudModule(false);
    setShowConsultingModal(false);
  };
  const handleNavClick = (navItem) => {
    if (navItem == "Service") {
      setshowServiceModal(true);
    }
    if (navItem == "Consulting") {
      setShowConsultingModal(true);
    }
    if (navItem == "Application CLoud") {
      setShowApplicationCLoudModule(true);
    }
    if (navItem == "Solutions") {
      setShowSolutionModule(true);
    }
  };
  const solutionNavItem = [
    {
      title: "Low Code Platform",
      subTitle: "",
      img: "",
    },
    {
      title: "Account Reconciliation",
      subTitle: "",
      img: "",
    },
    {
      title: "Managed Services For Kubernetes",
      subTitle: "",
      img: "",
    },
    {
      title: "Managed Services For Database",
      subTitle: "",
      img: "",
    },
  ];
  const applicationCLoudItem = [
    {
      title: "Oracle Fusion",
      subTitle: "",
      img: "",
    },
    {
      title: "Oracle Application Cloud",
      subTitle: "",
      img: "",
    },
    {
      title: "Microsoft Co-Pilot",
      subTitle: "",
      img: "",
    },
    {
      title: "Microsoft Dynamics",
      subTitle: "",
      img: "",
    },
  ];
  const consultingItem = [
    {
      title: "Cybersecurity",
      subTitle: "",
      img: "",
    },
    {
      title: "Blockchain Consulting",
      subTitle: "",
      img: "",
    },
    {
      title: "Cloud Consulting",
      subTitle: "",
      img: "",
    },
    {
      title: "Cloud Migration",
      subTitle: "",
      img: "",
    },
    {
      title: "Analytics/AI ",
      subTitle: "",
      img: "",
    },
  ];
  const isNavActive = (name) => {
    if (name == "Service" && showServiceModal) {
      return "navActive";
    }
    if (name == "Consulting" && showConsultingModal) {
      return "navActive";
    }
    if (name == "Application CLoud" && showApplicationCLoudModule) {
      return "navActive";
    }
    if (name == "Solutions" && showSolutionsModule) {
      return "navActive";
    }
   
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light py-3 ">
        <div className="container">
          <a className="text-success brandLogo" href="#">
            <img
              style={{ height: "40px" }}
              src="https://tequre.com/wp-content/uploads/2020/04/t-web-logo.png"
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navItem?.map((v, i) => {
                return (
                  <li className="nav-item">
                    <a
                      className={"nav-link fontSize18 mx-3 fontBold  " + isNavActive(v?.title)}
                      onMouseEnter={() => handleNavClick(v?.title)}
                      onMouseLeave={() => handleNavClick(v?.title)}
                      style={{ cursor: "pointer" }}
                    >
                      {v?.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <button
              className="btn btn-success shadow my-auto "
              style={{ background: "#C0202E", borderRadius: "20px", border: "none" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
      <div>
        {/* Button to open the modal */}

        {/* Modal */}
        {showServiceModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ top: "60px" }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content servicePopup">
                <div className="modal-body navPopBg p-0 shadow" style={{ borderRadius: ".3rem" }}>
                  <div className="row m-0 p-0">
                    <div className="col-5 m-0 p-0">
                      {[1, 2, 3, 4]?.map((v, i) => {
                        return (
                          <div className="d-flex w-100">
                            <div className=" m-2 p-2 subMenuDiv w-100">
                              <h5>Product Engineering </h5>
                              <p>Building faster products MVP lunch & scale </p>
                            </div>
                            <div className="tringle"></div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="col-7 m-0 p-0 ">
                      <div className="serviceSubSubMenuMainDiv m-2 px-2 py-1  shadow-sm">
                        {[1, 2, 3, 4]?.map((v, i) => {
                          return (
                            <div className="d-flex align-items-center w-100 subSubMenuDiv">
                              <div className="">
                                <img src="https://cdn-icons-png.flaticon.com/128/12434/12434528.png" />
                              </div>
                              <div className=" m-2 p-2  w-100">
                                <h5>Product Engineering </h5>
                                <p>Building faster products MVP lunch & scale </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Overlay */}
            <div className="modal-backdrop  show" onClick={handleClose} style={{ background: "none" }}></div>
          </div>
        )}
        {showConsultingModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ top: "60px" }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content servicePopup">
                <div className="modal-body navPopBg p-0 shadow" style={{ borderRadius: ".3rem" }}>
                  <div className="container">
                    <div className="row m-0 p-0">
                      {consultingItem?.map((v, i) => {
                        return (
                          <div className="col-6 m-0 p-0">
                            <div
                              className="d-flex align-items-center bg-light m-2 px-2 py-0 subSubMenuDiv"
                              style={{ borderRadius: "12px" }}
                            >
                              <div className=" d-flex align-items-center    ">
                                <img src="https://cdn-icons-png.flaticon.com/128/12434/12434528.png" />
                              </div>
                              <div className=" m-2 p-2  w-100">
                                <h5>{v?.title}</h5>
                                <p>Building faster products MVP lunch & scale </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Overlay */}
            <div className="modal-backdrop  show" onClick={handleClose} style={{ background: "none" }}></div>
          </div>
        )}
        {showApplicationCLoudModule && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ top: "60px" }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content servicePopup">
                <div className="modal-body navPopBg p-0 shadow" style={{ borderRadius: ".3rem" }}>
                  <div className="container">
                    <div className="row m-0 p-0">
                      {applicationCLoudItem?.map((v, i) => {
                        return (
                          <div className="col-6 m-0 p-0">
                            <div
                              className="d-flex align-items-center bg-light m-2 px-2 py-0 subSubMenuDiv"
                              style={{ borderRadius: "12px" }}
                            >
                              <div className=" d-flex align-items-center    ">
                                <img src="https://cdn-icons-png.flaticon.com/128/12434/12434528.png" />
                              </div>
                              <div className=" m-2 p-2  w-100">
                                <h5>{v?.title}</h5>
                                <p>Building faster products MVP lunch & scale </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Overlay */}
            <div className="modal-backdrop  show" onClick={handleClose} style={{ background: "none" }}></div>
          </div>
        )}
        {showSolutionsModule && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ top: "60px" }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content servicePopup">
                <div className="modal-body navPopBg p-0 shadow" style={{ borderRadius: ".3rem" }}>
                  <div className="container">
                    <div className="row m-0 p-0">
                      {solutionNavItem?.map((v, i) => {
                        return (
                          <div className="col-6 m-0 p-0">
                            <div
                              className="d-flex align-items-center bg-light m-2 px-2 py-0 subSubMenuDiv"
                              style={{ borderRadius: "12px" }}
                            >
                              <div className=" d-flex align-items-center    ">
                                <img src="https://cdn-icons-png.flaticon.com/128/12434/12434528.png" />
                              </div>
                              <div className=" m-2 p-2  w-100">
                                <h5>{v?.title}</h5>
                                <p>Building faster products MVP lunch & scale </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Overlay */}
            <div className="modal-backdrop  show" onClick={handleClose} style={{ background: "none" }}></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
