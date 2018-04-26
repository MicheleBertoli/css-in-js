const moment = require('moment')
const table = require('markdown-table')

const {getRows, headers} = require('./Rows')

const fetchData = require('./fetchData')

const data = require('../webpage/src/data.json')

function getDate() {
  return moment().format('LL')
}

async function getTable(rows) {
  const align = headers.map(x => 'c')
  align[0] = 'l'
  align[headers.length - 1] = 'l'
  const pad = false

  rows.unshift(headers)

  return table(rows, {
    align,
    pad
  })
}

async function getTableData() {
  const mergedData = await fetchData()

  return getRows(mergedData)
}

// fetchData()

module.exports = {
  getTableData,
  getDate,
  getTable
}
