export default function PopupCreateProject({ open }) {
  if (!open) return null;
  return (
    <>
      <div id="popup">
        <h1>CreateTask</h1>
      </div>
    </>
  );
}
