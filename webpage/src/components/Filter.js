import React from "react";

const Filter = props => {
  return (
    <div className="form-row align-items-center" style={{ padding: "12px" }}>
      {props.filters.map((x, index) => {
        return (
          <div className="form-check form-check-inline" key={x.name}>
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                checked={x.checked}
                onChange={props.onChange.bind(null, index)}
              />
              {` ${x.name}`}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
