import { Contact } from "./contact/contact.jsx";
import "./index.css";
import "./index.html";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Contact name="Patsy Gillan" number="334-343-2987" />
        <Contact
          gender="female"
          name="Lucille R. Smith"
          number="517-813-8608"
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// new Contact('female', '', '334-343-2987'),
// new Contact('female', 'Lucille R. Smith', '517-813-8608'),
