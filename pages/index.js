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
  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    dispatch({ type: ACTION.SET_POSTS, payload: posts });
    dispatch({ type: ACTION.SET_FILTER_POSTS, payload: posts });
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <Main filter={state.filterPosts} posts={state.posts} />
    </div>
  );
}
