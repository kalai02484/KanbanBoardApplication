import { Button } from "flowbite-react";
import React from "react";

const App = () => {
  return (
    <>
      <h1 className="text-xl font-light text-[#f5f0e8] text-center mb-5">
        Task Mangagement Application - Kanban Board
      </h1>
      <div className="bg-[#2c2c2e] py-4 px-6 rounded-xl flex justify-between items-center">
        <div className="">
          <h4 className="text-lg font-medium text-[#f5f0e8]">
            Welcome to MyTODO
          </h4>
        </div>
        <div className="">
          <Button
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-0 focus:outline-none focus:ring-purple-200  font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 cursor-pointer transition-all duration-300 ease-in-out"
          >
            Add Task
          </Button>
        </div>
      </div>
    </>
  );
};

export default App;
