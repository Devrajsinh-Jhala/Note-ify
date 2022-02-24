import React from "react";
import "./Note.css";
import { FaTrashAlt } from "react-icons/fa";

const Note = (props) => {
  let timer = 500,
    timeout;
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthsName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();

    const month = monthsName[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        onChange={(event) => updateText(event.target.value, props.note.id)}
        className="note-textarea"
        defaultValue={props.note.text}
      ></textarea>
      <div className="note-footer">
        <p>{formatDate(props.note.time)}</p>
        <FaTrashAlt
          onClick={() => props.deleteNote(props.note.id)}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default Note;
