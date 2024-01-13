import React from "react";
import "./StyleList.css";
import { PropTypes } from "prop-types";
import * as MdIcons from "react-icons/md";

function List({ todos, onRemove, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <li key={item.id}>
          <span
            className={item.checked ? "checked" : ""}
            onClick={() => onToggle(item)}
          >
            {item.name}
          </span>
          <button type="button" onClick={() => onRemove(item)}>
            <MdIcons.MdDelete />
          </button>
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default List;
