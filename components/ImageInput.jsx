import React from "react";
import Icon from "/components/Icon";

export default function ImageInput({ placeholder, image, alt }) {
  return (
    <div className="image-input">
      <form>
        <input type="text" placeholder={placeholder} />
        <button type="submit">
          <Icon src={image} alt={alt} />
        </button>
      </form>
    </div>
  );
}
