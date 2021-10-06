import React from "react";
import Card from "/components/Card";
import Aside from "/components/Aside";

export default function Main({ posts, allPosts }) {
  return (
    <main className="main">
      <div className="container content">
        <ul className="cards">
          {posts.map((item) => (
            <li key={item.fields.slug}>
              <Card post={item} />
            </li>
          ))}
        </ul>
        {/* Aside */}
        <Aside posts={allPosts} />
        {/* End Aside */}
      </div>
      <div className="container">
        <div className="paginate"></div>
      </div>
    </main>
  );
}
