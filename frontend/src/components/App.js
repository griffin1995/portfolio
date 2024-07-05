import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./Home";
import HubJoin from "./HubJoin";
import HubCreate from "./HubCreate";

// App component that renders a simple heading
export default class App extends Component {
  // Constructor to initialize the component
  constructor(props) {
    super(props);
  }

  // Render method to display the component's content
  render() {
    return <Home />;
  }
}

// Find the HTML element with the id 'app' and render the App component into it
const appDiv = document.getElementById("app");
render(<App />, appDiv);
