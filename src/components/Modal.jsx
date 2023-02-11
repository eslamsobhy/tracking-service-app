import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { changeLangToEn, changeLangToAr } from "../features/track/trackSlice";

// Styles
import "../styles/modal.css";
import "../styles/media.css";

const Modal = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((store) => store.modal);
  const { isArabic } = useSelector((store) => store.track);

  const closingModal = () => {
    dispatch(closeModal());
  };

  const handleClick = (e) => {
    const lang = e.target.innerHTML;
    if (lang === "English") {
      dispatch(changeLangToEn());
      dispatch(closeModal());
    }
    if (lang === "العربية") {
      dispatch(changeLangToAr());
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closingModal);
    return () => window.removeEventListener("resize", closingModal);
  }, [window.innerWidth]);

  return (
    <>
      <div
        className={
          isModalOpen ? "modal-container" : "modal-container modal-hide"
        }
      >
        <div className="modal-option" onClick={handleClick}>
          {isArabic ? "English" : "العربية"}
        </div>
      </div>
    </>
  );
};

export default Modal;
