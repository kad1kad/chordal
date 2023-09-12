import modeNames from "../data/modeNames";

type ModeSelectorProps = {
  handleMode(e: React.ChangeEvent<HTMLSelectElement>): void;
};

function ModeSelector({ handleMode }: ModeSelectorProps) {
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
