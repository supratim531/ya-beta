import React from "react";
import { Container } from "../../components";
import { ServiceWireImage } from "../../assets";
import ServiceCards from "./ServiceCards";

const Service = (props) => {
  return (
    <Container>
      <article id="service" className="flex flex-col gap-6 py-16">
        <section className="flex flex-col-reverse justify-between gap-6 md:flex-row">
          <section className="flex w-full flex-col justify-center gap-y-2 font-poppins md:w-[60%]">
            <p className="font-medium uppercase text-primary">
              Salesforce Implementation
            </p>
            <h3 className="text-[24px] font-bold leading-8 md:text-[32px] md:leading-10">
              <span className="text-secondary-dark">
                {"Create A New Way To"}
              </span>
              <br />
              <span className="text-primary">
                {"Connect With Your Customers"}
              </span>
            </h3>
            <p>
              Stay organised and improve. Streamline sales, marketing, customer
              service, and other business operations of your enterprise. Let us
              help enhance the bottom line of your business with Salesforce.
            </p>
          </section>
          <section className="flex w-full justify-center md:w-[40%]">
            <img
              className="w-[90%] object-contain"
              src={ServiceWireImage}
              alt="hero-image"
            />
          </section>
        </section>
        <ServiceCards />
      </article>
    </Container>
  );
};

export default Service;
