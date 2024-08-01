import React from "react";
import { BrandLogo } from "../../assets";

const Navbar = (props) => {
  const { toggleSidebar } = props;

  return (
    <nav className="flex items-center justify-between py-6">
      <section>
        <img className="w-10" src={BrandLogo} alt="brand-logo" />
      </section>
      <section>
        <ul className="hidden gap-x-8 text-lg text-white md:flex">
          {/* <li>
            <a href="#">Home</a>
          </li> */}
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#course">Course</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <button onClick={toggleSidebar} className="block md:hidden">
          <i className="fa-solid fa-bars text-4xl text-white"></i>
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
