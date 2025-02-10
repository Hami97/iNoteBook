import React, { useContext, useState } from "react";
import noteContext from "../context/noteContext.jsx";

export const AddNote = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleAddClick = () => {
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    e.preventDefault(); // page do not reload
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h4>Add a Note</h4>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              //   aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              {" "}
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Enter tag"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleAddClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
