import "../styles.css";
import { useNotes } from "../context/noteProvider";
import Pin from "./pin";
import Note from "./note";

export default function Home() {
  const {state} = useNotes();

  return (
    <div className="home">
      
      {state.notes < 1 && state.pin < 1  ? (
        <p className="p3 bold center">
          There is no note in present. Please add some notes from Add New Note.
        </p>
      ) : (
        <><Pin /><Note /></>
      )}

    </div>
  );
}
