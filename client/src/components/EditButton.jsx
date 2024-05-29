import Proptypes from "prop-types";
import { useState } from "react";

function EditButton({ todo }) {
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const onHandleSubmit = async () => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/${todo.todo_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      });
      setModal(false);
      setDescription("");
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <button
        className="bg-yellow-500 rounded-md text-white max-h-12 px-6 py-1"
        onClick={() => setModal(true)}
      >
        Edit
      </button>
      {modal && (
        <div className="flex lg:px-44 lg:gap-14 fixed w-screen h-screen top-0 left-0 backdrop-blur-md justify-center items-center">
          <div className="bg-slate-300 px-6 lg:px-10  py-6 rounded-lg w-2/3 lg:w-1/2 max-h-1/2 flex flex-col lg:flex-row items-center gap-10">
            <textarea
              className="bg-white border border-slate-300 rounded-md  w-full p-4 outline:none focus:outline-none focus:border-emerald-500 font-thin text-slate-600 resize-y max-h-96"
              placeholder="I need to wash dishes"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            />
            <div className="flex gap-10">
              <button
                className="bg-green-500 rounded-md text-white max-h-12 px-6 py-1"
                onClick={onHandleSubmit}
              >
                Save
              </button>
              <button
                className="bg-red-500 rounded-md text-white max-h-12 px-6 py-1"
                onClick={() => setModal(!modal)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

//...
EditButton.propTypes = {
  todo: Proptypes.shape({
    todo_id: Proptypes.number.isRequired,
    description: Proptypes.string.isRequired,
  }),
};

export default EditButton;
