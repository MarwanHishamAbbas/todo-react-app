import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const TodoForm = ({ onCloseModal }) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const unique_id = uuid();

  const sumbitFormHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = titleInputRef.current.value;
    dispatch(
      todoActions.addTodo({
        id: unique_id,
        title: enteredTitle,
        description: enteredDescription,
      })
    );
    navigate("/");
    onCloseModal();
  };
  return (
    <form
      onSubmit={sumbitFormHandler}
      className="w-2/5 lg:w-3/4 mx-auto "
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
