const fetchData = require('./fetchData')
const fs = require('fs')

const writeOut = (data, path) =>
  new Promise((resolve, reject) =>
    fs.writeFile(path, JSON.stringify(data, null, 2), 'utf-8', err => {
      if (err) reject(err)
      else resolve(data)
    })
  )

async function fetch() {
  try {
    const data = await fetchData()
    await writeOut(data, '../webpage/src/data.json')
  } catch (error) {
    console.log('error', error)
  }
}

fetch()
