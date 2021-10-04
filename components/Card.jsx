import React, { useMemo } from "react";
import Link from "next/link";
import Icon from "/components/Icon";
import Date from "/components/Date";
import { CATEGORIES } from "/data/Base";

export default function Card({ post }) {
  const category = useMemo(() => {
    const result = CATEGORIES.filter(
      (item) => item.name === post.fields.category
    );
    return result[0];
  }, []);

  const BG = useMemo(() => {
    const link = "https:" + post.fields.postImage.fields.file.url;
    return {
      backgroundImage: `url('${link}')`,
      backgroundSize: "cover",
    };
  }, []);

  return (
    <div className="card">
      <Link href={`/blogs/${post.fields.slug}`}>
        <a className="fullsize-link"></a>
      </Link>
      {/* Card Image */}
      <div className="card__image" style={BG}>
        <div className="label">
          <Icon src={category.icon} alt="" />
          <p>{category.name}</p>
        </div>
      </div>
      {/* End Card Image */}
      <div className="card__text">
        <div className="card__text__head">
          <Date dateString={post.fields.date} />
          <p>{post.fields.author}</p>
        </div>
        <h2>{post.fields.title}</h2>
      </div>
    </div>
  );
}
