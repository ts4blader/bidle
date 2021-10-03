import React, { useState } from "react";
import Icon from "/components/Icon";

export default function ImageInput({ placeholder, image, alt }) {
  const [input, setInput] = useState("");

  function handlerSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <div className="image-input">
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <Icon src={image} alt={alt} />
        </button>
      </form>
    </div>
  );
}
