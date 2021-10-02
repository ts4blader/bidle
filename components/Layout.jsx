import React from "react";
import Nav from "/components/Nav";
import Footer from "/components/Footer";
import Sponsors from "/components/Sponsors";
import SearchModal from "/components/SearchModal";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <SearchModal />
      <Nav />
      {children}
      <Sponsors />
      <Footer />
    </div>
  );
}
