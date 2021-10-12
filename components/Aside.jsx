import React, { useEffect } from "react";
import Image from "/components/Image";
import Card from "/components/Card";
import { getPostByDate } from "/libs/ContentfulHelper";

export default function Aside({ posts }) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    //* Sort posts by date
    setData(getPostByDate(posts));
  }, [posts]);

  return (
    <div className="aside hide-on-md">
      <p className="title">Recently Posts</p>
      {/* Generated cards */}
      {data.map((item) => (
        <Card key={item.fields.slug} post={item} />
      ))}
      {/* End Generated cards */}
      <a href="#subscribe-form">
        <Image src="subscribe.jpg" alt="Subscribe" />
      </a>
    </div>
  );
}
