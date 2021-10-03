import React from "react";
import Card from "/components/Card";

export default function Main({ posts }) {
  return (
    <main className="main">
      <div className="container">
        <div className="cards">
          {posts.map((item) => (
            <Card key={item.fields.slug} post={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
