import React, { Component } from 'react';
import { Provider, Header, Body } from 'reactabular-table';
import { default as data } from './../data';

const rows = Object.keys(data).map(key => {
  let x = data[key];
  x.id = key;
  return x;
})

const boolFormatter = x => {
  if (x === undefined) {
    return '?'
  } else {
    return x ? '+' : ''
  }
}

const boolCellFormatter = {
  cell: {
    formatters: [
      boolFormatter
    ]
  }
}

const columns = [
  {
    property: 'id',
    header: {
      label: 'Package',
    }
  },
  {
    property: 'version',
    header: {
      label: 'Version',
    }
  },
  {
    property: 'vendorPrefixing',
    header: {
      label: 'Automatic Vendor Prefixing',
    },
    ...boolCellFormatter
  },
  {
    property: 'pseudoClasses',
    header: {
      label: 'Pseudo Classes',
    },
    ...boolCellFormatter
  },
  {
    property: 'mediaQueries',
    header: {
      label: 'Media Queries',
    },
    ...boolCellFormatter

  },
  {
    property: 'objectLiterals',
    header: {
      label: 'Styles As Object Literals',
    },
    ...boolCellFormatter
  },
  {
    property: 'extractCSS',
    header: {
      label: 'Extract CSS File',
    },
    ...boolCellFormatter
  },
];

// https://reactabular.js.org/#/examples/all-features

class Table extends Component {
  render() {
    return (
      <Provider className="table" columns={columns} cellSpacing="0">
        <Header/>
        <Body rows={rows} rowKey="id" />
      </Provider>
    );
  }
}

export default Table;
