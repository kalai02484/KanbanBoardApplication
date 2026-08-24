import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  const handleDelete = (id) => {
    event.stopPropagation();
    console.log(id);
    deleteTask(id);
  };

  return (
    <article className="cursor-grab rounded-md p-4 transition hover:bg-stone-500 active:cursor-grabbing">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold text-slate-300">{task.title}</h3>
        <button
          className="text-sm text-red-500 hover:text-red-700"
          onClick={() => handleDelete(task.id)}
        >
          Delete
        </button>
      </div>
      <p className="mt-2 text-sm text-slate-400">{task.description}</p>
    </article>
  );
};

export default TaskCard;
