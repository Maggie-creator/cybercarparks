import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <img
              src={CyberCarparksLogo}
              alt="Cyber Carparks Logo"
              className="h-8"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold text-indigo-900">
              <a href="#home">Home</a>
            </li>
            <li className="font-bold text-indigo-900">
              <a href="#about">About</a>
            </li>
            <li className="font-bold text-indigo-900">
              <a href="#our-services">Our Services</a>
            </li>
            <li className="font-bold text-indigo-900">
              <a href="#features">Features</a>
            </li>
            <li className="font-bold text-indigo-900">
              <a href="#use-cases">Use Cases</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-primary text-white"
            style={{ marginRight: "20px" }}
            href="https://portal.spacegenie.com.au/register"
          >
            SIGN UP
          </a>
          <a
            className="btn btn-outline btn-primary"
            href="https://portal.spacegenie.com.au/signin"
          >
            SIGN IN
          </a>
        </div>
      </div>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="footer bg-neutral text-neutral-content pt-5 pb-5 pl-10">
        <aside>
          <img
            src={CyberCarparksLogo}
            alt="Cyber Carparks Logo"
            className="h-10"
          />
          <p>
            Cyber Carparkss.
            <br />
            All rights reserved 2024
          </p>
        </aside>
        <div className="navbar-center hidden lg:flex justify-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#our-services">Our Services</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#use-cases">Use Cases</a>
            </li>
          </ul>
        </div>
        <nav>
          <h6 className="footer-title">CONNECT WITH US</h6>
          <div className="grid grid-flow-col gap-5 justify-end">
            {/* Social Icons */}
            {/* Icons omitted for brevity */}
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Layout;
