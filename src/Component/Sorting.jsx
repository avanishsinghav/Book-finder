import React from "react";
import "../style/Sorting.css";

const Sorting = ({ sort, setSort }) => {
  return (
    <div className="sorting-container">
      <label htmlFor="sort" className="sorting-label">
        Sort by:
      </label>
      <select
        id="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="sorting-select"
      >
        <option value="">Choose...</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
};

export default Sorting;
