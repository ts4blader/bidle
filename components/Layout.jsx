import React, { useCallback } from "react";
import Nav from "/components/Nav";
import Icon from "/components/Icon";
import Footer from "/components/Footer";
import SearchModal from "/components/SearchModal";
import Loader from "/components/Loader";

export default function Layout({ children }) {
  const handleScroll = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="wrapper">
      <Loader />
      <SearchModal />
      <Nav />
      {children}
      <Footer />

      <div className="on-top-btn" onClick={handleScroll}>
        <Icon src="dropdown.png" alt="on-top" />
      </div>
    </div>
  );
}
