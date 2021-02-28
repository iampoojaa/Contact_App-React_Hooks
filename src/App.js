import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import ContactTable from "./components/ContactTable/ContactTable";
import ContactDetails from "./components/ContactForm/ContactForm";

const App = () => {
  return (
    <Router>
      <Header>
        <Switch>
          <Route path="/adduser" component={ContactDetails} />
          <Route exact path="/" component={ContactTable} />
        </Switch>
      </Header>
    </Router>
  );
};

export default App;
