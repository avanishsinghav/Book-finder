import React from "react";
import { RiLoader2Fill } from "react-icons/ri";
import "../style/Loading.css";

const Loading = ({ loading }) => {
  return (
    <div>
      {loading && (
        <p className="loading-para">
          Loading
          <RiLoader2Fill />
        </p>
      )}
    </div>
  );
};

export default Loading;
