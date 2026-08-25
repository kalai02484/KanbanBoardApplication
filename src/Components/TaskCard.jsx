import { useTasks } from "../Context/TaskContext";
import { useDraggable } from "@dnd-kit/react";
import TaskModal from "./TaskModal";
import { useState } from "react";

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { ref, isDragging } = useDraggable({
    id: task.id,
  });

  const style = {
    opacity: isDragging ? 0.5 : 1,
  };

  const handleDelete = (event, id) => {
    event.stopPropagation();
    deleteTask(id);
  };

  return (
    <>
      <article
        className="cursor-grab bg-[#1c1c1e] rounded-md p-4 transition active:cursor-grabbing"
        ref={ref}
        style={style}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-bold text-slate-300">{task.title}</h3>
          <div className="flex gap-4">
            <button
              className="text-sm text-green-500 hover:text-green-700"
              onClick={() => setIsModalOpen(true)}
            >
              Update
            </button>
            <button
              className="text-sm text-red-500 hover:text-red-700"
              onClick={(event) => handleDelete(event, task.id)}
            >
              Delete
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm text-slate-400">{task.description}</p>
      </article>

      {isModalOpen && (
        <TaskModal task={task} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default TaskCard;
