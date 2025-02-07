import { BiXCircle } from "react-icons/bi";

const Card = ({ tasks, deleteTask, updateTask }) => {

    const handleDel = id => {
        deleteTask(id)
    }

  return (
    <>
      {tasks.map((task, index) => (
        <li
          onDoubleClick={() => updateTask(task.id, !task.complete)}
          key={index}
          className={
            task.complete
              ? "bg-green-700 text-gray-200 px-3 py-4 rounded-2xl transition duration-200 hover:bg-green-900 flex justify-between items-center"
              : "bg-gray-600 text-gray-200 px-3 py-4 rounded-2xl transition duration-200 hover:bg-gray-700 flex justify-between items-center"
          }
        >
          <p className={task.complete ? "line-through italic" : ""}>
            {task.task}
          </p>
          <BiXCircle className="text-2xl" onClick={() => handleDel(task.id)} />
        </li>
      ))}
    </>
  );
};

export default Card;
