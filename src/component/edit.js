import "../styles.css";
import { useNotes } from "../context";
import { BsPin } from "react-icons/bs";
import { MdPushPin } from "react-icons/md";
import { Toasters } from "./toasters";

export default function EditNote() {
  const { state, dispatch, updateNoteHandler } = useNotes();

  const priority = ["High", "Medium", "Low"];
  const colors = ["Blue", "Green", "Yellow", "Purple", "Orange"];

  return (
    <div className="AddNote">
      <div
        className="add-note-container"
      >
        <section className="note-title-container">
          <textarea
            id="w3review"
            name="notetittle"
            rows="2"
            cols="50"
            placeholder="Note Tittle"
            className="note-textarea"
            value={state.title}
            onChange={(e) =>
              dispatch({ type: "SET_TITLE", payload: e.target.value })
            }
          />
        </section>

        <section className="note-body-container">
          <textarea
            id="w3review"
            name="notebody"
            rows="6"
            cols="50"
            placeholder="Note body"
            className="note-textarea"
            value={state.content}
            onChange={(e) =>
              dispatch({ type: "SET_CONTENT", payload: e.target.value })
            }
          />
        </section>

        <ul className="note-label-container list p1 bold">
          {state.pin ? (
            <li>
              <MdPushPin
                name="pin item"
                className="p3 text-grey ptr"
                title="pinned note"
                onClick={() => {
                  dispatch({ type: "SET_PIN", payload: !state.pin });
                }}
              />
              <p>Unpin Note</p>
            </li>
          ) : (
            <li>
              <BsPin
                name="pin item"
                className="p3 text-grey ptr"
                title="unpined note"
                onClick={() => {
                  dispatch({ type: "SET_PIN", payload: !state.pin });
                }}
              />
              <p>Pin Note</p>
            </li>
          )}
        </ul>

        <section className="note-tags-container tags-input">
          <ul id="tags">
            {state.tags.map((tag, index) => (
              <li key={index} className="tag">
                <span className="tag-title">{tag}</span>
                <span
                  className="tag-close-icon"
                  onClick={() =>
                    dispatch({ type: "REMOVE_TAGS", payload: index })
                  }
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            className="tag-input"
            type="text"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (e.target.value !== "") {
                  dispatch({ type: "ADD_TAGS", payload: e.target.value });
                  e.target.value = "";
                }
              }
            }}
            placeholder="Press enter to add tags"
          />
        </section>
        <section>
          <ul className="note-priority-container list">
            {priority.map((priority, index) => {
              return (
                <li key={index} className="list">
                  <input
                    type="radio"
                    id={priority}
                    name="note_priority"
                    value={priority}
                    checked = {priority === state.priority ? true : false}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_PRIORITY",
                        payload: e.target.value,
                      })
                    }
                  />
                  <label htmlFor={priority}>{priority}</label>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <ul
            className="note-priority-container list"
            style={{ backgroundColor: state.color }}
          >
            {colors.map((color, index) => {
              return (
                <li key={index} className="list">
                  <input
                    type="radio"
                    id={color}
                    name="note_color"
                    value={color}
                    checked= {color === state.color ? true : false}
                    onChange={(e) =>
                      dispatch({ type: "SET_COLOR", payload: e.target.value })
                    }
                  />
                  <label htmlFor={color}>{color}</label>
                </li>
              );
            })}
          </ul>
        </section>

        <button className="button button-secondary ptr bold" 
        onClick={() => {
          dispatch({ type: "SET_DATE", payload: new Date() });
          updateNoteHandler(state, state._id);
          dispatch({ type: "CLEAR_NOTE" });
        }}>
          Update
        </button>
      </div>
      <Toasters />
    </div>
  );
}
