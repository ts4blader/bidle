import React from "react";
import Link from "next/link";
import { BASE, CATEGORIES, SPONSORS, SOCIALS } from "/data/Base";
import ImageInput from "/components/ImageInput";
import Image from "/components/Image";

const Pillar = ({ title, items }) => {
  return (
    <div className="pillar">
      <p className="title">{title}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Head */}
        <div className="footer__head">
          <div className="logo">{BASE.name}</div>
          <ImageInput placeholder="Email here" image="send.png" alt="send" />
        </div>
        {/* End Head */}
        {/* Body */}
        <div className="footer__body">
          <div className="pillars">
            <Pillar title="categories" items={CATEGORIES} />
            <Pillar title="sponsors" items={SPONSORS} />
            <Pillar title="socials" items={SOCIALS} />
          </div>
          <div className="like-fb">
            <a href="" target="_blank">
              <Image src="likefb.jpg" alt="like-fb" />
            </a>
          </div>
        </div>
        {/* End Body */}
        {/* Foot */}
        <div className="footer__foot">
          <p>{`@copyright ${BASE.releaseYear}  ${BASE.domain}`}</p>
          <p>{`Design by ${BASE.creator}`}</p>
        </div>
        {/* EndFoot */}
      </div>
    </footer>
  );
}
