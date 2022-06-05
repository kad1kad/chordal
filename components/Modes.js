import { Mode, Chord } from "@tonaljs/tonal";
import { useState } from "react";
import styles from "./Modes.module.scss";

function Modes() {
  const startNotes = [
    "C",
    "C#",
    "D",
    "D#",
    "Eb",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];

  const modeNames = [
    "ionian",
    "dorian",
    "phrygian",
    "lydian",
    "mixolydian",
    "aeolian",
    "locrian",
  ];

  function handleNote(e) {
    const note = e.target.value;
    setKeyNote(note);
  }

  function handleMode(e) {
    const mode = e.target.value;
    setMode(mode);
  }

  const [keyNote, setKeyNote] = useState(startNotes[0]);
  const [mode, setMode] = useState(modeNames[0]);

  const keyChords = Mode.seventhChords(mode, keyNote);

  const chordNotes = Chord.get("Cmaj7");

  console.log(chordNotes);

  return (
    //   Key Selector
    <section className={styles.modesContainer}>
      <div>
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
      </div>

      {keyChords.map((chord, i) => (
        <button key={i}>
          {chord}

          <span>{Chord.get(chord).notes}</span>
        </button>
      ))}
    </section>
  );
}

export default Modes;
