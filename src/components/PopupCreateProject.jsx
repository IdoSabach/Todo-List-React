import { useState } from "react";

export let projects = [
  {
    title: "Today",
    id: 0,
    todo: [
      { desertions: "Wake up at six in the morning" , id:0 },
      { desertions: "Wake up at six in the morning" , id:1 },
    ],
  },
  {
    title: "This Week",
    id: 1,
    todo: [{ desertions: "Wake up at six in the morning" , id:0}],
  },
  {
    title: "This Month",
    id: 2,
    todo: [{ desertions: "Wake up at six in the morning" ,id:0}],
  },
];

export default function PopupCreateProject({ open, onSelectBtn }) {
  const [projectName, setProjectName] = useState("");

  if (!open) return null;

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  const isSubmitDisabled = projectName === "";

  const handelBtnClickSubmit = () => {
    const newProject = {
      title: projectName,
      id: projects.length,
      todo: [],
    };
    projects = [...projects, newProject];
    onSelectBtn();
    setProjectName("");
  };

  const handelBtnClickCancel = () => {
    onSelectBtn();
    setProjectName("");
  };
  return (
    <>
      <div id="popup">
        <div className="box-popup">
          <h1>Create Project</h1>
          <div className="input-box">
            <label htmlFor="text">Project Name</label>
            <input
              type="text"
              name="text"
              value={projectName}
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
