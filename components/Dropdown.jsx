import React, { useState, useCallback } from "react";
import Icon from "/components/Icon";
import Link from "next/link";

export default function Dropdown({ agent, items }) {
  const [show, setShow] = useState(false);

  const clickHandler = useCallback((e) => {
    setShow((prev) => !prev);
  }, []);

  const mouseLeaveHandler = useCallback((e) => {
    setShow(false);
  }, []);

  return (
    <div className="dropdown" data-show={show} onMouseLeave={mouseLeaveHandler}>
      <div className="dropdown__agent" onClick={clickHandler}>
        <p>{agent}</p>
        <Icon src="dropdown.png" alt="caret" />
      </div>
      <ul className="dropdown__items">
        <li>
          <Link href="/blogs/">all</Link>
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
