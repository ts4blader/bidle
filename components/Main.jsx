import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "/components/Card";
import Aside from "/components/Aside";

const ITEM_PER_PAGE = 6;
const DEFAULT_PAGE = 1;

export default function Main({ posts, allPosts, count = false }) {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [data, setData] = useState([]);
  const main = useRef(null);

  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: main.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const PageChange = useCallback((page) => {
    setPage(page);
    scrollTop();
  }, []);

  useEffect(() => {
    let start = (page - 1) * 6;
    let end = page * 6;

    setData([...posts].slice(start, end));
  }, [page, posts]);

  return (
    <main className="main" ref={main}>
      {count && (
        <div className="count-result container">Found {posts.length} posts</div>
      )}

      <div className="container content">
        <ul className="cards">
          {data.map((item) => (
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
        <div className="paginate">
          <div
            className="prev"
            data-disabled={page === 1}
            onClick={() => PageChange(page - 1)}
          >
            prev
          </div>
          <ul>
            {[...Array(parseInt(posts.length / ITEM_PER_PAGE + 1)).keys()].map(
              (item) => {
                return (
                  <li
                    key={item}
                    data-active={item + 1 === page}
                    onClick={() => PageChange(item + 1)}
                  >
                    {item + 1}
                  </li>
                );
              }
            )}
          </ul>
          <div
            onClick={() => PageChange(page + 1)}
            className="next"
            data-disabled={page === parseInt(posts.length / ITEM_PER_PAGE) + 1}
          >
            next
          </div>
        </div>
      </div>
    </main>
  );
}
