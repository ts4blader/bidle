import React from "react";
import Link from "next/link";
import Hero from "/components/Hero";
import MyHead from "/components/MyHead";
import Icon from "/components/Icon";

export default function NotFound() {
  return (
    <>
      <MyHead title="Not Found Page - Bidle" />
      <Hero />

      <main className="not-found-page">
        <div className="container">
          <h2>404 NotFound</h2>
          <p>Opps this page is unavailable!</p>
          <div className="btn">
            <Link href="/">
              <a>
                <Icon src="dropdown.png" alt="back" />
                Go back home
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
