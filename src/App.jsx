import { Button } from "flowbite-react";
import React from "react";
import Column from "./Components/Column";

const App = () => {
  return (
    <>
      <h1 className="text-xl text-[#0bf6ee] font-bold text-center mb-5">
        Task Mangagement Application - Kanban Board
      </h1>
      <div className="bg-[#2c2c2e] py-4 px-6 rounded-xl flex justify-between items-center">
        <div className="">
          <h4 className="text-lg font-medium text-[#f5f0e8]">
            Please add a task
          </h4>
        </div>
        <div className="">
          <Button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-linear-to-l focus:ring-0 focus:outline-none focus:ring-purple-200 rounded-md font-medium text-sm px-4 py-2.5 text-center leading-5 cursor-pointer transition-all duration-300 ease-in-out"
          >
            Add Task
          </Button>
        </div>
      </div>

      <div className="bg-[#2c2c2e] mx-auto p-4 md:p-6 mt-4 rounded-xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Column status="todo" title="To Do" />
          <Column status="inprogress" title="In Progress" />
          <Column status="done" title="Done" />
        </div>
      </div>
    </>
  );
};

export default App;
