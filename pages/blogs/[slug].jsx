import React, { useState, useEffect, useMemo } from "react";
import { getPostBySlug, getAllPost } from "/libs/ContentfulHelper";
import Intro from "/components/Intro";
import Aside from "/components/Aside";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export async function getStaticPaths() {
  const res = await getAllPost();
  const paths = res.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await getPostBySlug(params.slug);
  const all = await getAllPost();
  return {
    props: {
      post: res,
      allPosts: all,
    },
  };
}

export default function Post({ post, allPosts }) {
  const { postImage, content } = post.fields;

  const [headings, setHeadings] = useState([]);

  //* Render options for rich text renderer
  const renderOptions = useMemo(() => {
    return {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
          // render the EMBEDDED_ASSET as you need
          return (
            <div className="figure">
              <Image
                src={`https://${node.data.target.fields.file.url}`}
                height={node.data.target.fields.file.details.image.height}
                width={node.data.target.fields.file.details.image.width}
                alt={node.data.target.fields.title}
              />
              <div className="title">{node.data.target.fields.title}</div>
            </div>
          );
        },
        [BLOCKS.HEADING_3]: (node) => {
          let heading = String(node.content[0].value);
          let id = heading.toLowerCase().split(" ").join("-");

          return <h3 id={id}>{heading}</h3>;
        },
      },
    };
  }, []);

  //* Filter heading from content
  useEffect(() => {
    let postHeadings = post.fields.content.content.filter(
      (item) => item.nodeType === "heading-3"
    );

    setHeadings(postHeadings);
  }, [post]);
  return (
    <div className="post">
      <Intro post={post} />

      <main>
        <div className="container">
          <div className="post__content">
            <div className="post__thumbnail">
              <Image
                width={postImage.fields.file.details.image.width}
                height={postImage.fields.file.details.image.height}
                src={"https:" + postImage.fields.file.url}
                alt="Thumbnail"
              />
            </div>
            <div className="toc">
              <p>Table of Contents</p>
              <ol>
                {headings.map((item, index) => {
                  let heading = item.content[0].value;
                  return (
                    <li key={index + "-headings"}>
                      <a
                        href={`#${heading.toLowerCase().split(" ").join("-")}`}
                      >
                        {heading}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="content">
              {documentToReactComponents(content, renderOptions)}
            </div>
          </div>
          {/* Aside */}
          <Aside posts={allPosts} />
        </div>
      </main>
    </div>
  );
}
