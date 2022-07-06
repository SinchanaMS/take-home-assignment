import React from "react";
import { useFilter } from "../contexts/FilterContext";

export default function SortBy() {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="flex items-center gap-4">
      <p>Sort by:</p>
      <label>
        <input
          type="radio"
          name="sortBy"
          className="mr-1"
          value={filterState.sortBy}
          checked={filterState.sortBy === "high-to-low"}
          onChange={() =>
            filterDispatch({ type: "SORT_BY", payload: "high-to-low" })
          }
        />
        Price: High to Low
      </label>
      <label>
        <input
          type="radio"
          name="sortBy"
          className="mr-1"
          value={filterState.sortBy}
          checked={filterState.sortBy === "low-to-high"}
          onChange={() =>
            filterDispatch({ type: "SORT_BY", payload: "low-to-high" })
          }
        />
        Price: Low to High
      </label>
    </div>
  );
}
