import React from "react";

const CellTd = options => {
  const { header, value } = options;
  if (header === "Package") {
    return <td dangerouslySetInnerHTML={{ __html: value }} />;
  } else {
    return <td>{value}</td>;
  }
};

const CellTh = options => {
  const { header } = options;
  let additionalOptions;
  if (header === "Package") {
    additionalOptions = { width: 180 };
  } else if (header === "Version") {
    additionalOptions = { width: 90 };
  } else {
    additionalOptions = {};
  }
  return <th {...additionalOptions}>{header}</th>;
};

const Row = options => {
  const { row, headers } = options;
  return (
    <tr>{headers.map(x => <CellTd key={x} header={x} value={row[x]} />)}</tr>
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
        <tr>{headers.map(x => <CellTh key={x} header={x} />)}</tr>
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
