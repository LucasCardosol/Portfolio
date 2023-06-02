import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import close from "../../../assets/icons/structure/close.svg"

export function ImageModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <button onClick={() => props.onHide(false)}>
          <img src={close}></img>
        </button>
        <img src={props.imgtozoom}></img>
      </Modal.Body>
    </Modal>
  );
}