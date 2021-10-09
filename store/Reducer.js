import ACTION from "./Action";

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SEARCH_MODAL_SHOW:
      return { ...state, searchModal: true };
    case ACTION.SEARCH_MODAL_HIDE:
      return { ...state, searchModal: false };
    case ACTION.LOADER_SHOW:
      return { ...state, loader: true };
    case ACTION.LOADER_HIDE:
      return { ...state, loader: false };
    case ACTION.SET_BLOG_LENGTH:
      return { ...state, blogLength: action.payload };
    case ACTION.SET_POSTS:
      return { ...state, posts: action.payload };
    case ACTION.SET_FILTER_POSTS:
      return { ...state, filterPosts: action.payload };
    default:
      alert("Not match ACTION!");
      return state;
  }
};

export default Reducer;
