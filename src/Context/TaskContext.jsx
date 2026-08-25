import { useContext, useState } from "react";
import { createContext, useEffect } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("kanbanTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  //Add Task
  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  //Update Task
  const updateTask = (id, updatedData) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, ...updatedData } : task,
      ),
    );
  };

  //Delete Task
  const deleteTask = (id) => {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  };

  //Move Task
  const moveTask = (id, status) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === id) {
          return { ...task, status };
        }
        return task;
      }),
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, moveTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}


export function useTasks(){
   return useContext(TaskContext);
}
