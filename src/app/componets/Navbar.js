"use client"
import React, {useState, useEffect} from "react";

function Navbar() {
  const navItem = [
    {
      title: "Home",
      path: "/",
      href:'home'
    },
    {
      title: "About",
      path: "/",
      href:'about'
    },
    {
      title: "Services",
      path: "/",
      href:'services'
    },
    {
      title: "Pricing",
      path: "/",
      href:'pricing'
    },
    {
      title: "Contact",
      path: "/",
      href:'contact'
    }
  ];
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust this value for sensitivity
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  
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
          Turiyo
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItem?.map((v, i) => {
              return (
                <li className="nav-item">
                  <a className={"nav-link fontSize18 mx-3 fontBold" + (activeSection==v?.href && " navActive   ")} aria-current="page" href={`#${v?.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(v.href);
                  }}>
                   {v?.title}
                  </a>
                </li>
              );
            })}
            <button className='btn btn-success btn-sm my-auto ms-lg-5 ms-0' style={{borderRadius:"16px", padding:"6px"}}>Get Started</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
