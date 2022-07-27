import "../styles.css";
import { MdRestore, MdDelete } from "react-icons/md";
import { useTrash } from "../context";
import { Toasters } from "./toasters";

export default function Trash() {
  const { trash, removeFromTrashHandler, restoreFromTrashHandler } = useTrash();

  return (
    <div className="Label">
      <div className="label-header">
        <h4>Trash</h4>
      </div>
      {trash < 1 ? (
        <p className="p3 bold center">There is no notes in Trash.</p>
      ) : (
        <ul className="flex-col">
          {trash &&
            trash.map((note) => {
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
                      <MdRestore
                        name="restore item"
                        className="ptr"
                        title="Restore"
                        onClick={() => restoreFromTrashHandler(note, note._id)}
                      />

                      <MdDelete
                        name="remove item"
                        className="ptr"
                        title="Remove"
                        onClick={() => removeFromTrashHandler(note, note._id)}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
      <Toasters />
    </div>
  );
}
