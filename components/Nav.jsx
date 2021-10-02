import React from "react";
import Dropdown from "/components/Dropdown";
import Icon from "/components/Icon";
import { CATEGORIES } from "/data/Base";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__left">
        <Dropdown agent="categories" items={CATEGORIES} />
      </div>
      <div className="logo">
        <Icon src="logo.jpg" alt="logo" />
      </div>
      <div className="nav__right search-btn">
        <p className="hide-on-sm">Search</p>
        <Icon src="search-bold-stroke.png" alt="search-icon"></Icon>
      </div>
    </nav>
  );
}
