import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Navigation from "./component/navigation";
import Home from "./component/home";
import Archive from "./component/archive";
import Label from "./component/label";
import Trash from "./component/trash";
import AddNote from "./component/addnote";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Label" element={<Label />} />
        <Route path="Archive" element={<Archive />} />
        <Route path="Trash" element={<Trash />} />
        <Route path="AddNote" element={<AddNote />} />
      </Routes>
    </div>
  );
}
