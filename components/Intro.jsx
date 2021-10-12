import React from "react";
import Date from "/components/Date";
import Icon from "/components/Icon";

export default function Intro({ post }) {
  const { date, author, title, authorEmail } = post.fields;

  return (
    <div className="intro">
      {/* BG left */}
      <div className="intro__left hide-on-sm">Bi</div>
      {/* BG right */}
      <div className="intro__right">
        <div className="intro__content">
          <div className="intro__content__head">
            <Date dateString={date} />
            <div className="author-name">{author}</div>
          </div>
          <h2>{title}</h2>
        </div>
        {/* Author section */}
        <div className="intro__author">
          <a href={`mailto:${authorEmail}`}>contact author</a>
          <div className="divider"></div>
          <Icon src="like.png" alt="like" />
        </div>
      </div>
    </div>
  );
}
