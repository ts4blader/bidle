import React from "react";

export default function Loader({ show, first }) {
  return (
    <div className="loader" data-show={show} data-first={first}>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot delay-1"></div>
        <div className="dot delay-2"></div>
      </div>
      {first && (
        <div className="logo">
          <h6>bidle</h6>
          <p>a personal blog</p>
        </div>
      )}
    </div>
  );
}
