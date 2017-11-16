import React from "react";

const Cell = options => {
  const { header, value } = options;
  if (header == "Package") {
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
  const { data } = options;
  return (
    <table className="table table-responsive">
      <thead>{data.headers.map(x => <th key={x}>{x}</th>)}</thead>
      <tbody>
        {data.rows.map((row, index) => (
          <Row row={row} key={index} headers={data.headers} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
