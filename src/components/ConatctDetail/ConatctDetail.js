import React, { useState, useEffect } from "react";
import axios from "./../../axios";
import Classes from "./ContactDetail.css";
import Modal from "./../UI/Modal/Modal";

const ConatctDetail = (props) => {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    axios
      .get("/contact.json")
      .then((responseData) => {
        const fetchedContacts = [];
        for (let key in responseData.data) {
          fetchedContacts.push({
            ...responseData.data[key],
            id: key,
          });
        }
        setContactData(fetchedContacts);
        setLoading(!loading);
      })
      .catch((err) => {
        setLoading(!loading);
      });
  }, []);
  const refreshPage = () => {
    window.location.reload();
  };
  const deleteContactHandler = (dataId) => {
    axios
      .delete(`/contact/${dataId}.json`)
      .then((response) => {
        setLoading(!loading);

        refreshPage();
      })
      .catch((error) => {
        setLoading(!loading);
      });
  };

  return (
    <div>
      <Modal show={props.show} modalClosed={props.modalClosed}>
        {contactData.map((data, index) => {
          return props.data === data.id ? (
            <div key={index} className={Classes.Output}>
              <h2>Contact Details</h2>
              <label className={Classes.Label}>Name : </label>
              <p className={Classes.OutElement}>{data.name}</p>
              <label className={Classes.Label}>Phone No : </label>
              <p className={Classes.OutElement}>{data.phone}</p>
              <label className={Classes.Label}>Email : </label>
              <p className={Classes.OutElement}>{data.email}</p>
              <label className={Classes.Label}>Location : </label>
              <p className={Classes.OutElement}>{data.location}</p>
            </div>
          ) : null;
        })}
        <button className={Classes.Button}>
          <i
            style={{ fontSize: "24px", color: "grey" }}
            className="fas fa-edit"
          ></i>
        </button>
        {contactData.map((data, index) => {
          return props.data === data.id ? (
            <button
              key={index}
              className={Classes.Button}
              onClick={() => deleteContactHandler(props.data)}
              // onClick={refreshPage}
            >
              <i
                style={{ fontSize: "24px", color: "#c20e0e" }}
                className="fa fa-trash"
              ></i>
            </button>
          ) : null;
        })}
      </Modal>
    </div>
  );
};

export default ConatctDetail;
