import React from "react";
import { BrandLogo } from "../../assets";
import { Container } from "../../components";

const Footer = (props) => {
  return (
    <footer className="bg-black">
      <Container>
        <article className="py-8 sm:py-16">
          <section>
            <img className="w-16" src={BrandLogo} />
          </section>
          <div className="my-10 h-[1px] w-full bg-secondary-light bg-opacity-50"></div>
          <section className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-gray-400">
              <div className="text-center sm:text-start">
                Copyright &copy; 2024 YA. All Rights Reserved.
              </div>
            </div>
            <ul className="flex items-center gap-8 text-white">
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
            </ul>
          </section>
        </article>
      </Container>
    </footer>
  );
};

export default Footer;
