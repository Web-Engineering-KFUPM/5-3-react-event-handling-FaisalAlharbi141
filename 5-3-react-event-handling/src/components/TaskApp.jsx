import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {

  const handleSubmit = () => {
    const [tasks, setTasks] = useState([]);
  };

  const handleCaptuer = () => {
    const [text, setText] = useState("");
  };

  
  const handleDelete = (id) => {
    // TODO: filter tasks by id to remove the clicked one
    <button onClick={}></button>
  };

  
  const handleClearAll = () => {
    // TODO: set tasks to empty array
    <button onClick={handleClearAll}>Clear All</button>
  };

  return (
    <section className="card">
      {/*Controlled Input */}
      <div className="inputRow">
        <input
          type="text"
          placeholder="Type a task..."
          className="input"
          // TODO: value={text}
          value={text}
          // TODO: onChange={(e) => setText(e.target.value)}
          onChange={(e)=> setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button className="btn btn--primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/*Render Task List and Enable Delete */}
      {/*Pass tasks and onDelete */}
      <TaskList /* tasks={tasks} onDelete={handleDelete} */ />

      {/*Clear All */}
      <div className="footerRow">
        <button className="btn btn--ghost" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
