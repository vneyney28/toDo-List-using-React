import { useState } from "react";
import InputArea from "./InputArea";
import List from "./List";

function Form() {
  var [task, setState] = useState("");

  var [listItems, updateListArr] = useState([]);

  function handleChange(event) {
    var val = event.target.value;
    setState(val);
  }
  function handleClick(task) {
    updateListArr((prevItems) => [...prevItems, task]);
  }

  function deleteitem(remove) {
    updateListArr((prevItems) =>
      prevItems.filter((listItems, index) => index != remove)
    );
  }

  return (
    <div className="form">
      <InputArea onAdd={handleClick} />
      <div>
        <ul>
          {listItems.map((t, index) => (
            <List key={index} id={index} del={deleteitem} text={t} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Form;
