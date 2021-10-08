import React from "react";
import Date from "/components/Date";
import Icon from "/components/Icon";

export default function Intro({ post }) {
  return (
    <div className="intro">
      <div className="intro__left">Bi</div>
      <div className="intro__right">
        <div className="intro__content">
          <div className="intro__content__head">
            <Date dateString={post.fields.date} />
            <div className="author-name">{post.fields.author}</div>
          </div>
          <h2>{post.fields.title}</h2>
        </div>
        <div className="intro__author">
          <a href={`mailto:${post.fields.authorEmail}`}>contact author</a>
          <div className="divider"></div>
          <Icon src="like.png" alt="like" />
        </div>
      </div>
    </div>
  );
}
