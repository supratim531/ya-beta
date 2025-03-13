import React from "react";
import {
  Container,
  TeamMobileSwiper,
  TeamDesktopSwiper,
} from "../../components";

const About = () => {
  return (
    <Container>
      <article
        id="about"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        className="flex flex-col justify-between gap-y-10 py-16 md:flex-row md:gap-y-0"
      >
        <section className="flex w-full flex-col justify-center gap-y-2 text-white md:w-[30%]">
          <p className="font-poppins text-base uppercase text-primary">
            Our Team
          </p>
          <h3 className="font-poppins text-[24px] font-bold leading-8 md:text-[32px] md:leading-10">
            {"Certified Team Of Experts "}
            <span className="text-primary">To Assist You</span>
          </h3>
          <button className="mb-2 flex w-[50%] items-center justify-center space-x-2   rounded-md bg-white/25 p-2 font-semibold">
            <span>
              <i className="fa-brands fa-whatsapp text-xl text-green-600"></i>
            </span>
            <span>Chat</span>
          </button>
        </section>
        <section className="w-full md:w-[70%]">
          <TeamMobileSwiper />
          <TeamDesktopSwiper />
        </section>
      </article>
    </Container>
  );
};

export default About;
