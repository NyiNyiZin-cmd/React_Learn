import { useEffect, useState } from "react";
import uuid from "react-uuid";

import { api } from "./api/api";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoaing] = useState(false);

  const fetchTask = async () => {
    setLoaing(true);
    const res = await api.get("/todolist");

    setTasks(res.data);
    setLoaing(false);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const addNewTask = async (task) => {
    const newTask = {
      id: uuid(),
      task: task,
      complete: false,
    };

    const res = await api.post("/todolist", newTask);

    setTasks([...tasks, res.data]);
  };

  const deleteTask = async (id) => {
    const res = await api.delete(`/todolist/${id}`);

    if (res.statusText == "OK") {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const updateTask = async (id, complete) => {
    const res = await api.patch(`/todolist/${id}`, {
      complete,
    });

    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          return {
            id: task.id,
            task: task.task,
            complete: !task.complete,
          };
        }

        return task;
      })
    );
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-800 flex flex-col gap-y-12 justify-center items-center px-5">
        <h1 className="text-4xl text-gray-300 font-bold">To Do List</h1>
        <Form addNewTask={addNewTask} />
        {loading ? (
          <h1 className="text-2xl text-center my-4 text-gray-300">
            is Loading ...
          </h1>
        ) : (
          <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
        )}
      </div>
    </>
  );
}

export default App;
