import React, { Component } from 'react';
import { Provider, Header, Body } from 'reactabular-table';
import { default as data } from './data';

import Hero from './components/Hero';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Table />
      </div>
    );
  }
}

export default App;
