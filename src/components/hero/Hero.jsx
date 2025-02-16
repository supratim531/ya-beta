import React from "react";
import { HeroImage } from "../../assets";
import { Container, FlipCard } from "../../components";

const Hero = (props) => {
  return (
    <Container>
      <article
        id="hero"
        className="flex flex-col justify-between gap-6 py-16 md:flex-row"
      >
        <section className="flex w-full flex-col justify-center gap-y-2 text-white md:w-[40%]">
          <h1 className="font-poppins text-[24px] font-bold leading-8 md:text-[35px] md:leading-10">
            {"Experience the Next Level "}
            <span className="text-primary">Business Efficiency</span>
          </h1>
          <h2 className="font-poppins text-[16px] opacity-90 md:text-[18px]">
            Choose India's best enterprise solution provider to help your
            business grow.
          </h2>
        </section>
        <section className="flex w-full justify-center md:w-[60%]">
          {/* <img src={HeroImage} alt="hero-image" /> */}
          <FlipCard />
        </section>
      </article>
    </Container>
  );
};

export default Hero;
