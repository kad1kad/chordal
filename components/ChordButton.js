import React, {useMemo} from 'react';
import {Chord, Note} from "@tonaljs/tonal";

export const ChordButton = ({setNotes, chord}) => {
  const chordNames = useMemo(() => Chord.get(chord).notes.map((note, index) => {
    const addValue = index < 3 ? "3" : "4";

    return note.endsWith("##") ? Note.simplify(note + addValue) : note + addValue;
  }), [chord]);

  const handleMouseDown = () => {
      setNotes([
        {
          name: chordNames
        },
      ])
  }

  const handleMouseUp = () => {
    setNotes(null);
  }

  return (
    <button
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      <span>{chord}</span>

      {/* Remove double sharps in single notes */}

      {Chord.get(chord).notes.map((note, index) => (
        <span key={`${note}-${index}`}>
          {note.endsWith("##") ? Note.simplify(note) : note}
        </span>
      ))}
    </button>
  )
}

export default ChordButton;
