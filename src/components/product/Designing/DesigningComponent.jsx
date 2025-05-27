import React, { useState } from "react";
import { works } from "../../../assets";
import "./DesigningComponent.css";

const DesigningComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="designContainer" data-aos="fade-up"
    data-aos-delay="100"
    data-aos-duration="600">
      {works.designing.map((panel, index) => (
        <div
          key={index}
          className={`panel ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)` }}
          onClick={() => setActiveIndex(index)}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default DesigningComponent;
