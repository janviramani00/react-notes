import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true)
  }

  const hide = () => {
    setExpand(false)
  }

  return (
    <>
      <div className="main_note my_notes" onDoubleClick={hide}>
        <form>
            {expand?
          <input className="input"
            type="text"
            placeholder="Title"
            autoComplete="off"
            name="title"
            value={note.title}
            onChange={InputEvent}
          /> : null}
          <br />
          <textarea className="textarea"
            rows=""
            column=""
            placeholder="Write a note..."
            name="content"
            value={note.content}
            onChange={InputEvent}
            onClick={expandIt}
          ></textarea>
          {expand?
          <Button className="plus-sign" onClick={addEvent}>
            <AddIcon></AddIcon>
          </Button>: null }
        </form>
      </div>
    </>
  );
};

export default CreateNote;
