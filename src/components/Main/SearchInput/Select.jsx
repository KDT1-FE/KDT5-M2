import React from "react";

const Select = (props) => {
  return (
    <select name={props.category} onChange={props.onChange}>
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
