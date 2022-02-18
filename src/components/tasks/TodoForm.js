import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

const TodoForm = ({ onCloseModal }) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dispatch = useDispatch();

  const sumbitFormHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = titleInputRef.current.value;
    dispatch(
      todoActions.addTodo({
        title: enteredTitle,
        description: enteredDescription,
      })
    );
    onCloseModal();
  };
  return (
    <form
      onSubmit={sumbitFormHandler}
      className="w-2/5 mx-auto "
      action="submit"
    >
      <div className="flex flex-col mb-5">
        <label htmlFor="Todo">Title</label>
        <input ref={titleInputRef} className="input" type="text" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Description">Description</label>
        <textarea
          ref={descriptionInputRef}
          className="input"
          rows="5"
          type="text"
        />
      </div>
      <div className="flex justify-center">
        <button className="btn mb-0 mt-10">Add Task</button>
      </div>
    </form>
  );
};

export default TodoForm;
