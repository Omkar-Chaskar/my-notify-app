import { useState } from "react";
import { useFilter , useNotes} from "../context";

export default function Filter() {
    const [ showFilter , setShowFilter ] = useState(false);
    const {filterState , filterDispatch} = useFilter();
    const { notes } = useNotes()

    const alltags = notes.reduce((acc, curr) => {
        return ([...acc, ...curr.tags]);
      }, []);
    
      const tagSet = [...new Set(alltags)];
      const tags = tagSet.filter((tag) => tag !== undefined);

      const priorityList = ["High", "Medium", "Low"]

  return (
    <section className="filter-container">
      <button className="button button-secondary ptr bold filter-btn" onClick={()=> setShowFilter( !showFilter)}> {showFilter ? "CLOSE" : "FILTER"}</button>
      {showFilter ? (
        <div>
        <div className="filter-header-container">
          <h5 className="filter-header">Filter</h5>
          <button
            className="button button-secondary ptr bold"
            onClick={() => filterDispatch({ type: "CLEAR" })}
          >
            Clear
          </button>
        </div>
        <div className="date-container note-priority-container list">
          <h5 className="date-header">Date</h5>
                <label className="input-select list">
            <input
              type="radio"
              className="radio-date"
              name="date"
              value="LATEST"
              checked={filterState.date === "LATEST" ? true : false}
              onChange={(e) =>
                filterDispatch({
                  type: "SORT",
                  payload: e.target.value
                })
              }
            />
            <span>LATEST</span>

          </label>
          <label className="input-select list">
            <input
              type="radio"
              className="radio-date"
              name="date"
              value="EARLIER"
              checked={filterState.date === "EARLIER" ? true : false}
              onChange={(e) =>
                filterDispatch({
                  type: "SORT",
                  payload: e.target.value
                })
              }
            />
            <span>EARLIER</span>
          </label>
        </div>
        <div className="priority-container note-priority-container list">
          <h5 className="priority-header">Priority</h5>

          {
            priorityList.map((priority ,index) => {
              return(
                <label className="input-select list" key={index}>
            <input
              type="radio"
              className="radio-priority"
              name="priority"
              value={priority}
              checked={filterState.priority !== priority ? false : true}
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_PRIORITY",
                  payload: e.target.value
                })
              }
            />
            <span>{priority}</span>
          </label>
              )
            })
          }
        </div>
        <div className="tag-container note-priority-container list">
          <h5 className="tag-header">Tags</h5>

          {
            tags.map((tag ,index) => {
              return(
                <label className="input-select list" key={index}>
            <input
              type="checkbox"
              className="radio-tags"
              name={tag}
              value={tag}
              checked={filterState.tags[tag] ? true : false}
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_TAG",
                  payload: e.target.value
                })
              }
            />
            <span>{tag}</span>
          </label>
              )
            })
          }
        </div>
      </div>
      ):(<></>)}
    </section>
  )
}
