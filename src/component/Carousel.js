import React, { useState } from "react";

function Carousel({ images }) {
  const [swipe, setSwipe] = useState({
    start: 0,
    end: 5,
  });

  const clickLeft = () => {
    if (swipe?.start === 0) {
      return;
    }
    setSwipe({
      start: swipe?.start - 1,
      end: swipe?.end - 1,
    });
  };

  const clickRight = () => {
    if (swipe?.end === images?.length) {
      return;
    }
    setSwipe({
      start: swipe?.start + 1,
      end: swipe?.end + 1,
    });
  };

  if (images?.length) {
    return (
      <div
        style={{
          display: "flex",
          //   background: "red",
          width: "100%",
          height: "150px",
          alignItems: "center",
          padding: "20px 0 20px 0",
        }}
      >
        {swipe?.start !== 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={clickLeft}
            style={{ height: "80px", color: "gray", cursor: "pointer" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(5, 1fr)",
            gridColumnGap: "60px",
            gridRowGap: "0px",
            padding: "0 60px 0 60px",
            height: "150px",
          }}
        >
          {/* contenir toutes les images */}
          {images?.slice(swipe?.start, swipe?.end).map((url, index) => (
            <img
              key={index}
              src={url}
              width="150px"
              height="150px"
              style={{
                userSelect: "none",
              }}
            />
          ))}
        </div>
        {swipe?.end !== images?.length && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={clickRight}
            style={{ height: "80px", color: "gray", cursor: "pointer" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </div>
    );
  } else {
    return null;
  }
}

export default Carousel;
