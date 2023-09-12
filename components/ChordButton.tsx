import { Dispatch, SetStateAction, useMemo } from "react";
import { Chord, Note } from "@tonaljs/tonal";

type NoteType = {
  name: string;
  velocity?: number;
  duration?: number | string;
  key?: string | number;
};

type ChordButtonProps = {
  setNotes: Dispatch<SetStateAction<NoteType[] | undefined>>;
  chord: string;
};

export const ChordButton = ({ setNotes, chord }: ChordButtonProps) => {
  const chordNotes = useMemo(
    () =>
      Chord.get(chord).notes.map((note, index) => {
        const addOctave = index < 3 ? "3" : "4";

        return note.endsWith("##")
          ? Note.simplify(note + addOctave)
          : note + addOctave;
      }),
    [chord]
  );

  const handleMouseDown = () => {
    const chordNoteObjects = chordNotes.map((note) => ({ name: note }));
    setNotes(chordNoteObjects);
  };

  const handleMouseUp = () => {
    setNotes(undefined);
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <span>{Chord.detect(chordNotes)[0]}</span>

      {/* Remove double sharps in single notes */}

      {Chord.get(chord).notes.map((note, index) => (
        <span key={`${note}-${index}`}>
          {note.endsWith("##") ? Note.simplify(note) : note}
        </span>
      ))}
    </button>
  );
};

export default ChordButton;
