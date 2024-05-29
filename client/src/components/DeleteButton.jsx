import Proptypes from "prop-types";
import { useState } from "react";

function DeleteButton({ todo }) {
  const [modal, setModal] = useState(false);

  const onHandleSubmit = async () => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/todos/${todo.todo_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setModal(false);
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <button
        className="bg-red-500 rounded-md text-white max-h-12 px-6 py-1"
        onClick={() => setModal(true)}
      >
        Delete
      </button>
      {modal && (
        <div className="flex lg:px-44 lg:gap-14 fixed w-screen h-screen top-0 left-0 backdrop-blur-md justify-center items-center">
          <div className="bg-slate-300 px-6 lg:px-10  py-6 rounded-lg w-2/3 lg:w-1/2 max-h-1/2 flex flex-col lg:flex-row items-center gap-10">
            <p className="w-full">Are you sure you want to delete this task?</p>
            <div className="flex gap-10">
              <button
                className="bg-red-500 rounded-md text-white max-h-12 px-6 py-1"
                onClick={onHandleSubmit}
              >
                Delete
              </button>
              <button
                className="bg-green-500 rounded-md text-white max-h-12 px-6 py-1"
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

DeleteButton.propTypes = {
  todo: Proptypes.shape({
    todo_id: Proptypes.number.isRequired,
    description: Proptypes.string.isRequired,
  }),
};

export default DeleteButton;
