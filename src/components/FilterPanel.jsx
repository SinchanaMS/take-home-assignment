import React from "react";
import { useFilter } from "../contexts/FilterContext";
import { products, sizes } from "../database/Products";

export default function FilterPanel() {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="px-2 m-2 w-80 flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="font-medium">Filters:</h1>
        <button
          className="text-xs text-blue-600 font-medium"
          onClick={() => filterDispatch({ type: "CLEAR" })}
        >
          CLEAR ALL
        </button>
      </div>
      <div>
        <p className="font-medium text-sm">BRAND</p>
        <div className="flex flex-col">
          {products.map((prod) => (
            <label key={prod.id}>
              <input
                type="checkbox"
                className="mr-2"
                checked={filterState.brand.includes(prod.brand)}
                value={prod.brand}
                onChange={() =>
                  filterDispatch({ type: "BRAND", payload: prod.brand })
                }
              />
              {prod.brand}
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-medium">GENDER</p>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            value="Male"
            checked={filterState.gender.includes("Male")}
            onChange={() => filterDispatch({ type: "GENDER", payload: "Male" })}
          />
          Male
        </label>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            value="Female"
            checked={filterState.gender.includes("Female")}
            onChange={() =>
              filterDispatch({ type: "GENDER", payload: "Female" })
            }
          />
          Female
        </label>
      </div>
      <div className="flex flex-col">
        <p className="font-medium">SIZE</p>
        {sizes.map((size) => (
          <label key={size}>
            <input
              type="checkbox"
              className="mr-2"
              value={size}
              checked={filterState.size.includes(size)}
              onChange={() => filterDispatch({ type: "SIZE", payload: size })}
            />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
}
