import React, { useState, useCallback } from "react";
import Icon from "/components/Icon";
import Link from "next/link";

export default function Dropdown({ agent, items }) {
  const [show, setShow] = useState(false);

  return (
    <div className="dropdown" data-show={show}>
      <div className="dropdown__agent" onClick={() => setShow(false)}>
        <p>{agent}</p>
        <Icon src="dropdown.png" alt="caret" />
        <input
          type="text"
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
      </div>
      <ul className="dropdown__items">
        <li>
          <Link href="/">all</Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
