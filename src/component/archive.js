import "../styles.css";
import {
  MdOutlineArchive,
  MdDelete
} from "react-icons/md";
import {useArchive , useTrash} from "../context";
import { Toasters } from "./toasters";

export default function Archive() {
  const { archive , restoreArchiveHandler } = useArchive();
  const { archiveToTrashHandler } = useTrash();

  return (
    <div className="Label">
      <div className="label-header">
        <h4>Archive</h4>
      </div>
      {archive < 1 ? (
        <p className="p3 bold center">
          There is no notes in archive. Please add some notes in archive.
        </p>
      ) : (
        <ul className="flex-col">
          {archive &&
            archive.map((note) => {
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
                      <MdOutlineArchive name="archive item" className="ptr" title="Archive"
                      onClick={ () => restoreArchiveHandler(note , note._id)}/>
                      <MdDelete name="trash item" className="ptr" title="Trash"
                      onClick={ () => archiveToTrashHandler(note , note._id)}/>
                    </div>
                  </div>
                </li>
              )
          })}
      </ul>
      )}
      <Toasters />
    </div>
  );
}
