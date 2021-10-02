import React from "react";
import Nav from "/components/Nav";
import Hero from "/components/Hero";
import { getAllPost } from "/libs/ContentfulHelper";

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPost(),
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="home-page">
      <Hero />
      <Nav />
    </div>
  );
}
