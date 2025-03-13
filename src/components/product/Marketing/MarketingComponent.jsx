import React, { useState } from "react";
import { works } from "../../../assets";
import styles from "./MarketingComponent.module.css";
import logo from "../../../assets/image/logo2.png";

const MarketingComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImg, setActiveImg] = useState(works.marketing[0].img);
  const [activeInfo, setActiveInfo] = useState({
    title: "Instagram Marketing",
    description:
      "doloribus neque excepturi perferendis aspernatur, commodi inventore",
    longDescription: "This is long description",
    logo: "https://yateam.vercel.app/static/media/im.f09b99d7e1997ffc9e61.png",
    img: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  });

  return (
    <div
      className="marketingContainer relative"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="600"
    >
      <div className="h-[80vh] w-full rounded-md shadow-md relative">
        <img src={activeInfo.img} alt="bg" className="h-full w-full rounded-md" />
        <div className="absolute top-0 left-0 flex flex-col items-start justify-top h-full w-full bg-black bg-opacity-50 rounded-md p-10">
          <h1 className="text-white text-[2rem]">{activeInfo.title}</h1>
          <p className="text-white">{activeInfo.description}</p>
          <p className="text-white">{activeInfo.longDescription}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-end gap-5 p-4">
        {works.marketing.map((panel, index) => (
          <div
            key={index}
            className={`bg-black/50  ${styles.card} ${activeIndex === index ? "border-2 border-white border-solid" : ""}`}
            style={{ backgroundImage: `url(${logo})` }}
            onClick={() => {
              setActiveIndex(index);
              setActiveInfo({ ...panel });
            }}
          >
            <div className={styles.overlay}>
              <h3>{panel.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingComponent;