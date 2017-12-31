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

const rows = cells
  .map(x => {
    const result = {};
    header.forEach((key, i) => (result[key] = x[i]));
    return result;
  })
  .map(x => {
    x.Package = marked.inlineLexer(x.Package, []);
    return x;
  });

const json = {
  headers: header,
  rows: rows
};

fs.writeFileSync("src/data.json", JSON.stringify(json, null, 2), "utf8");
