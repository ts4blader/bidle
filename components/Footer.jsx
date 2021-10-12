import React, { useState } from "react";
import Link from "next/link";
import { BASE, CATEGORIES, SPONSORS, SOCIALS } from "/data/Base";
import Icon from "/components/Icon";
import Image from "/components/Image";

const Pillar = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pillar" data-open={open}>
      <p className="title" onClick={() => setOpen((prev) => !prev)}>
        {title}
      </p>
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

const Input = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="image-input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //check input
          if (!input) {
            setError("Please enter something!");
            return;
          }
          if (!validateEmail(input)) {
            setError("This is not a email address!");
            return;
          }
          alert("Thank for subscribe!");
          setInput("");
        }}
      >
        <input
          type="text"
          placeholder="Email here"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
        />
        <button type="submit">
          <Icon src="send.png" alt="send-icon" />
        </button>
      </form>
      {error.length != 0 && <p className="error">{error}</p>}
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
          <div id="subscribe-form">
            <Input />
          </div>
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
          <p>{`Design by ${BASE.creator}`}</p>
          <p>{`@copyright ${BASE.releaseYear}  ${BASE.domain}`}</p>
        </div>
        {/* EndFoot */}
      </div>
    </footer>
  );
}
