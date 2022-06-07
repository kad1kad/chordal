import { Mode, Chord, Note } from "@tonaljs/tonal";
import { useState, useEffect } from "react";
import styles from "./Modes.module.scss";
import { Song, Track, Instrument, Effect } from "reactronica";

function Modes({ isPlaying }) {
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

  const [notes, setNotes] = useState(null);

  return (
    //   Key Selector
    <section className={styles.modesContainer}>
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
      </div>

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
          <Instrument type="amSynth" notes={notes} onLoad={(buffers) => {}} />
          <Effect type="feedbackDelay" wet={0.1} />
        </Track>
      </Song>
    </section>
  );
}

export default Modes;
