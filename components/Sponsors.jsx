import React from "react";
import { SPONSORS } from "/data/Base";
import Image from "/components/Image";

export default function Sponsors() {
  return (
    <section className="sponsors-section">
      <p className="title">sponsors</p>
      <ul className="sponsors container">
        {SPONSORS.map((item) => (
          <li key={item.name}>
            <Image src={item.image} alt={item.name} />
          </li>
        ))}
      </ul>
    </section>
  );
}
