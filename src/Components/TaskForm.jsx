import React, { useState } from "react";
import { useTasks } from "../Context/TaskContext";

const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    addTask({
      title,
      description,
      status,
      priority
    });

    setTitle("");
    setDescription("");
    setStatus("todo");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" rounded-xl bg-[#2c2c2e] pt-6 pb-2 px-6 rounded-xl"
    >
      <div className="flex justify-between items-center">
        <div className="">
          <h4 className="text-lg font-medium text-[#f5f0e8]">
            Please add a task
          </h4>
        </div>
        <div className="">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-0 focus:outline-none focus:ring-purple-200 rounded-md font-medium text-sm px-4 py-2.5 text-center leading-5 cursor-pointer transition-all duration-300 ease-in-out"
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 my-6">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border px-4 py-2 bg-[#2c2c2e]"
        >
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="rounded-lg border px-4 py-2 bg-[#2c2c2e]"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      <textarea
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="rounded-lg border px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </form>
  );
};

export default TaskForm;
