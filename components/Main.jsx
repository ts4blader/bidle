import React from "react";
import Card from "/components/Card";
import Image from "/components/Image";
import { getPostByDate } from "/libs/ContentfulHelper";

export default function Main({ posts }) {
  return (
    <main className="main">
      <div className="container content">
        <div className="cards">
          {posts.map((item) => (
            <Card key={item.fields.slug} post={item} />
          ))}
        </div>
        <div className="aside">
          <p className="title">Recently Posts</p>
          {getPostByDate(posts).map((item) => (
            <Card key={item.fields.slug} post={item} />
          ))}
          <a href="#subscribe-form">
            <Image src="subscribe.jpg" alt="Subscribe" />
          </a>
        </div>
      </div>
      <div className="container">
        <div className="paginate"></div>
      </div>
    </main>
  );
}
