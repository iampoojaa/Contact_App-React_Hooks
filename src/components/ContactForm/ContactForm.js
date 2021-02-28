import React, { useState } from "react";

import Auxiliary from "./../../hoc/Auxiliary";
import Classes from "./ContactForm.css";
import { Link } from "react-router-dom";
import axios from "./../../axios";
// import Spinner from "./../components/UI/Spinner/Spinner";
import PreviewModal from "./../PreviewModal/PreviewModal";

const CONSTANT_DETAILS = {
  name: "",
  phone: "",
  email: "",
  location: "",
};

const ContactForm = (props) => {
  const [formId, setFormId] = useState(0);
  const [formArrayState, setFormAarrayState] = useState([]);
  const [formIdContainer, setFormIdContainer] = useState([]);
  const [previewable, setPreviewable] = useState(false);
  const [previewing, setPreviewing] = useState(false);
  const [loading, setLoading] = useState(false);

  const previewHandler = () => {
    setPreviewing(!previewing);
  };

  const previewCancelHandler = () => {
    setPreviewing(!previewing);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setLoading(!loading);

    formIdContainer.map((id) => {
      const object = {
        name: id.name,
        phone: id.phone,
        email: id.email,
        location: id.location,
      };
      axios
        .post("/contact.json", object)
        .then((response) => {
          setLoading(!loading);
          props.history.push("/");
        })
        .catch((error) => {
          setLoading(!loading);
        });
      return null;
    });
  };

  // const previewSubmitHandler = () => {
  //   alert("submited");
  // };

  const updatePreviewState = (formArrayState) => {
    const sum = formArrayState.length;
    setPreviewable(sum > 0);
  };

  const addComponentHandlers = () => {
    setFormId(formId + 1);

    const copyFormArrayState = Object.assign([], formArrayState);
    copyFormArrayState.push(formId);

    const copyFormIdContainer = formIdContainer;
    const obj = {
      key: formId,
      name: CONSTANT_DETAILS.name,
      phone: CONSTANT_DETAILS.phone,
      email: CONSTANT_DETAILS.email,
      location: CONSTANT_DETAILS.location,
    };
    copyFormIdContainer.push(obj);

    setFormAarrayState(copyFormArrayState);
    setFormIdContainer(copyFormIdContainer);
    updatePreviewState(copyFormArrayState);
  };

  const removeComponentHandlers = () => {
    setFormId(formId - 1);
    const copyFormArrayState = Object.assign([], formArrayState);
    copyFormArrayState.pop(formId);

    const copyFormIdContainer = formIdContainer;
    copyFormIdContainer.pop(formId);

    setFormAarrayState(copyFormArrayState);
    setFormIdContainer(copyFormIdContainer);
    updatePreviewState(copyFormArrayState);
  };

  const nameChangeHandler = (event, value) => {
    event.preventDefault();
    const userIndex = formIdContainer.findIndex((user) => {
      return user.key === value;
    });

    const user = {
      ...formIdContainer[userIndex],
    };

    user.name = event.target.value;

    const updatedFormIdContainer = [...formIdContainer];
    updatedFormIdContainer[userIndex] = user;

    setFormIdContainer(updatedFormIdContainer);
  };

  const phoneChangeHandler = (event, value) => {
    event.preventDefault();
    const userIndex = formIdContainer.findIndex((user) => {
      return user.key === value;
    });

    const user = {
      ...formIdContainer[userIndex],
    };

    user.phone = event.target.value;

    const updatedFormIdContainer = [...formIdContainer];
    updatedFormIdContainer[userIndex] = user;

    setFormIdContainer(updatedFormIdContainer);
  };

  const emailChangeHandler = (event, value) => {
    event.preventDefault();
    const userIndex = formIdContainer.findIndex((user) => {
      return user.key === value;
    });

    const user = {
      ...formIdContainer[userIndex],
    };

    user.email = event.target.value;

    const updatedFormIdContainer = [...formIdContainer];
    updatedFormIdContainer[userIndex] = user;

    setFormIdContainer(updatedFormIdContainer);
  };

  const locationChangeHandler = (event, value) => {
    event.preventDefault();
    const userIndex = formIdContainer.findIndex((user) => {
      return user.key === value;
    });

    const user = {
      ...formIdContainer[userIndex],
    };

    user.location = event.target.value;

    const updatedFormIdContainer = [...formIdContainer];
    updatedFormIdContainer[userIndex] = user;

    setFormIdContainer(updatedFormIdContainer);
  };

  return (
    <Auxiliary>
      <div>
        <div className={Classes.AddControl}>
          <Link to="/">
            <button className={Classes.Back}>Back</button>
          </Link>
          <button className={Classes.Add} onClick={addComponentHandlers}>
            Add Form
          </button>
        </div>
        {formIdContainer.map((value) => {
          return (
            <div className={Classes.FormDiv} key={value.key} id={value.key}>
              <span
                className={Classes.RemoveControl}
                key={value.key}
                id={value.key}
                onClick={removeComponentHandlers}
              >
                &times;
              </span>
              <div className={Classes.OutterDiv}>
                <form id={value.key} className={Classes.Input}>
                  <label id={value.key} className={Classes.Label}>
                    Name :
                  </label>
                  <input
                    key={value.key}
                    id={value.name}
                    className={Classes.InputElement}
                    type="text"
                    placeholder="ex: John Smith"
                    onChange={(event) => nameChangeHandler(event, value.key)}
                    required
                  ></input>

                  <label id={value.key} className={Classes.Label}>
                    Phone No :
                  </label>
                  <input
                    id={value.phone}
                    className={Classes.InputElement}
                    type="tel"
                    placeholder="ex: 9087654321"
                    onChange={(event) => phoneChangeHandler(event, value.key)}
                    required
                  ></input>
                  <label id={value.key} className={Classes.Label}>
                    Email :
                  </label>
                  <input
                    id={value.email}
                    className={Classes.InputElement}
                    type="email"
                    placeholder="ex: john@gmail.com"
                    onChange={(event) => emailChangeHandler(event, value.key)}
                    required
                  ></input>
                  <label id={value.key} className={Classes.Label}>
                    Location :
                  </label>
                  <input
                    id={value.location}
                    className={Classes.InputElement}
                    type="text"
                    placeholder="ex: London"
                    onChange={(event) =>
                      locationChangeHandler(event, value.key)
                    }
                    required
                  ></input>
                </form>
              </div>
            </div>
          );
        })}

        <PreviewModal
          previewing={previewing}
          previewCancelHandler={previewCancelHandler}
          previewable={previewable}
          submitted={previewHandler}
          previewSubmitHandler={submitHandler}
          previewCancelled={previewCancelHandler}
          contactform={formIdContainer}
        />
      </div>
    </Auxiliary>
  );
};

export default ContactForm;
