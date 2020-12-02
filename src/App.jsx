import { useEffect, useState } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // alert karena todo kosong
      showAlert(true, "The Form is Empty", "danger");
    } else if (name && isEditing) {
      // edit todo
    } else {
      // new todo
      showAlert(true, "Todo has been added successfully", "success");
      const newTodo = { id: new Date().getTime().toString(), title: name };
      setList([...list, newTodo]);
      setName("");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const clearList = () => {
    showAlert(true, "Todos has been cleared", "danger");
    setList([]);
  };
  const removeTodo = (id) => {
    showAlert(true, "Todo deleted", "danger");
    setList(list.filter((todo) => todo.id !== id));
  };

  return (
    <section className="flex h-screen bg-gray-200 text-gray-800">
      <div className="p-10 w-1/2 m-auto bg-white shadow-lg rounded text-center">
        <h1 className="font-semibold text-2xl text-center">Simple Todo List</h1>

        <form onSubmit={handleSubmit} className="my-4">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Go To Bed"
              className="p-2 mx-1 flex-grow border-2 bg-gray-100 rounded"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              type="submit"
              className="py-2 px-4 mx-1 flex-none border-2 border-indigo-500 bg-indigo-500 hover:bg-indigo-700 text-white rounded transition duration-200"
              autoFocus
            >
              {isEditing ? "Edit" : "Add"}
            </button>
          </div>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
        </form>

        {list.length > 0 && (
          <div>
            <List items={list} removeTodo={removeTodo} />
            <button
              className="py-2 mt-4 ml-auto w-1/2 bg-red-500 hover:bg-red-700 text-white font-medium tracking-wider rounded transition duration-200"
              onClick={clearList}
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
