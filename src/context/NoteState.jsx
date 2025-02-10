import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "67992545a20b106bd400ac50",
      "user": "67916914805d0643621f17a2",
      "title": "New Note",
      "description": "Hello.",
      "tag": "General",
      "date": "2025-01-28T18:43:17.831Z",
      "__v": 0,
    },
    {
      "_id": "67a264870318a06ddcd0e093",
      "user": "67916914805d0643621f17a2",
      "title": "New Assignment",
      "description": "Nice One.",
      "tag": "Learning",
      "date": "2025-02-04T19:03:35.320Z",
      "__v": 0,
    },
    {
      "_id": "67992545a20b106bd400ac50",
      "user": "67916914805d0643621f17a2",
      "title": "New Note",
      "description": "Hello.",
      "tag": "General",
      "date": "2025-01-28T18:43:17.831Z",
      "__v": 0,
    },
    {
      "_id": "67992545a20b106bd400ac50",
      "user": "67916914805d0643621f17a2",
      "title": "New Note",
      "description": "Hello.",
      "tag": "General",
      "date": "2025-01-28T18:43:17.831Z",
      "__v": 0,
    },
    {
      "_id": "67992545a20b106bd400ac50",
      "user": "67916914805d0643621f17a2",
      "title": "New Note",
      "description": "Hello.",
      "tag": "General",
      "date": "2025-01-28T18:43:17.831Z",
      "__v": 0,
    },
    {
      "_id": "67992545a20b106bd400ac50",
      "user": "67916914805d0643621f17a2",
      "title": "New Note",
      "description":
        "Hello.  Lorem Ipsum is simply dummy text of the printing and typesettingindustry",
      "tag": "General",
      "date": "2025-01-28T18:43:17.831Z",
      "__v": 0,
    },
    {
      "_id": "67992545a20b106bd400ac50",
      "user": "67916914805d0643621f17a2",
      "title": "New Note",
      "description": "Hello.",
      "tag": "General",
      "date": "2025-01-28T18:43:17.831Z",
      "__v": 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = (title, description, tag) => {
    //TODO: API call

    const note = {
      "_id": new Date().getTime().toString(),
      "user": "67916914805d0643621f17a2",
      "title": title,
      "description": description,
      "tag": tag,
      "date": new Date().toISOString(),
      "__v": 0,
    };
    setNotes([...notes, note]);
    //setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = () => {};

  //Edit a Note
  const editNote = () => {};

  //View a note
  const viewNote = () => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
