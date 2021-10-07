import React, { useState } from "react";
import Icon from "/components/Icon";
import Link from "next/link";

export default function Dropdown({ agent, items }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="dropdown"
      data-show={show}
      onMouseLeave={() => setShow(false)}
    >
      <div className="dropdown__agent" onClick={() => setShow((prev) => !prev)}>
        <p>{agent}</p>
        <Icon src="dropdown.png" alt="caret" />
      </div>
      <ul className="dropdown__items">
        <li>
          <Link href="/">all</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} onClick={() => setShow(false)}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
