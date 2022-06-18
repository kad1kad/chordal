import styles from "./Chords.module.scss";
import startNotes from "../data/startNotes";
import modeNames from "../data/modeNames";

function Header({ setKeyNote, setMode, setInst }) {
  const instrumentSelection = ["amSynth", "fmSynth"];

  function handleInst(e) {
    const instrument = e.target.value;
    setInst(instrument);
  }

  function handleNote(e) {
    const note = e.target.value;
    setKeyNote(note);
  }

  function handleMode(e) {
    const mode = e.target.value;
    setMode(mode);
  }
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>Chordal</h1>
        <h1>&#x2058;</h1>
      </div>

      <h2>Keys, Modes and Chords with Sound</h2>

      {/* //   Key Selector */}
      <div className={styles.dropDown}>
        <select name="startNote" id="startNote" onChange={handleNote}>
          {startNotes.map((startNote, i) => (
            <option key={i} value={startNote}>
              {startNote}
            </option>
          ))}
        </select>

        {/* Mode Selector */}
        <select name="mode" id="modeSelect" onChange={handleMode}>
          {modeNames.map((mode, i) => (
            <option key={i} value={mode}>
              {mode}
            </option>
          ))}
        </select>

        {/* {Instrument Selector} */}
        <select name="instrument" id="instrumentSelect" onChange={handleInst}>
          {instrumentSelection.map((instrumentSelect, i) => (
            <option key={i} value={instrumentSelect}>
              {instrumentSelect}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Header;
