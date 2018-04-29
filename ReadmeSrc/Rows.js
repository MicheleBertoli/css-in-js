const headers = [
  'Package',
  'Version',
  'Automatic Vendor Prefixing',
  'Pseudo Classes',
  'Media Queries',
  'Styles As Object Literals',
  'Extract CSS File',
  'Package Stats'
]

const link = obj => `[${obj.text}](${obj.href})`
const links = objs => objs.map(link).join(' + ')
const version = obj => obj
const symbol = obj => (obj === true ? '✓' : '')

const stats = obj => {
  return obj
    .map((stat, index) => {
      const spacer = index > 0 ? '<div>____________</div>' : ''

      const openIssues = `<div><sub><img src="./ReadmeSrc/img/hand-paper-o.svg" width="12" />  ${
        stat.githubData.open_issues
      }</sub></div>`

      const closedIssues = `<div><sub><img src="./ReadmeSrc/img/hand-peace-o.svg" width="12" /> ${
        stat.githubData.closed_issues
      }</sub></div>`

      const stars = `<div><sub><img src="./ReadmeSrc/img/star.svg" width="12" /> ${
        stat.githubData.stargazers_count
      }</sub></div>`

      const lastWeekDl = `<div><sub><img src="./ReadmeSrc/img/download.svg" width="12" /> ${
        stat.npmData.downloads
      }</sub></div>`

      const npmVersion = `<div><sub><img src="./ReadmeSrc/img/tag.svg" width="12" /> ${
        stat.npmData.version
      }</sub></div>`

      return (
        spacer + npmVersion + stars + openIssues + closedIssues + lastWeekDl
      )
    })
    .join('')
}

const formatters = {
  Package: links,
  Version: version,
  'Package Stats': stats,
  default: symbol
}

const defaultFallback = (options, field) => options[field] || options.default

const row = obj =>
  headers.map(header => {
    const formatter = defaultFallback(formatters, header)

    return formatter(obj[header])
  })

function getRows(rows) {
  const out = rows.map(row)

  return out
}

module.exports = {getRows, headers}
