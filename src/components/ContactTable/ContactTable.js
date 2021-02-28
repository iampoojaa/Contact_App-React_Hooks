import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Classes from "./ContactTable.css";
import ConatctDetail from "./../ConatctDetail/ConatctDetail";
import axios from "./../../axios";

const ContactTable = (props) => {
  let id = 0;
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState("true");
  const [modal, setModal] = useState(false);
  const [dataId, setDataID] = useState([]);

  const closeModal = () => {
    setModal(!modal);
  };

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

  const display = (data) => {
    setDataID(data.id);
    closeModal();
  };

  return (
    <div>
      <ConatctDetail show={modal} modalClosed={closeModal} data={dataId} />
      <Link to="/adduser">
        <div className={Classes.AddControl}>
          <button className={Classes.AddButton}>Add New</button>
        </div>
      </Link>

      <div className={Classes.Table}>
        <table>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {contactData.map((data, index) => {
              id++;
              return (
                <tr key={index} onClick={() => display(data)}>
                  <td>{id}</td>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                  <td>{data.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactTable;
