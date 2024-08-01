import React from "react";
import { StudentGIF } from "../../assets";
import { Container } from "../../components";
import CourseCards from "./CourseCards";

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
            <img src={StudentGIF} />
          </section>
        </section>
        <CourseCards />
      </article>
    </Container>
  );
};

export default Course;
