import { Mode, Chord, Note } from "@tonaljs/tonal";
import { useState } from "react";
import styles from "./Modes.module.scss";
import { Song, Track, Instrument, Effect } from "reactronica";

function Modes() {
  const startNotes = [
    "C",
    "C#",
    "D",
    "D#",
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
    "Ionian",
    "Dorian",
    "Phrygian",
    "Lydian",
    "Mixolydian",
    "Aeolian",
    "Locrian",
  ];

  const instrumentSelection = ["amSynth", "fmSynth"];

  function handleNote(e) {
    const note = e.target.value;
    setKeyNote(note);
  }

  function handleMode(e) {
    const mode = e.target.value;
    setMode(mode);
  }

  function handleInst(e) {
    const instrument = e.target.value;
    setInst(instrument);
  }

  const [keyNote, setKeyNote] = useState(startNotes[0]);
  const [mode, setMode] = useState(modeNames[0]);

  const keyChords = Mode.seventhChords(mode, keyNote);

  const [notes, setNotes] = useState(null);

  const [inst, setInst] = useState("amSynth");

  return (
    <div className={styles.modesContainer}>
      {/* Header */}
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

      {/* Chord Button */}
      {keyChords.map((chord, i) => (
        <button
          key={i}
          onMouseDown={() =>
            setNotes([
              {
                name: [
                  Chord.get(chord).notes[0].endsWith("##")
                    ? Note.simplify(Chord.get(chord).notes[0] + "3")
                    : Chord.get(chord).notes[0] + "3",
                  Chord.get(chord).notes[1].endsWith("##")
                    ? Note.simplify(Chord.get(chord).notes[1] + "3")
                    : Chord.get(chord).notes[1] + "3",
                  Chord.get(chord).notes[2].endsWith("##")
                    ? Note.simplify(Chord.get(chord).notes[2] + "3")
                    : Chord.get(chord).notes[2] + "3",
                  Chord.get(chord).notes[3].endsWith("##")
                    ? Note.simplify(Chord.get(chord).notes[3] + "4")
                    : Chord.get(chord).notes[3] + "4",
                ],
              },
            ])
          }
          onMouseUp={() => setNotes(null)}
        >
          <span>{chord}</span>

          {/* Remove double sharps */}
          <span>
            {Chord.get(chord).notes[0].endsWith("##")
              ? Note.simplify(Chord.get(chord).notes[0])
              : Chord.get(chord).notes[0]}
          </span>

          <span>
            {Chord.get(chord).notes[1].endsWith("##")
              ? Note.simplify(Chord.get(chord).notes[1])
              : Chord.get(chord).notes[1]}
          </span>

          <span>
            {Chord.get(chord).notes[2].endsWith("##")
              ? Note.simplify(Chord.get(chord).notes[2])
              : Chord.get(chord).notes[2]}
          </span>

          <span>
            {Chord.get(chord).notes[3].endsWith("##")
              ? Note.simplify(Chord.get(chord).notes[3])
              : Chord.get(chord).notes[3]}
          </span>
        </button>
      ))}

      {/* Reactronica Components */}
      <Song>
        <Track>
          <Instrument type={inst} notes={notes} onLoad={(buffers) => {}} />
          <Effect type="feedbackDelay" wet={0.07} />
        </Track>
      </Song>
    </div>
  );
}

export default Modes;
