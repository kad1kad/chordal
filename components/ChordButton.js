import { Mode, Chord, Note } from "@tonaljs/tonal";
import styles from "./ChordButton.module.scss";

function ChordButton({ setNotes, keyNote, mode }) {
  const keyChords = Mode.seventhChords(mode, keyNote);

  return (
    <div className={styles.btnWrapper}>
      {keyChords.map((chord, index) => (
        <button
          key={`${chord}-${index}`}
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

          {Chord.get(chord).notes.map((note, index) => (
            <span key={`${note}-${index}`}>
              {note.endsWith("##") ? Note.simplify(note) : note}
            </span>
          ))}
        </button>
      ))}
    </div>
  );
}

export default ChordButton;
