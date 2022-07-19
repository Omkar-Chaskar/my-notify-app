/* eslint-disable array-callback-return */
import "../styles.css";
import {
  MdEditNote,
  MdOutlineArchive,
  MdDelete
} from "react-icons/md";
import { useNotes, useArchive ,useTrash} from "../context";
import { Link } from "react-router-dom";

export default function Note() {
  const { notes , dispatch } = useNotes();
  const { addToArchiveHandler } = useArchive();
  const { trashNoteHandler } = useTrash();
  return (
      <ul className="flex-col">
        <p className="p3 bold center">
          All Notes
        </p>
        {notes.map( note => { 
          if(note.pin === false)
            return (
              <li className="card" key={note._id} style={{backgroundColor: note.color}}>
                <div className="card__primary-action card__primary-action-column">
                  <div className="card__primary">
                    <h2 className="p3 bold">{note.title}</h2>
                    <p className="p2">{note.content}</p>
                    <div className="flex card-badges bold">
                      <p className="card-label p1">{note.label}</p>
                    </div>
                    <div className="flex flex-align-end">
                      <p className=" p1 bold">{note.priority}</p>
                    </div>
                  </div>
                </div>
                <div className="card__actions">
                  <p className="text-grey p1">Created on {note.date}</p>
                  <div className="card__action-icons p3 text-grey">
                  <Link className="text-dark" to="Edit">
                    <MdEditNote className="ptr" title="Edit" 
                    onClick={() => dispatch({ type: "EDIT_NOTE", payload: note })}
                    />
                  </Link>
                    
                    <MdOutlineArchive name="archive item" className="ptr" title="Archive"
                    onClick={ () => addToArchiveHandler(note , note._id)}/>
                    <MdDelete name="trash item" className="ptr" title="Trash"
                    onClick={ () => trashNoteHandler(note , note._id)}/>
                  </div>
                </div>
              </li>
            )
        })}
      </ul>
  );
}
