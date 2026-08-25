import React, { useEffect, useState } from "react";
import { useTasks } from "../Context/TaskContext";

const TaskModal = ({task, onClose}) => {

  const { updateTask, deleteTask } = useTasks();

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
  }, [task]);

  const handleSave = () => {
    updateTask(task.id, {
      title,
      description,
      status,
    });

    onClose();
  };

  const handleDelete = () => {
    deleteTask(task.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-[#2c2c2e] p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Task Details</h2>

          <button onClick={onClose} className="text-xl text-slate-500">
            ×
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full rounded-lg border p-3"
            placeholder="Task title"
          />

          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="min-h-32 w-full rounded-lg border p-3"
            placeholder="Description"
          />

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="w-full rounded-lg border p-3 bg-[#2c2c2e]"
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-100 px-4 py-2 text-red-600"
          >
            Delete
          </button>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="rounded-lg bg-slate-100 px-4 py-2 text-amber-600"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-0 focus:outline-none focus:ring-purple-200 rounded-md font-medium text-sm px-4 py-2.5 text-center leading-5 cursor-pointer transition-all duration-300 ease-in-out"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
