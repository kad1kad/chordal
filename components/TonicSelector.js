import startNotes from "../data/startNotes";

function TonicSelector({ handleNote }) {
  return (
    <select name="startNote" id="startNote" onChange={handleNote}>
      {startNotes.map((startNote, i) => (
        <option key={i} value={startNote}>
          {startNote}
        </option>
      ))}
    </select>
  );
}

export default TonicSelector;
