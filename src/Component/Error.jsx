import React from "react";
import "../style/Error.css";

const Error = ({ error }) => {
  return <div>{error && <p className="error">{error}</p>}</div>;
};

export default Error;
