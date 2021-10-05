import React, { useState, useContext, useCallback } from "react";
import Icon from "/components/Icon";
import { StoreContext } from "/store/Store";
import ACTION from "/store/Action";
import Link from "next/link";

export default function ImageInput({ placeholder, image }) {
  const [state, dispatch] = useContext(StoreContext);

  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [filterData, setFilterData] = useState(state.posts);

  const handlerSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // check input
      if (!input) {
        setError(true);
        return;
      }
      //clear input
      setInput("");
      setError(false);
      dispatch({ type: ACTION.SET_FILTER_POSTS, payload: filterData });
      dispatch({ type: ACTION.SEARCH_MODAL_HIDE });
    },
    [filterData]
  );

  const handleChange = useCallback(
    (e) => {
      const searchWord = e.target.value;
      setInput(searchWord);

      const newData = state.filterPosts.filter((item) =>
        item.fields.title.toLowerCase().includes(searchWord.toLowerCase())
      );

      setFilterData(newData);
    },
    [filterData]
  );

  return (
    <div className="image-input">
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={handleChange}
          onFocus={() => setShowHints(true)}
          onBlur={() => setShowHints(false)}
        />
        <button type="submit">
          <Icon src={image} alt="" />
        </button>
      </form>
      {error && !input && <p className="error">Please put something in!</p>}
      {filterData.length != 0 && input && (
        <ul className="hints" data-show={showHints}>
          {filterData.map((item) => (
            <li key={item.fields.slug}>
              <Link href={"/blogs/" + item.fields.slug}>
                <a className="fullsize-link"></a>
              </Link>
              <p>{item.fields.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
