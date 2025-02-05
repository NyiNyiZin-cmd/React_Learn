import Card from "./Card";

const List = ({ tasks }) => {
  return (
    <ul className="list-none w-full md:w-1/2 flex flex-col gap-y-4 ">
      <Card tasks={tasks} />
    </ul>
  );
};

export default List;
