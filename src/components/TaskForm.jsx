import { useState, useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";
export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const titleInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
    titleInputRef.current.focus();
  };
  return (
    <div className=" max-w-md mx-auto rounded-md">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-white mb-3 font-bold">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          ref={titleInputRef}
        ></input>
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe una descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-700 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
