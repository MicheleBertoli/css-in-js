import React, { Component } from 'react'
import Header from './components/Header'
import Wrapper from './components/Wrapper'

import TableView from './containers/TableView'

export default () => (
  <Wrapper>
    <Header>CSS in JS - Comparison</Header>
    <TableView />
  </Wrapper>
)
