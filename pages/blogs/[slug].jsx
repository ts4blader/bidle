import React from "react";
import { getPostBySlug, getAllPost } from "/libs/ContentfulHelper";
import Intro from "/components/Intro";

export async function getStaticPaths() {
  const res = await getAllPost();
  const paths = res.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await getPostBySlug(params.slug);

  return {
    props: {
      post: res,
    },
  };
}

export default function Post({ post }) {
  console.log(post);
  return (
    <div className="post">
      <Intro post={post} />

      <main></main>
    </div>
  );
}
