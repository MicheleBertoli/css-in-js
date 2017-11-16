import React from "react";

const Cell = options => {
  const { header, value } = options;
  if (header === "Package") {
    return <td dangerouslySetInnerHTML={{ __html: value }} />;
  } else {
    return <td>{value}</td>;
  }
};

const Row = options => {
  const { row, headers } = options;
  return (
    <tr>{headers.map(x => <Cell key={x} header={x} value={row[x]} />)}</tr>
  );
};

const Table = options => {
  const { headers, rows, filters } = options;
  let filteredRows = rows.filter(row => {
    return filters.reduce((flag, filter) => {
      return flag && (filter.checked ? !!row[filter.name] : true);
    }, true);
  });

  return (
    <table className="table table-responsive">
      <thead>
        <tr>{headers.map(x => <th key={x}>{x}</th>)}</tr>
      </thead>
      <tbody>
        {filteredRows.map((row, index) => (
          <Row row={row} key={index} headers={headers} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
