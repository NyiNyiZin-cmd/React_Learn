import { BiXCircle } from "react-icons/bi";

const List = () => {
  return (
    <ul className="list-none w-full md:w-1/2 flex flex-col gap-y-4 ">
        <li className="bg-gray-600 text-gray-200 px-3 py-4 rounded-2xl transition duration-200 hover:bg-gray-700 flex justify-between items-center">
             <p>To Learn React Lesson </p>
             <BiXCircle className="text-2xl"/>
        </li>
        <li className="bg-gray-600 text-gray-200 px-3 py-4 rounded-2xl transition duration-200 hover:bg-gray-700 flex justify-between items-center">
             <p>To Learn React Lesson </p>
             <BiXCircle className="text-2xl"/>
        </li>
        <li className="bg-green-700 text-gray-200 px-3 py-4 rounded-2xl transition duration-200 hover:bg-green-900 flex justify-between items-center">
             <p className="line-through">To Learn React Lesson </p>
             <BiXCircle className="text-2xl"/>
        </li>
        
    </ul>
  )
}

export default List