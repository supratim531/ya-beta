import React from "react";
import CourseCards from "./CourseCards";
import { Container } from "../../components";
import { StudentGIF, OldLogoImage } from "../../assets";

const Course = (props) => {
  return (
    <Container>
      <article
        id="course"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        className="flex flex-col gap-6 py-16 md:py-0 md:pb-16"
      >
        <section className="flex flex-col md:flex-row">
          <section className="relative flex w-full flex-col justify-center gap-y-2 text-white md:w-[40%]">
            <div className="absolute left-0 top-0 pt-12">
              <img className="w-32" src={OldLogoImage} />
            </div>
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
            <img src={StudentGIF} />
          </section>
        </section>
        <CourseCards />
      </article>
    </Container>
  );
};

export default Course;
