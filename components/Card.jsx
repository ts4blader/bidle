import React, { useMemo } from "react";
import Image from "next/image";
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

  return (
    <div className="card">
      {/* Card Image */}
      <div className="card__image">
        <div className="label">
          <Icon src={category.icon} alt="" />
          <p>{category.name}</p>
        </div>
        <Image
          src={"https:" + post.fields.postImage.fields.file.url}
          alt={post.fields.postImage.fields.title}
          width={post.fields.postImage.fields.file.details.image.width}
          height={post.fields.postImage.fields.file.details.image.height}
        />
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
