import React, { useContext, useCallback } from "react";
import Dropdown from "/components/Dropdown";
import Icon from "/components/Icon";
import Link from "next/link";
import { CATEGORIES } from "/data/Base";
import { StoreContext } from "/store/Store";
import ACTION from "/store/Action";

export default function Nav() {
  const [state, dispatch] = useContext(StoreContext);

  const clickHandler = useCallback((e) => {
    dispatch({ type: ACTION.SEARCH_MODAL_SHOW });
  }, []);

  return (
    <nav className="nav">
      <div className="nav__left">
        <Dropdown agent="categories" items={CATEGORIES} />
      </div>
      <div className="logo">
        <Link href="/">
          <a>
            <Icon src="logo.jpg" alt="logo" />
          </a>
        </Link>
      </div>
      <div className="nav__right search-btn" onClick={clickHandler}>
        <p className="hide-on-sm">Search</p>
        <Icon src="search-bold-stroke.png" alt="search-icon"></Icon>
      </div>
    </nav>
  );
}
