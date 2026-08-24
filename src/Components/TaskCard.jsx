import React from "react";

const TaskCard = () => {
  return <article className="cursor-grab rounded-md p-4 transition hover:bg-stone-500 active:cursor-grabbing">
    <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold text-slate-300">Task</h3>
        <button>Delete</button>
    </div>
    <p className="mt-2 text-sm text-slate-400">Description</p>
  </article>;
};

export default TaskCard;
