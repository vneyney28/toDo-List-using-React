import React, { useState } from "react";

function InputArea(props) {
  var [task, setState] = useState("");

  function handleChange(event) {
    var val = event.target.value;
    setState(val);
  }

  return (
    <div>
      <input
        value={task}
        onChange={handleChange}
        type="text"
        placeholder="New Task"
      />
      <button>
        <span
          onClick={() => {
            props.onAdd(task);
            setState("");
          }}
        >
          Add
        </span>
      </button>
    </div>
  );
}

export default InputArea;
