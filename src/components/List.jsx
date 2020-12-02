import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const List = ({ items, removeTodo }) => {
  return (
    <div className="grid grid-cols-1 text-gray-800">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article
            key={id}
            className="px-2 py-3 flex justify-between align-middle"
          >
            <p className="font-medium text-lg">{title}</p>
            <div>
              <button className="mx-1 text-xl text-green-500 hover:text-green-700">
                <AiOutlineEdit />
              </button>
              <button
                className="mx-1 text-xl text-red-500 hover:text-red-700"
                onClick={() => removeTodo(id)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
