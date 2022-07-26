/* eslint-disable array-callback-return */
import "../styles.css";
import { MdEditNote, MdOutlineArchive, MdDelete } from "react-icons/md";
import { useNotes, useArchive, useTrash, useFilter } from "../context";
import { Link } from "react-router-dom";

export default function Note() {
  const { dispatch } = useNotes();
  const { addToArchiveHandler } = useArchive();
  const { trashNoteHandler } = useTrash();
  const { notes: filteredNote } = useFilter();

  return (
    <ul className="flex-col">
      <p className="p3 bold center">Pin Notes</p>
      {filteredNote.map((note) => {
        if (note.pin === true)
          return (
            <li
              className="card"
              key={note._id}
              style={{ backgroundColor: note.color }}
            >
              <div className="card__primary-action card__primary-action-column">
                <div className="card__primary">
                  <h2 className="note-title">{note.title}</h2>
                  <h5 className="note-content">{note.content}</h5>
                  <div className="flex card-badges bold ">
                    {note.tags.map((tag, index) => {
                      return (
                        <p className="card-label p1 tag" key={index}>
                          {tag}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex flex-align-end">
                    <p className=" p2 bold">{note.priority}</p>
                  </div>
                </div>
              </div>
              <div className="card__actions">
                <p className="text-grey p1">Created on {note.date}</p>
                <div className="card__action-icons p3 text-grey">
                  <Link className="text-dark" to="Edit">
                    <MdEditNote
                      className="ptr"
                      title="Edit"
                      onClick={() =>
                        dispatch({ type: "EDIT_NOTE", payload: note })
                      }
                    />
                  </Link>
                  <MdOutlineArchive
                    name="archive item"
                    className="ptr"
                    title="Archive"
                    onClick={() => addToArchiveHandler(note, note._id)}
                  />
                  <MdDelete
                    name="trash item"
                    className="ptr"
                    title="Trash"
                    onClick={() => trashNoteHandler(note, note._id)}
                  />
                </div>
              </div>
            </li>
          );
      })}
    </ul>
  );
}
