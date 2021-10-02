import ACTION from "./Action";

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SEARCH_MODAL_SHOW:
      return { ...state, searchModal: true };
    case ACTION.SEARCH_MODAL_HIDE:
      return { ...state, searchModal: false };
    case ACTION.SET_BLOG_LENGTH:
      return { ...state, blogLength: action.payload };
  }
};

export default Reducer;
