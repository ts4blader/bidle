import React, { useState, useContext, useCallback } from "react";
import Icon from "/components/Icon";
import { StoreContext } from "/store/Store";
import ACTION from "/store/Action";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ImageInput({ placeholder, image }) {
  const [state, dispatch] = useContext(StoreContext);
  const router = useRouter();

  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [filterData, setFilterData] = useState([]);

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

      let result = [...filterData];
      //* category search check
      if (state.categorySearch == "all")
        dispatch({ type: ACTION.SET_FILTER_POSTS, payload: result });
      else
        dispatch({
          type: ACTION.SET_FILTER_POSTS,
          payload: result.filter(
            (item) => item.fields.category == state.categorySearch
          ),
        });
      //* hide modal
      dispatch({ type: ACTION.SEARCH_MODAL_HIDE });

      // //* set filter data to default

      router.push("/search");
    },

    [filterData]
  );

  const handleChange = useCallback(
    (e) => {
      let searchWord = e.target.value;
      setInput(searchWord);

      let newData = [...state.posts];

      newData = newData.filter((item) =>
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
