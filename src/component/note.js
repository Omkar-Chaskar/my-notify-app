import "../styles.css";
import { BsPin } from "react-icons/bs";
import {
  MdOutlineColorLens,
  MdLabelOutline,
  MdOutlineArchive,
  MdDeleteOutline,
  MdPushPin,
  MdDelete
} from "react-icons/md";
import { useNotes } from "../context/noteProvider";

export default function Note() {
  const {state , dispatch} = useNotes();

  return (
      <ul className="flex-col">
        <p className="p3 bold center">
          All Notes
        </p>
        {state.notes.map( note => {
          return (
            <li className="card" key={note.id}>
              <div className="card__primary-action card__primary-action-column">
                {state.pin &&
                  state.pin.some((item) => note.id === item.id) ? (
                    <MdPushPin name="pin item" className="badge-up-right-corner p3 text-grey ptr" 
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_PIN_NOTES",
                          payload: note
                        })
                      }
                    />
                  ) : (
                    <BsPin name="pin item" className="badge-up-right-corner p3 text-grey ptr" 
                      onClick={() =>
                        dispatch({ type: "ADD_TO_PIN_NOTES", payload: note })
                      }
                    />
                  )}
                <div className="card__primary">
                  <h2 className="p3 bold">{note.title}</h2>
                  <p className="p2">{note.body}</p>
                  <div className="flex card-badges">
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
                  <MdOutlineColorLens className="ptr"/>
                  <MdLabelOutline className="ptr"/>

                  <MdOutlineArchive name="archive item" className="ptr" 
                      onClick={() =>
                        dispatch({ type: "ADD_TO_ARCHIVE_NOTES", payload: note })
                      }
                  />

                  {state.trash &&
                  state.trash.some((item) => note.id === item.id) ? (
                    <MdDelete name="trash item" className="ptr" 
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_TRASH_NOTES",
                          payload: note
                        })
                      }
                    />
                  ) : (
                    <MdDeleteOutline name="trash item" className="ptr" 
                      onClick={() =>
                        dispatch({ type: "ADD_TO_TRASH_NOTES", payload: note })
                      }
                    />
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
  );
}
