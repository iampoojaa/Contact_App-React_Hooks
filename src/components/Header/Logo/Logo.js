import React from "react";

import contactLogo from "../../../assets/images/Contact.png";
import Classes from "./Logo.css";

const Logo = (props) => (
  <div className={Classes.Logo} style={{ height: props.height }}>
    <img src={contactLogo} alt="MyContacts" />
  </div>
);

export default Logo;
