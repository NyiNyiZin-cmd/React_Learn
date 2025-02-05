import { useState } from "react";

const Form = ({addNewTask}) => {
    const [value, setVale] = useState('')

   const handleSubmit = e => {
        e.preventDefault()

        if(value !== ''){
            addNewTask(value)
        }

        setVale('')
    }

  return (
    <form onSubmit={handleSubmit} className="block w-full md:w-1/2">
      <div className="flex gap-4 w-full">
        <input
          value={value}
          onChange={(e) => setVale(e.target.value)}
          type="text"
          placeholder="Add New Task"
          className="bg-gray-700 text-gray-200 py-2 px-3 rounded-lg w-2/3"
        />
        <button
          type="submit"
          className="bg-amber-600 text-light rounded-lg w-1/3 text-white"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
