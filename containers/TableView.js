import React, { Component } from 'react'
import Row from '../components/Row'
import Cell from '../components/Cell'
import Table from '../components/Table'
import Input from '../components/Input'
import FilterBox from '../components/FilterBox'
import Filter from '../components/Filter'

import data from '../data'

const repository = 'https://github.com/MicheleBertoli/css-in-js/tree/master/'
const columnNames = {
  version: '',
  vendorPrefixing: 'Vendor Prefixing',
  pseudoClasses: 'Pseudo Classes',
  mediaQueries: 'Media Queries',
  objectLiterals: 'Object Literals',
  keyframes: 'Keyframes',
  fontFaces: 'Font Faces',
  plugins: 'Plugin API',
  fallback: 'Fallbacks',
  extractCSS: 'Extract CSS',
  serverRendering: 'Server Rendering',
  frameworkAgnostic: 'Framework-agnostic',
  nativeSupport: 'React Native',
  mechanism: 'Mechanism'
}
const defaultColumns = [
  'version',
  'vendorPrefixing',
  'pseudoClasses',
  'mediaQueries',
  'keyframes',
  'serverRendering',
  'mechanism'
]

export default class TableView extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      sortBy: undefined,
      sortAscending: true,
      allCollumns: true,
      filters: {
        vendorPrefixing: false,
        pseudoClasses: false,
        mediaQueries: false,
        objectLiterals: false,
        extractCSS: false,
        keyframes: false,
        fontFaces: false,
        plugins: false,
        fallback: false,
        frameworkAgnostic: false,
        nativeSupport: false
      }
    }
    this.sortBy = this.sortBy.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.filter = this.filter.bind(this)
    this.toggleAllCollumns = this.toggleAllCollumns.bind(this)
  }

  renderRow(library, columns) {
    const cells = columns.map(column => {
      const value = data[library][column]
      const sign = value ? '√' : 'x'

      const isBool = typeof value === 'boolean' || typeof value === 'undefined'
      return (
        <Cell isBool={isBool} value={value} flex={column === 'version' ? 0.5 : 1}>
          {isBool ? sign : value}
        </Cell>
      )
    })

    const links = [ ].concat(data[library].url).map((url, index) => (
      <div>
        <a href={url} style={{ fontWeight: 'bold' }}>
          {library.split('+')[index]}
          {library.split('+').length - 1 > index ? ' + ' : ''}
        </a>
      </div>
    ))

    return (
      <Row>
        <Cell alignRight flex={2}>
          {links}
          <a href={repository + library.replace('+', '-')}><i>(Example)</i></a>
        </Cell>
        {cells}
      </Row>
    )
  }

  sortBy(column) {
    this.setState({
      sortBy: this.state.sortBy === column && !this.state.sortAscending ? undefined : column,
      sortAscending: this.state.sortBy === column ? !this.state.sortAscending : true
    })
  }

  filter(e) {
    this.setState({
      filter: e.target.value.trim().length > 0 ? e.target.value.toLowerCase().trim() : false
    })
  }

  toggleAllCollumns() {
    this.setState({ allCollumns: !this.state.allCollumns })
  }

  toggleFilters(column) {
    this.setState({
      filters: {
        ...this.state.filters,
        [column]: !this.state.filters[column]
      }
    })
  }
  render() {
    const columns = Object.keys(columnNames).filter((column, index) => this.state.allCollumns ? true : defaultColumns.indexOf(column) > -1)

    const headerRow = columns.map(column => (
      <Cell header bold={this.state.sortBy === column} flex={column === 'version' ? 0.5 : 1} onClick={column === 'version' ? undefined : () => this.sortBy(column)}>
        {columnNames[column]}
      </Cell>
    ))

    const sortData = Object.keys(data).sort(left => {
      if (this.state.sortBy) {
        if (data[left][this.state.sortBy] === this.state.sortAscending) {
          return -1
        } else {
          return 1
        }
      }
      return 0
    }).filter(library => {
      const fulfilled = Object.keys(this.state.filters).reduce((fulfilled, column) => {
        if (this.state.filters[column] && !data[library][column]) {
          fulfilled = false
        }
        return fulfilled
      }, true)

      if (this.state.filter) {
        return library.indexOf(this.state.filter) > -1 && fulfilled
      }

      return fulfilled
    })

    const libraries = sortData.map(library => this.renderRow(library, columns))
    const filters = Object.keys(this.state.filters).map(column => (
      <Filter active={this.state.filters[column]} onClick={() => this.toggleFilters(column)}>
        {columnNames[column]}
      </Filter>
    ))

    return (
      <Table>
        <FilterBox>
          {filters}
        </FilterBox>
        <Input onInput={this.filter} placeholder="Search ..." />
        <Row header>
          <Cell flex={2} alignLeft onClick={this.toggleAllCollumns} toggle>
            {this.state.allCollumns ? 'Hide detail collumns' : 'Show all collumns'}
          </Cell>
          {headerRow}
        </Row>
        <div style={{ flex: 1, alignSelf: 'stretch', width: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
          {libraries}
        </div>
      </Table>
    )
  }
}
