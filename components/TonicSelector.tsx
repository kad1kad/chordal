import startNotes from "../data/startNotes";

type TonicSelectorProps = {
  handleNote: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function TonicSelector({ handleNote }: TonicSelectorProps) {
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
