import modeNames from "../data/modeNames";

function ModeSelector({ handleMode }) {
  return (
    <select name="mode" id="modeSelect" onChange={handleMode}>
      {modeNames.map((mode, i) => (
        <option key={i} value={mode}>
          {mode}
        </option>
      ))}
    </select>
  );
}

export default ModeSelector;
