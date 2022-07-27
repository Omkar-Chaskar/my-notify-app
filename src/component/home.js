import "../styles.css";
import { useNotes } from "../context/noteProvider";
import Pin from "./pin";
import Note from "./note";
import Filter from "./filter"
import { Toasters } from "./toasters";

export default function Home() {
  const {notes} = useNotes();
  

  return (
    <div className="home">
      
      {notes < 1 ? (
        <p className="p3 bold center">
          There is no note in present. Please add some notes from Add New Note.
        </p>
      ) : (
        <><Filter /><Pin /><Note /></>
      )}

      <Toasters />
    </div>
  );
}
