import React from "react";
import Icon from "/components/Icon";
import { SOCIALS } from "/data/Base";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Elements */}

      <div className="hero-section__bg">
        <div className="bg-left"></div>
        <div className="bg-right" style={{}}></div>
      </div>

      {/* End Background Elements */}

      <div className="container">
        <div className="hero-section__top">
          {/* Social Links */}
          <ul className="hero__top__social">
            {SOCIALS.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
                  <Icon src={item.icon} alt={item.name} />
                </a>
              </li>
            ))}
          </ul>
          {/* End Social Links */}
          {/* Portfolio */}
          <a
            target="blank"
            href="https://ts4blader.github.io/my-new-portfolio"
            className="portfolio"
          >
            <p>my portfolio</p>
          </a>
          {/* End Portfolio */}
        </div>
        {/* Hero section content */}
        <div className="hero-section__middle">
          <div className="hero-section__middle__content">
            <p className="intro-personal">a personal blog</p>
            <h1>bidle</h1>
            <div className="description">
              <p>I am FE Developer</p>
              <p>& Web Designer</p>
            </div>
          </div>
        </div>
        {/* End Hero section content */}
      </div>
    </section>
  );
}
