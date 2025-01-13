import {
  Hero,
  Service,
  Work,
  Project,
  Course,
  About,
  Testimonial,
} from "../../components";

const HomePage = (props) => {
  return (
    <main>
      <div className="bg-black">
        <Hero />
      </div>

      <div className="bg-white">
        <Service />
      </div>

      <div className="bg-black">
        <Work />
      </div>

      <div className="bg-[#ff0055]">
        <Course />
      </div>

      <div className="bg-white">
        <Project />
      </div>

      <div className="bg-black">
        <About />
      </div>

      <div className="bg-white">
        <Testimonial />
      </div>
    </main>
  );
};

export default HomePage;
