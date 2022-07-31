import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const TasksContext = createContext([]);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("@todolist:tasks")) || []
  );
  const [taskValue, setTaskValue] = useState("");

  const loadAllTasks = () => {
    setTasks(JSON.parse(localStorage.getItem("@todolist:tasks")));
  };

  useEffect(() => {
    loadAllTasks();
  }, []);

  const addNewTask = (task) => {
    localStorage.setItem("@todolist:tasks", JSON.stringify([...tasks, task]));
    toast.success("Tarefa adicionada com sucesso!");
    loadAllTasks();
  };

  return (
    <TasksContext.Provider
      value={{ tasks, taskValue, setTaskValue, addNewTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
