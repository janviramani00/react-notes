import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note my_notes">
        <h1> {props.title} </h1>
        <br />
        <p> {props.content}</p>
        <button className="btn" onClick={deleteNote}>
          <DeleteOutlineIcon className="deleteIcon"></DeleteOutlineIcon>
        </button>
      </div>
    </>
  );
};

export default Note;
