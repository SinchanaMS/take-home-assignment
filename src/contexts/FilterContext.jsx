import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { filterReducer } from "../reducers/filterReducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const initialFilterState = {
    brand: [],
    size: [],
    gender: [],
    sortBy: "",
  };

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
