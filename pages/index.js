import React from "react";
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
  console.log(posts);
  return (
    <div className="home-page">
      <Hero />
    </div>
  );
}
