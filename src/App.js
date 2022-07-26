import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Navigation from "./component/navigation";
import Home from "./component/home";
import Archive from "./component/archive";
import Trash from "./component/trash";
import AddNote from "./component/addnote";
import EditNote from "./component/edit";
import Login from "./component/login";
import Signup from "./component/signup";
import { useAuth } from "./context";

export default function App() {
  const { user } = useAuth();
  const { loginStatus } = user;

  return (
    <div className="App">
      <Header />
      {loginStatus ? (
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Archive" element={<Archive />} />
            <Route path="Trash" element={<Trash />} />
            <Route path="AddNote" element={<AddNote />} />
            <Route path="Edit" element={<EditNote />} />
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
          </Routes>
        </>
      ) : (
        <Login /> 
      )}
    </div>
  );
}
