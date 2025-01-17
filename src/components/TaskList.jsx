import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-4xl text-white font-bold text-center">No hay tareas aun</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
