import React, { useEffect, useState } from "react";
import Image from "/components/Image";
import Card from "/components/Card";
import { getPostByDate } from "/libs/ContentfulHelper";

export default function Aside({ posts }) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    setData(getPostByDate(posts));
  }, [posts]);

  return (
    <div className="aside">
      <p className="title">Recently Posts</p>
      {data.map((item) => (
        <Card key={item.fields.slug} post={item} />
      ))}
      <a href="#subscribe-form">
        <Image src="subscribe.jpg" alt="Subscribe" />
      </a>
    </div>
  );
}
