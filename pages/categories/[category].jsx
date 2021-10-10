import React from "react";
import { CATEGORIES } from "/data/Base";
import { getPostByCategory, getAllPost } from "/libs/ContentfulHelper";
import Main from "/components/Main";
import Hero from "/components/Hero";
import MyHead from "/components/MyHead";

export function getStaticPaths() {
  const paths = CATEGORIES.map((item) => {
    return {
      params: {
        category: item.name.replace(" ", "-"),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      posts: await getPostByCategory(params.category.replace("-", " ")),
      allPosts: await getAllPost(),
      category: params.category.replace("-", " "),
    },
    revalidate: 5,
  };
}

export default function CategoryPage({ posts, allPosts, category }) {
  return (
    <section className="category">
      {/* Head */}
      <MyHead title={`${category.toUpperCase()} - Bidle - A Personal Blog`} />

      <Hero />
      <Main posts={posts} allPosts={allPosts} />
    </section>
  );
}
