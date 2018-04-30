const moment = require('moment')
const table = require('markdown-table')

const {getRows, headers} = require('./Rows')

function getDate() {
  return moment().format('LL')
}

function getTable() {
  const data = require('../webpage/src/data.json')

  const rows = getRows(data.rows)
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

module.exports = {
  getDate,
  getTable
}
