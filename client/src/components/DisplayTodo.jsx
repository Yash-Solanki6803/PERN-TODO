import { useState, useEffect } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
function DisplayTodo() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const res = await fetch("http://localhost:5000/todos");
    const data = await res.json();
    const sortedData = data.sort((a, b) => a.todo_id - b.todo_id);
    setTodos(sortedData);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <article className=" h-full w-full flex flex-col gap-5 overflow-y-auto overflow-x-hidden py-3">
      {todos.map((todo, index) => (
        <div
          className={
            `flex flex-col lg:flex-row lg:gap-10 pt-5 ` +
            (index == 0 ? "" : "border-t border-slate-400")
          }
          key={todo.todo_id}
        >
          <div className="flex w-full  b gap-2 lg:gap-10">
            <h3>{index + 1}.</h3>
            <p className="w-full text-justify">{todo.description}</p>
          </div>
          <div className="mt-2 b lg:mt-0 w-1/3 xl:w-1/4 mr-10 flex gap-5 justify-between">
            <EditButton todo={todo} />
            <DeleteButton todo={todo} />
          </div>
        </div>
      ))}
    </article>
  );
}

export default DisplayTodo;
