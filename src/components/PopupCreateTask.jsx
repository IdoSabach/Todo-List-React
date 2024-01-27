import { useState } from "react";
import { projects } from "./PopupCreateProject";

export default function PopupCreateTask({ open, onSelectBtn }) {
  const [taskDescription, setTaskDescription] = useState("");

  const handleInputChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const isSubmitDisabled = taskDescription === "";

  const handelBtnClickSubmit = () => {
    // const newTask = {
    //   desertions: taskDescription,
    //   id: projects[projectId].todo.length,
    // };

    // projects[projectId].todo.push(newTask);
    onSelectBtn();
    setTaskDescription("");
  };

  const handelBtnClickCancel = () => {
    onSelectBtn();
    setTaskDescription("");
  };

  if (!open) return null;

  return (
    <>
      <div id="popup">
        <div className="box-popup">
          <h1>Create Task</h1>
          <div className="input-box">
            <label htmlFor="text">Task Description</label>
            <input
              type="text"
              name="text"
              value={taskDescription}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="box-btn">
            <button
              className={!isSubmitDisabled ? "submit" : null}
              onClick={handelBtnClickSubmit}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
            <button className="cancel" onClick={handelBtnClickCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
