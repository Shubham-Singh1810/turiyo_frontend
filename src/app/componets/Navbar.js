import React from "react";

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
    },
    {
      title: "Login",
      path: "/",
    },
  ];
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
                  <a className={"nav-link fontSize18 mx-3 fontBold" + (i==0 && " navActive   ")} aria-current="page" href={v?.href}>
                   {v?.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
