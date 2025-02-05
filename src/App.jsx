import { useEffect, useState } from "react";

import { api } from "./api/api";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    const res = await api.get("/todolist");

    setTasks(res.data);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-zinc-800 flex flex-col gap-y-12 justify-center items-center px-5">
        <h1 className="text-4xl text-gray-300 font-bold">To Do List</h1>
        <Form />
        <List tasks={tasks} />
      </div>
    </>
  );
}

export default App;
