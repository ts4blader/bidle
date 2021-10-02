import React from "react";
import Nav from "/components/Nav";
import Footer from "/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
