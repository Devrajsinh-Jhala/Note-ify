import React from "react";
import Note from "../Note/Note";
import "./NotesContainer.css";

const NotesContainer = (props) => {
  const reverseArray = (array) => {
    const returnArray = [];
    for (let i = array.length - 1; i >= 0; --i) {
      returnArray.push(array[i]);
    }
    return returnArray;
  };

  const notes = reverseArray(props.notes);
  return (
    <div className="note-container">
      <h2>Your Notes</h2>
      <div className="note-container_notes">
        {notes.length ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <div className="empty-state">
            <img
              src={require("../../assests/empty.png")}
              alt="Empty List"
              className="empty-image"
            />
            <label>No Notes added right now</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesContainer;
