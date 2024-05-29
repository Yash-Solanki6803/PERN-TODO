import { useState } from "react";

function InputTodo() {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });
      const data = await res.json();
      setDescription("");
      window.location = "/";
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="">
      <form className="flex">
        <textarea
          className="bg-white border border-slate-300 rounded-l-md  w-full px-2 py-1 outline:none focus:outline-none focus:border-emerald-500  font-thin text-slate-600 resize-y max-h-96"
          placeholder="I need to wash dishes"
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
        <button
          className="px-6 py-2 rounded-r-md bg-emerald-500 text-white"
          onClick={onSubmitForm}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default InputTodo;
