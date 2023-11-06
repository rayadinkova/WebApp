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
    >
      {children}
    </Modal>
  );
}
