import { Link } from "react-router-dom";
import "../styles.css";
import {
  MdOutlineHome,
  MdLabelOutline
} from "react-icons/md";
import {GoArchive , GoTrashcan} from "react-icons/go"

export default function Navigation() {
  return (
    <nav className="sidebar-nav">
      <ul className="sidebar-nav-contain">
        <li className="sidebar-nav-list">
          <Link className="text-dark" to="/">
            <MdOutlineHome className="p4 "/> Home
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to="Label">
            <MdLabelOutline className="p4"/> Label
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to="Archive">
            <GoArchive className="p4"/> Archive
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to="Trash">
          <GoTrashcan className="p4"/> Trash
          </Link>
        </li>
        <li className="sidebar-nav-list">
        <Link to="AddNote" className="button button-primary bold ptr">
            Create New Note
        </Link>
        </li>
      </ul>
    </nav>
  );
}
