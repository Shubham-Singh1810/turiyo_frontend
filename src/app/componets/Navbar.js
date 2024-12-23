"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
function Navbar({selectedItem}) {
  
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
      title: "Application Cloud",
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
      setShowSolutionModule(false);
      setShowApplicationCLoudModule(false);
      setShowConsultingModal(false);
    }
    if (navItem == "Consulting") {
      setShowConsultingModal(true);
      setshowServiceModal(false);
      setShowSolutionModule(false);
      setShowApplicationCLoudModule(false);
    }
    if (navItem == "Application Cloud") {
      setShowApplicationCLoudModule(true);
      setShowConsultingModal(false);
      setshowServiceModal(false);
      setShowSolutionModule(false);
    }
    if (navItem == "Solutions") {
      setShowSolutionModule(true);
      setShowConsultingModal(false);
      setshowServiceModal(false);

      setShowApplicationCLoudModule(false);
    }
  };
  const serviceNavItem = [
    {
      title: "Product Engineering ",
      subTitle: "",
      img: "",
    },
    {
      title: "Platform Engineering",
      subTitle: "",
      img: "",
    },
    {
      title: "Application Modernization",
      subTitle: "",
      img: "",
    },
    {
      title: "Cloud Computing",
      subTitle: "",
      img: "",
    },
  ];
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
    if (name == "Application Cloud" && showApplicationCLoudModule) {
      return "navActive";
    }
    if (name == "Solutions" && showSolutionsModule) {
      return "navActive";
    }
  };
  // const router = useRouter();
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light py-3 ">
        <div className="container">
          <Link className="text-success brandLogo" href="/">
            <img
              style={{ height: "40px" }}
              src="https://tequre.com/wp-content/uploads/2020/04/t-web-logo.png"
              className="img-fluid"
            />
          </Link>
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
                    <Link 
                    href={v?.title=="AI Cloud" ? "/ai-cloud" : "#"}
                      className={"nav-link fontSize18 mx-3 fontBold  " + isNavActive(v?.title) + (selectedItem==v?.title && " navActive")}
                      onMouseEnter={() => handleNavClick(v?.title)}
                      onMouseLeave={() => handleNavClick(v?.title)}
                      style={{ cursor: "pointer" }}
                      
                    >
                      {v?.title}
                    </Link>
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
                      {serviceNavItem?.map((v, i) => {
                        return (
                          <div className="d-flex w-100">
                            <div className=" m-2 p-2 subMenuDiv w-100">
                              <h5>{v?.title}</h5>
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
