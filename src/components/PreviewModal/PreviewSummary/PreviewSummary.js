import React from "react";

import Auxiliary from "./../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";
import Classes from "./PreviewSummary.css";

const PreviewSummary = (props) => {
  const previewSummary = props.contactform.map((id) => {
    const object = {
      name: id.name,
      phone: id.phone,
      email: id.email,
      location: id.location,
    };
    return JSON.stringify(object, null, 2);
  });

  return (
    <Auxiliary>
      <div className={Classes.Preview}>
        <p className={Classes.Display}>
          Number of Contacts : {previewSummary.length}
        </p>
        <p>
          <code>{previewSummary}</code>
        </p>
      </div>
      <Button btnType="Danger" clicked={props.previewCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.previewSubmitted}>
        SUBMIT
      </Button>
    </Auxiliary>
  );
};

export default PreviewSummary;
