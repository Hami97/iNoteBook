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
          <a href="#" className="btn btn-primary">
            Open
          </a>
        </div>
      </div>
    </div>
  );
};
