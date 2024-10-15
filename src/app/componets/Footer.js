"use client";
import React from "react";

function Footer() {
  const quickLinks = [
    {
      name: "Home",
      link: "/",
      href: "home",
    },
    {
      name: "About Us",
      link: "/about-us",
      href: "about",
    },
    {
      name: "Services",
      link: "/about-us",
      href: "services",
    },
    {
      name: "Pricing",
      link: "/about-us",
      href: "pricing",
    },
  ];
  const handleScroll = (href) => {
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-light marginNavTop">
      <div className="container">
        <div className="row d-flex justify-content-between py-5">
          <div className="col-lg-3">
            <div className="mx-3">
              <div className="">
                <h1 className="brandLogo ">
                  {" "}
                  <img
                    style={{ height: "100px" }}
                    src="https://res.cloudinary.com/dglkjvsk4/image/upload/v1728985558/WhatsApp_Image_2024-10-15_at_15.13.14_nif5cr.jpg"
                    className="img-fluid"
                  />
                </h1>
                <p>
                  Boost your product and service's credibility by adding
                  testimonials from your clients. People love recommendations so
                  feedback from others who've tried it is invaluable.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="mx-3">
              <h3 className="mb-3">Contact Us</h3>
              <div>
                <div className="mb-1 d-flex">
                  {" "}
                  <i className="fa fa-address-card mt-1 me-2"></i>
                  <span>
                    CA 191, CA Block, Sector 1, Saltlake, Kolkata, West Bengal
                    700064
                  </span>
                </div>
                <div className="mb-1">
                  <a
                    className="text-dark text-decoration-none"
                    href="tel:+91 1800 890 4788"
                  >
                    {" "}
                    <i className="fa fa-phone me-2"></i>1800 890 4788
                  </a>
                </div>
                <div className="mb-1">
                  <a
                    className="text-dark text-decoration-none"
                    href="https://wa.me/9534404400"
                    target="_blank"
                  >
                    <i className="fa me-2 fa-whatsapp"></i>+91 9907591478
                  </a>
                </div>
                <div className="mb-1">
                  <a
                    className="text-dark text-decoration-none"
                    href="mailto:contact@overseas.ai"
                  >
                    {" "}
                    <i className="fa fa-envelope me-2"></i> contact@overseas.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mx-3">
              <div className=" rounded">
                <h3 className="mb-3">Quick Links</h3>
                <div className="row m-0 p-0">
                  {quickLinks?.map((v, i) => {
                    return (
                      <p
                        className="mb-0 p-0 col-6"
                        style={{ cursor: "pointer" }}
                      >
                        <a
                          aria-current="page"
                          href={`#${v?.href}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleScroll(v.href);
                          }}
                          style={{textDecoration:"none", color:"black"}}
                        >
                          {v?.name}
                        </a>
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        style={{
          fontSize: "18px",
          background: "linear-gradient(to right, #07BA9A, black)",
        }}
        className="py-3 px-2 mb-0 text-center text-light"
      >
        <b> ©2024 Turiyo. All Rights Reserved</b>
      </p>
    </div>
  );
}

export default Footer;
