require('dotenv').load()
const fs = require('fs')
const axios = require('axios')
const merge = require('lodash/fp/merge')
const delay = require('delay')

const data = require('../webpage/src/data.json')

const writeOut = (data, path) =>
  new Promise((resolve, reject) =>
    fs.writeFile(path, JSON.stringify(data, null, 2), 'utf-8', err => {
      if (err) reject(err)
      else resolve(data)
    })
  )

// https://github.com/settings/tokens
const access_token = process.env.GITHUB_TOKEN

async function getPackagesData() {
  return Promise.all(data.rows.map(getPackageData))
}

async function getPackageData(solution, index) {
  await delay(5000 * index)
  console.log(`Package ${index + 1}: ${solution.Package[0].text}`)
  return Promise.all(solution.Package.map(getRepoStats))
}

async function getRepoStats(repo) {
  return Promise.all([getNpmStats(repo.npm), getGithubStats(repo.github)])
}

async function getNpmStats(npm) {
  const npmData = await getNpmData(npm)
  const downloads = await getNpmDownloads(npm)
  return {
    ...downloads,
    ...npmData
  }
}

const getNpmData = npm =>
  axios.get(`https://registry.npmjs.org/${npm}/latest`).then(response => ({
    version: response.data.version
  }))

const getNpmDownloads = npm =>
  axios
    .get(`https://api.npmjs.org/downloads/point/last-week/${npm}`)
    .then(response => ({downloads: response.data.downloads}))

const getIssueCount = (github, state) =>
  axios
    .get(
      `https://api.github.com/search/issues?access_token=${access_token}&q=repo:${github}+type:issue+state:${state}`
    )
    .then(response => response.data.total_count)

const getGithubRepoStats = github =>
  axios
    .get(`https://api.github.com/repos/${github}?access_token=${access_token}`)
    .then(response => response.data)

async function getGithubStats(github) {
  const repoData = await getGithubRepoStats(github)
  const closed_issues = await getIssueCount(github, 'closed')
  return {
    closed_issues,
    ...repoData
  }
}

async function fetchData() {
  try {
    const remoteData = await getPackagesData()

    const remoteDataForMerge = remoteData.map(repos => ({
      'Package Stats': repos.map(repo => ({
        npmData: repo[0],
        githubData: repo[1]
      }))
    }))

    const mergedData = data.rows.map((row, index) =>
      merge(remoteDataForMerge[index], row)
    )

    // await writeOut(mergedData, './webpage/src/data.json')

    return mergedData
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = fetchData
