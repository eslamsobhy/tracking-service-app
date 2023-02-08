import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";

// Styles
import "../styles/modal.css";
import "../styles/media.css";

const Modal = () => {
  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((store) => store.modal);

  const closingModal = () => {
    dispatch(closeModal());
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
        <div className="modal-option">العربية</div>
      </div>
    </>
  );
};

export default Modal;
