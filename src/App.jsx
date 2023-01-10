import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((val, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div>
      <CreateNote passNote={addNote}></CreateNote>
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
    </div>
  );
};

export default App;
