import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

export const StoreContext = createContext({});

const INIT = {
  posts: [],
  filterPosts: [],
  searchModal: false,
  blogLength: 0,
  categorySearch: "all",
};

export default function Store({ children }) {
  const [state, dispatch] = useReducer(Reducer, INIT);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}
