"use client";
import React, { useState, useEffect } from "react";

function Navbar() {
  const navItem = [
    {
      title: "Product",
      path: "/",
      href: "contact",
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
  const [activeSection, setActiveSection] = useState("home");

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.6 } // Adjust this value for sensitivity
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => {
  //     sections.forEach((section) => observer.unobserve(section));
  //   };
  // }, []);

  const handleScroll = (href) => {
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
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
                    className={
                      "nav-link fontSize18 mx-3 fontBold" +
                      (activeSection == v?.href && " navActive- ")
                    }
                    aria-current="page"
                    href={`#${v?.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(v.href);
                    }}
                  >
                    {v?.title}
                  </a>
                </li>
              );
            })}
           
          </ul>
          <button
              className="btn btn-success shadow my-auto "
              style={{background:"#C0202E", borderRadius:"20px", border:"none"}}
            >
                Contact Us
            </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
