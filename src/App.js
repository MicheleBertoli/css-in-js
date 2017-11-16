import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import { default as data } from "./data.json";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Table data={data} />
      </div>
    );
  }
}

export default App;
