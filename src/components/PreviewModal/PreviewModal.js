import React from "react";
import Auxiliary from "./../../hoc/Auxiliary";
import Modal from "./../UI/Modal/Modal";
import PreviewSummary from "./PreviewSummary/PreviewSummary";
import Classes from "./PreviewModal.css";

const Preview = (props) => {
  return (
    <Auxiliary>
      <Modal show={props.previewing} modalClosed={props.previewCancelHandler}>
        <PreviewSummary
          previewCancelled={props.previewCancelHandler}
          previewSubmitted={props.previewSubmitHandler}
          contactform={props.contactform}
        />
      </Modal>
      <button
        className={Classes.PreviewButton}
        disabled={!props.previewable}
        onClick={props.submitted}
      >
        Preview
      </button>
    </Auxiliary>
  );
};

export default Preview;
