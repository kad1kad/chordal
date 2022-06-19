import { useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import ChordButton from "./ChordButton";

function Chords({ keyNote, setKeyNote, mode, setMode, inst }) {
  const [notes, setNotes] = useState(null);

  return (
    <main>
      <ChordButton setNotes={setNotes} keyNote={keyNote} mode={mode} />

      {/* Reactronica Components */}
      <Song volume={0.9}>
        <Track>
          <Instrument type={inst} notes={notes} />
          <Effect type="feedbackDelay" wet={0.07} />
        </Track>
      </Song>
    </main>
  );
}

export default Chords;
