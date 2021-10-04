import React, { useContext, useEffect } from "react";
import Hero from "/components/Hero";
import Main from "/components/Main";
import { StoreContext } from "/store/Store";
import ACTION from "/store/Action";
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

  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    dispatch({ type: ACTION.SET_POSTS, payload: posts });
  }, [posts]);

  return (
    <div className="home-page">
      <Hero />
      <Main posts={state.posts} />
    </div>
  );
}
