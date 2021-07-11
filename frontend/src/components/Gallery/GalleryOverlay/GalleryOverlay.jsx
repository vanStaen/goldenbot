import React, { useEffect, useCallback, useRef } from "react";
import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";

import "./GalleryOverlay.css";

export const GalleryOverlay = (props) => {
  const throttling = useRef(false);

  const incrementSelected = () => {
    props.setSelected(props.selected + 1);
  };

  const decrementSelected = () => {
    if (props.selected > 0) {
      props.setSelected(props.selected - 1);
    }
  };

  const mouseHoverHandler = (hover) => {
    const closeButton = document.getElementById(`closeButton`);
    if (hover) {
      closeButton.style.visibility = "hidden";
      closeButton.style.opacity = 0;
    } else {
      closeButton.style.visibility = "visible";
      closeButton.style.opacity = 1;
    }
  };

  const keyDownHandler = useCallback(
    (event) => {
      event.preventDefault();
      const keyPressed = event.key.toLowerCase();
      const nextButton = document.getElementById(`nextButton`);
      const previousButton = document.getElementById(`previousButton`);
      if (throttling.current === false) {
        throttling.current = true;
        if (keyPressed === "arrowdown" || keyPressed === "arrowright") {
          nextButton.style.backgroundColor = "rgba(255,255,255,.15)";
          incrementSelected();
          setTimeout(() => {
            nextButton.style.backgroundColor = "rgba(255,255,255, 0)";
          }, 100);
        } else if (keyPressed === "arrowup" || keyPressed === "arrowleft") {
          previousButton.style.backgroundColor = "rgba(255,255,255,.15)";
          decrementSelected();
          setTimeout(() => {
            previousButton.style.backgroundColor = "rgba(255,255,255, 0)";
          }, 100);
        } else if (keyPressed === "escape") {
          props.setShowOverlay(false);
        }
        setTimeout(() => {
          throttling.current = false;
        }, 100);
      }
    },
    [incrementSelected, decrementSelected, props.setShowOverlay]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  return (
    <div className="overlay__overlay">
      <div
        className="overlay__background"
        onClick={() => {
          props.setShowOverlay(false);
        }}
      ></div>
      <div
        className="overlay__columnLeft"
        id="previousButton"
        onClick={decrementSelected}
      >
        <LeftOutlined />
      </div>
      <div
        className="overlay__columnRight"
        id="nextButton"
        onMouseEnter={() => mouseHoverHandler(true)}
        onMouseLeave={() => mouseHoverHandler(false)}
        onClick={incrementSelected}
      >
        <RightOutlined />
      </div>
      <div
        className="overlay__closeButton"
        id="closeButton"
        onClick={() => {
          props.setShowOverlay(false);
        }}
      >
        <CloseOutlined />
      </div>
      <div className="overlay__pictureContainer">
        <div className="overlay__pictureHover">TEST</div>
        <img
          className="overlay__picture"
          src={props.images[props.selected].file_s3}
          alt={props.selected}
        />
      </div>
    </div>
  );
};
