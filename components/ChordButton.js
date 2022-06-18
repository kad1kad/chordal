import { Mode, Chord, Note, ChordDetect } from "@tonaljs/tonal";
import styles from "./ChordButton.module.scss";

function ChordButton({ setNotes, keyNote, setKeyNote, mode, setMode }) {
  function handleNote(e) {
    const note = e.target.value;
    setKeyNote(note);
  }

  function handleMode(e) {
    const mode = e.target.value;
    setMode(mode);
  }

  const keyChords = Mode.seventhChords(mode, keyNote);
  return (
    <div className={styles.btnWrapper}>
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
          onTouchStart={() =>
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
          onTouchEnd={() => setNotes(null)}
        >
          <span>{chord}</span>

          {/* Remove double sharps in single notes */}

          {Chord.get(chord).notes.map((note, i) => (
            <span key={i}>
              {note.endsWith("##") ? Note.simplify(note) : note}
            </span>
          ))}
        </button>
      ))}
    </div>
  );
}

export default ChordButton;
