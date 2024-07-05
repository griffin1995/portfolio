import React, { Component } from "react";
import HubJoin from "./HubJoin"; // Importing HubJoin component
import HubCreate from "./HubCreate"; // Importing HubCreate component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom

// Home component definition
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          {/* Route for the root path displaying a simple paragraph */}
          <Route path="/" element={<p>Home</p>} />

          {/* Route for the "/join" path displaying the HubJoin component */}
          <Route path="/join" element={<HubJoin />} />

          {/* Route for the "/create" path displaying the HubCreate component */}
          <Route path="/create" element={<HubCreate />} />
        </Routes>
      </Router>
    );
  }
}
