import React from "react";
import styles from "./Select.module.scss";

const Select = (props) => {
  return (
    <select
      name={props.category}
      onChange={props.onChange}
      className={styles.select}
    >
      {props.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
