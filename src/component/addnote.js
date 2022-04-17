import "../styles.css";
import {Link} from "react-router-dom";

export default function AddNote() {

  const labels = ["Home" , "Work" , "Study" , "Gym" , "Health"];
  const priority = ["High" , "Medium" , "Low"]

  return (
    <div className="AddNote">
      <div className="add-note-container">
        <section className="note-title-container">
          <textarea id="w3review" name="notetittle" rows="2" cols="50" placeholder="Note Tittle" className="note-textarea" />
        </section>
        <section className="note-body-container">
          <textarea id="w3review" name="notebody" rows="6" cols="50" placeholder="Note body" className="note-textarea" />
        </section>
        <section>
          <ul className="note-label-container list">
          {labels.map( (labelName , index) => {
            return(
            <li key={index} className="list">
              <input type="radio" id={labelName} name="note-label" 
              value={labelName}/>
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
              />
          <label htmlFor={prioTag} >{prioTag}</label>
            </li>
            );
          })}
          </ul>
        </section>
        <Link to="/" className="button button-secondary ptr bold">Save</Link>
      </div>
    </div>
  );
}
