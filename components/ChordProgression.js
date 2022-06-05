import { Key } from "@tonaljs/tonal";
import styles from "./ChordProgression.module.scss";
import { useState } from "react";

function ChordProgression() {
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

  function handleChange(e) {
    const note = e.target.value;
    setKeyNote(note);
  }

  const [keyNote, setKeyNote] = useState(startNotes[0]);

  const keyChords = Key.majorKey(keyNote);

  console.log(keyChords);
  return (
    <div className={styles.chordsContainer}>
      <label htmlFor="start-note">Chords in the key of {keyChords.tonic}</label>

      <div className="custom-select">
        <select name="start-note" id="start-note" onChange={handleChange}>
          {startNotes.map((startNote, i) => (
            <option key={i} value={startNote}>
              {startNote}
            </option>
          ))}
        </select>
      </div>

      {keyChords.chords.map((chord, i) => (
        <div key={i}>
          <button className={styles.chordBtn}>
            <span>{keyChords.grades[i]} </span>
            <span>{chord}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChordProgression;
