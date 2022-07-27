import {
  useContext,
  createContext,
  useReducer
} from "react";

import {
  Compose,
  filterSortBy,
  priorityFilter,
  tagsFilter
} from "../utils/filter";

import { filterReducer } from "../reducer/filterReducer";
import { useNotes } from "./index";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  
  const { notes } = useNotes();

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort : "",
    priority: "",
    tags: {}
  });
  const filteredNote = Compose(
    filterState,
    filterSortBy,
    priorityFilter,
    tagsFilter
  )(notes);

  return (
    <FilterContext.Provider
      value={{ notes: filteredNote, filterState, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider, useFilter };