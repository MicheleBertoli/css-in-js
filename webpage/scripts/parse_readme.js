#!/usr/bin/env node

const marked = require("marked");
const fs = require("fs");
const text = fs.readFileSync("../README.md", "utf8");

const tokens = marked.lexer(text, {
  gfm: true,
  tables: true
});

const table = tokens.filter(x => x.type == "table")[0];
const { header, cells } = table;

const linkPattern = /\s?\[([^\]]+)\]\(([^\)]+)\)\s?/gi;
const parseLinks = linkText => {
  let result = [],
    match;
  do {
    match = linkPattern.exec(linkText);
    if (match) {
      result.push({ text: match[1], href: match[2] });
    }
  } while (match);
  return result;
};

const parseSymbol = value => value === "✓";

const defaultFallback = (options, field) => options[field] || options.default;

const tdParser = {
  Package: parseLinks,
  Version: value => value,
  default: parseSymbol
};

const rows = cells.map(x => {
  return header.reduce((result, key, i) => {
    const parser = defaultFallback(tdParser, key);
    result[key] = parser(x[i]);
    return result;
  }, {});
});

const json = {
  headers: header,
  rows: rows
};

fs.writeFileSync("src/data.json", JSON.stringify(json, null, 2), "utf8");
