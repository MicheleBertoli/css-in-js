import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Filter from "./components/Filter";
import Seo from "./components/Seo";
import { default as data } from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...data,
      filters: data.headers.slice(2).map(x => ({
        name: x,
        checked: false
      }))
    };
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(index) {
    this.setState({
      ...this.state,
      filters: [
        ...this.state.filters.slice(0, index),
        {
          ...this.state.filters[index],
          checked: !this.state.filters[index].checked
        },
        ...this.state.filters.slice(index + 1)
      ]
    });
  }

  render() {
    return (
      <div>
        <Seo
          title="CSS-in-JS"
          description="Comparison of CSS-in-JS solutions"
          path="/"
          twitter="@michelebertoli"
        />
        <Navbar />
        <div className="container">
          <div className="row">
            <Filter
              filters={this.state.filters}
              onChange={this.onFilterChange}
            />
          </div>
          <div className="row">
            <Table
              headers={this.state.headers}
              rows={this.state.rows}
              filters={this.state.filters}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
