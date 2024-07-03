import React, { useState } from "react";
import "../App.css";

const NavLinks = () => {
  return (
    <>
      <li className="navbar-item">
        <a href="#">
          <span>Home</span>
        </a>
      </li>
      <li className="navbar-item">
        <a href="#">
          <span>Apply for New I-94</span>
        </a>
      </li>
      <li className="navbar-item">
        <a href="#">
          <span>Get Most Recent I-94</span>
        </a>
      </li>
      <li className="navbar-item">
        <a href="#">
          <span>View Travel History</span>
        </a>
      </li>
      <li className="navbar-item">
        <a href="#">
          <span>View Compliance</span>
        </a>
      </li>
      <li className="navbar-item">
        <a href="#">
          <span>Guam-CNMI Travel Info</span>
        </a>
      </li>
      <li className="navbar-item">
        <a href="#">
          <span>FAQ</span>
        </a>
      </li>
    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="navbar">
      <div className="container lg:w-full md:w-[760px] logo-row">
        <ul className="row">
          <li className="logo-i94 ">
            <a href="">
              <img
                className="logo-left"
                src="../public/logo-i94.png"
                alt=""
                srcset=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className="logo-right"
                src="../public/logo.png"
                alt=""
                srcset=""
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-row">
        <nav className=" container lg:w-full md:w-[760px] flex justify-between flex-wrap static">
          <div className="md:hidden flex items-center pl-2 py-2 w-1/2">
            <span className="text-white text-base font-bold">Menu</span>
          </div>
          <ul className="hidden md:flex md:flex-wrap items-center ">
            <NavLinks></NavLinks>
          </ul>
          <div className="md:hidden flex justify-end  w-1/2 pr-6">
            <button onClick={toggleNavbar}>
              <i
                className="fa fa-bars text-white text-[20px] "
                aria-hidden="true"
              ></i>
            </button>
          </div>
          <div className={`grid w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen?"grid-rows-[1fr] ":"grid-rows-[-0fr] "}`}>
              <div className={`overflow-hidden text-[1.25em] bg-[#1e3a5d] duration-300  ${isOpen? "border-solid border-t-[1px] pt-2": ""}`}>
                <NavLinks></NavLinks>
              </div>
            
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
