import React, { useContext, useCallback } from "react";
import BadgeGroup from "/components/BadgeGroup";
import ImageInput from "/components/ImageInput";
import { CATEGORIES } from "/data/Base";
import { StoreContext } from "/store/Store";
import ACTION from "/store/Action";

export default function SearchModal() {
  const [state, dispatch] = useContext(StoreContext);

  const close = useCallback((e) => {
    dispatch({ type: ACTION.SEARCH_MODAL_HIDE });
  }, []);

  return (
    <div className="modal" data-show={state.searchModal}>
      <div className="overlay" onClick={close}></div>
      {/* Search Modal */}
      <div className="search-modal">
        <div className="search-modal__head">
          <p>Search</p>
          <div className="close-btn" onClick={close}>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <div className="search-modal__content">
          <ImageInput
            placeholder="Post name"
            image="search-bold-stroke.png"
            alt="search"
          />
          {/* Badge Group */}
          <BadgeGroup items={CATEGORIES} />
          {/* End Badge Group */}
        </div>
      </div>
      {/* End Search Modal */}
    </div>
  );
}
