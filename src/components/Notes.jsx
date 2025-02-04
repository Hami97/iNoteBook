import React, { useContext } from "react";
import { Noteitem } from "./NoteItem.jsx";
import noteContext from "../context/noteContext.jsx";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div className="row my-3">
      <h4>Your Notes</h4>
      {notes.map((note) => (
        <Noteitem note={note} key={note.id || note._id} />
      ))}
    </div>
  );
};
