import "./App.css";
import { PropTypes } from "prop-types";
import React, { useState } from "react";
import Add from "./componentes/AddTarefa.js/Add";
import List from "./componentes/Lista/List";

function App() {
  const [todos, setTodos] = useState([]);
  const onAddTask = (value) => {
    setTodos([
      ...todos,

      {
        id: new Date().getTime(),
        name: value,
        checked: false,
      },
    ]);
  };

  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const onRemove = (todo) => {
    let notRemove = [];
    for (let i = 0; i < todos.length; i++) {
      if (todo.id !== todos[i].id) {
        notRemove.push(todos[i]);
      }
    }
    setTodos(notRemove);
  };

  return (
    <div className="Lista" id="app">
      <header>
        <h1 className="titulo">Lista de Tarefas</h1>
      </header>
      <div className="formulario">
        <Add onAddTask={onAddTask} />
        <List todos={todos} onRemove={onRemove} onToggle={onToggle}></List>
      </div>
    </div>
  );
}

export default App;
