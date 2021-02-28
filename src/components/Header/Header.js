import React from "react";
import Logo from "./Logo/Logo";
import Auxiliary from "./../../hoc/Auxiliary";
import Classes from "./Header.css";

const Header = (props) => (
  <Auxiliary>
    <header className={Classes.Header}>
      <div className={Classes.Logo}>
        <Logo />
      </div>
      <h1>Contacts</h1>
    </header>
    <div className={Classes.Content}>{props.children}</div>
  </Auxiliary>
);

export default Header;
