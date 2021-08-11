import "./search-box-styles.css";
const React = require("react");

export const SearchBox = (props) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};
