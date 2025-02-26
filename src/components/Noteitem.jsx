import React from "react";

export const Noteitem = (props) => {
  const { note } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h6 className="card-title">{note.title}</h6>
          <p className="card-text">
            {note.description} Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
          <i className="fa-solid fa-pen-to-square mx-2"></i>
          <i className="fa-solid fa-trash-can mx-2"></i>
        </div>
      </div>
    </div>
  );
};
