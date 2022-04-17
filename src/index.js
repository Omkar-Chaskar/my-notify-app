import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {NotesProvider} from "./context/noteProvider"

// Call make Server
makeServer();

ReactDOM.render(
    <BrowserRouter>
    <NotesProvider>
    <App />
    </NotesProvider>
    </BrowserRouter>,
  document.getElementById("root")
);
