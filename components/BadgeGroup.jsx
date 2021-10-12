import React, { useMemo, useContext } from "react";
import { StoreContext } from "/store/Store";
import ACTION from "/store/Action";

//* Single Badge
const Badge = ({ active = false, text }) => {
  return (
    <div className="badge" data-active={active}>
      {text}
    </div>
  );
};

export default function BadgeGroup({ items }) {
  const [state, dispatch] = useContext(StoreContext);

  const ITEMS = useMemo(() => {
    const temp = items.map((item) => item.name);
    //* add all to categories
    return ["all", ...temp];
  }, [items]);

  return (
    <ul className="badge-grp">
      {ITEMS.map((item, index) => (
        <li
          key={index}
          onClick={() =>
            dispatch({ type: ACTION.SET_CATEGORY_SEARCH, payload: item })
          }
        >
          <Badge text={item} active={item == state.categorySearch} />
        </li>
      ))}
    </ul>
  );
}
