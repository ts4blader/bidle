import React, { useState } from "react";
import BadgeGroup from "/components/BadgeGroup";
import ImageInput from "/components/ImageInput";
import { CATEGORIES } from "/data/Base";

export default function SearchModal({ children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="modal" data-show={show}>
      <div className="overlay" onClick={() => setShow(false)}></div>
      {/* Search Modal */}
      <div className="search-modal">
        <div className="search-modal__head">
          <p>Search</p>
          <div className="close-btn" onClick={() => setShow(false)}>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="search-modal__content">
          <ImageInput
            placeholder="Post name"
            image="search-bold-stroke.png"
            alt="search"
          />
          {/* Badge Group */}
          <BadgeGroup items={CATEGORIES} />
          {/* End Badge Group */}
        </div>
      </div>
      {/* End Search Modal */}
    </div>
  );
}
