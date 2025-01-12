import React, { useEffect } from "react";
import classNames from "classnames";
import VanillaTilt from "vanilla-tilt";
import { Container } from "../../components";

import css from "./Project.module.css";

const Project = (props) => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card-3d"), {
      max: 25,
      perspective: 1000,
      // scale: 1.1,
      speed: 400,
      transition: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      reset: true,
    });
  }, []);

  return (
    <Container>
      <article
        id="work"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        className="flex flex-col justify-between gap-6 py-16"
      >
        <section className="w-full text-center text-white">
          <h1 className="font-poppins text-[24px] font-bold leading-8 md:text-[35px] md:leading-10">
            <span className="text-primary">Our Projects</span>
          </h1>
        </section>
        <section className="flex w-full flex-wrap items-center justify-center gap-6">
          <div
            data-tilt
            data-tilt-reverse="true"
            className={classNames(css.card, "card-3d")}
          >
            <div className={css.cardImage}></div>
            <div className={css.cardText}>
              <h2>Taj Mahal, India</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                ipsa rem? Vel, assumenda earum recusandae consequuntur itaque
                aperiam ad provident.
              </p>
              <span className={css.author}>Sanjay Khan</span>
            </div>
          </div>
          <div
            data-tilt
            data-tilt-reverse="true"
            className={classNames(css.card, "card-3d")}
          >
            <div className={classNames(css.cardImage)}></div>
            <div className={css.cardText}>
              <h2>Taj Mahal, India</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                ipsa rem? Vel, assumenda earum recusandae consequuntur itaque
                aperiam ad provident.
              </p>
              <span className={css.author}>Sanjay Khan</span>
            </div>
          </div>
          <div
            data-tilt
            data-tilt-reverse="true"
            className={classNames(css.card, "card-3d")}
          >
            <div className={classNames(css.cardImage)}></div>
            <div className={css.cardText}>
              <h2>Taj Mahal, India</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                ipsa rem? Vel, assumenda earum recusandae consequuntur itaque
                aperiam ad provident.
              </p>
              <span className={css.author}>Sanjay Khan</span>
            </div>
          </div>
        </section>
      </article>
    </Container>
  );
};

export default Project;
