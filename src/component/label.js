import "../styles.css";
import { BsPin } from "react-icons/bs";
import {
  MdOutlineColorLens,
  MdLabelOutline,
  MdOutlineArchive,
  MdDeleteOutline,
  MdOutlineEdit
} from "react-icons/md";
export default function Label() {
  return (
    <div className="Label">
      <div className="label-header">
      <h4>Label 1</h4>
      <MdOutlineEdit className="p4 text-grey ptr"/>
      </div>
      <ul className="flex-col">
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
            <BsPin name="pin item" className="badge-up-right-corner p3 text-grey ptr" />
            <div className="card__primary">
              <h2 className="p3 bold">Note Title....</h2>
              <p className="p2">Note body....</p>
              <div className="flex card-badges">
                <p className="card-label p1">Label 1</p>
              </div>
            </div>
          </div>
          <div className="card__actions">
            <p className="text-grey p1">Created on 26/10/2021</p>
            <div className="card__action-icons p3 text-grey">
              <MdOutlineColorLens className="ptr"/>
              <MdLabelOutline className="ptr"/>
              <MdOutlineArchive className="ptr"/>
              <MdDeleteOutline className="ptr"/>
            </div>
          </div>
        </li>
      </ul>
      
      <div className="label-header">
      <h4>Label 2</h4>
      <MdOutlineEdit className="p4 text-grey ptr"/>
      </div>
      <ul className="flex-col">
        <li className="card">
          <div className="card__primary-action card__primary-action-column">
            <BsPin name="pin item" className="badge-up-right-corner p3 text-grey ptr" />
            <div className="card__primary">
              <h2 className="p3 bold">Note Title....</h2>
              <p className="p2">Note body....</p>
              <div className="flex card-badges">
                <p className="card-label p1">Label 2</p>
              </div>
            </div>
          </div>
          <div className="card__actions">
            <p className="text-grey p1">Created on 26/10/2021</p>
            <div className="card__action-icons p3 text-grey">
              <MdOutlineColorLens className="ptr"/>
              <MdLabelOutline className="ptr"/>
              <MdOutlineArchive className="ptr"/>
              <MdDeleteOutline className="ptr"/>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
