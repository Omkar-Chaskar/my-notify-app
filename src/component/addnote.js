import "../styles.css";
import { useNotes } from "../context/noteProvider";
import { v4 as uuid } from "uuid";
import {Link} from "react-router-dom";

export default function AddNote() {
  const { state ,dispatch } = useNotes();

  const labels = ["Home" , "Work" , "Study" , "Gym" , "Health"];
  const priority = ["High" , "Medium" , "Low"]

  return (
    <div className="AddNote">
      <div className="add-note-container">
        <section className="note-title-container">
          <textarea id="w3review" name="notetittle" rows="2" cols="50" placeholder="Note Tittle" className="note-textarea" value={state.title}
            onChange={(e) => dispatch({
              type: "SET_NOTE",
              value: e.target.value,
              key: "title"
            })}/>
        </section>
        <section className="note-body-container">
          <textarea id="w3review" name="notebody" rows="6" cols="50" placeholder="Note body" className="note-textarea" value={state.body}
            onChange={(e) => dispatch({
              type : "SET_NOTE",
              value : e.target.value,
              key : "body"
            })}/>
        </section>
        <section>
          <ul className="note-label-container list">
          {labels.map( (labelName , index) => {
            return(
            <li key={index} className="list">
              <input type="radio" id={labelName} name="note-label" 
              value={labelName}
              onChange={() =>
                dispatch({
                  type : "SET_NOTE",
                  value : labelName,
                  key : "label" 
                })
              }/>
          <label htmlFor={labelName} >{labelName}</label>
            </li>
            );
          })}
          </ul>
        </section>
        <section>
        <ul className="note-priority-container list">
          {priority.map( (prioTag , index) => {
            return(
            <li key={index} className="list">
              <input type="radio" id={prioTag} name="note_priority" 
              value={prioTag}
              onChange={() =>
                dispatch({
                  type : "SET_NOTE",
                  value : prioTag,
                  key : "priority" 
                })
              }/>
          <label htmlFor={prioTag} >{prioTag}</label>
            </li>
            );
          })}
          </ul>
        </section>
        <Link to="/" className="button button-secondary ptr bold" onClick={
          ()=>{dispatch({
            type : "ADD_TO_NOTE",
            value : {
              id : uuid(),
              title : state.title,
              body : state.body,
              label : state.label,
              priority : state.priority,
              date : new Date().toLocaleDateString()
            }
          });
        }
        }>Save</Link>
      </div>
    </div>
  );
}
