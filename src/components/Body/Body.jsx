import React from "react";
import { useState } from "react";
import cn from "classnames";
import "./Body.css";
// import { ReactComponent as Next } from "./assets/chevronDown.svg";
// import { ReactComponent as Prev } from "../../assets/chevronUp.svg";

function Body({ data, leadingText }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 200;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > data.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return data.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <>
      <div className="offering">
        <div className="offeringHeader">
          <div>Meet Ctruh, the Most Intuitive</div>
          <div>
            <span>3D Editor</span> Around
          </div>
        </div>
        <div className="offeringBody">
          <div className="offeringBodyLeft">
            <button
              type="button"
              className="carousel-button prev"
              onClick={() => handleClick("prev")}
            >
              <img src="./chevronUp.svg" alt="" />
            </button>

            <div className="slides">
              <div className="carousel-inner">
                {data.map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={cn("carousel-item", {
                      active: activeIndex === i,
                      visible:
                        Math.abs(determinePlacement(i)) <=
                        visibleStyleThreshold,
                    })}
                    key={item.id}
                    style={{
                      transform: `translateY(${determinePlacement(i)}px)`,
                    }}
                  >
                    <h1>{item.introline}</h1>
                    <p>{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>
            {/* <ul>
              <li>Template Library</li>
              <li>Spatial Audio</li>
              <li>Lighting & Backgrounds</li>
              <li>Custom Viewpoints</li>
              <li>3rd-Party Integrations</li>
              <li>VR/AR on the Web</li>
              <li>AI Creative Tools</li>
              <li>Interactive Metaverse</li>
            </ul> */}

            <button
              type="button"
              className="carousel-button next"
              onClick={() => handleClick("next")}
            >
              <img src="./chevronDown.svg" alt="" />
            </button>
          </div>
          <div className="offeringBodyRight">
            <div className="number">
              <img src={data[activeIndex].content.image} alt="" />
            </div>
            <div className="contentBody">
              <div className="contentInner">
                <video
                  width={"85%"}
                  autoPlay
                  loop
                  muted
                  src={data[activeIndex].content.video}
                  alt={data[activeIndex].content.introline}
                />

                {/* <h1>Template Library</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                  officiis ducimus. Architecto, iure voluptatum minus unde quasi
                  provident amet facere illo ut maiores, ad delectus nam
                  suscipit nulla eligendi ab.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                  officiis ducimus. Architecto, iure voluptatum minus unde quasi
                  provident amet facere illo ut maiores, ad delectus nam
                  suscipit nulla eligendi ab.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
