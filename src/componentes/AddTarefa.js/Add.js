import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./StyleAdd.css";

function Add({ onAddTask }) {
  const ENTER_KEY = 13,
    ESCAPE_KEY = 27;
  const [value, setValue] = useState("");

  const apagar = () => {
    setValue("");
  };
  const submit = () => {
    onAddTask(value);
    apagar();
  };
  const keyPressed = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    }
    if (event.which === ESCAPE_KEY) {
      apagar();
    }
  };
  return (
    <input
      className="novoitem"
      placeholder="Digite nova tarefa"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={(event) => keyPressed(event)}
    ></input>
  );
}

Add.propTypes = {
  Add: PropTypes.func.isRequired,
};
export default Add;
