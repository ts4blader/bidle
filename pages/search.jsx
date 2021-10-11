import React, { useContext } from "react";
import Hero from "/components/Hero";
import Main from "/components/Main";
import Sponsors from "/components/Sponsors";
import MyHead from "/components/MyHead";
import { StoreContext } from "/store/Store";

export default function Search() {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <div className="search-page">
      {/* Head */}
      <MyHead title="Search Result - Bidle" />
      {/* End Head */}

      <Hero />
      <Main posts={state.filterPosts} allPosts={state.posts} count={true} />
      <Sponsors />
    </div>
  );
}
