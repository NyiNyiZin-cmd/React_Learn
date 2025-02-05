import { BiXCircle } from "react-icons/bi";

const Card = ({ tasks }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <li
          key={index}
          className={
            task.complete
              ? "bg-green-700 text-gray-200 px-3 py-4 rounded-2xl transition duration-200 hover:bg-green-900 flex justify-between items-center"
              : "bg-gray-600 text-gray-200 px-3 py-4 rounded-2xl transition duration-200 hover:bg-gray-700 flex justify-between items-center"
          }
        >
          <p className={task.complete ? "line-through italic" : ""}>
            To Learn React Lesson{" "}
          </p>
          <BiXCircle className="text-2xl" />
        </li>
      ))}
    </>
  );
};

export default Card;
