import "../styles/components_styles/modal.css";
import React from "react";
import Modal from "react-modal";

export default function PopUp({
  isOpen,
  onRequestClose,
  contentLabel,
  children,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
      className="popup-container"
    >
      {children}
    </Modal>
  );
}
