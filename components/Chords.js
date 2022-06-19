import { useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import ChordButtonList from "./ChordButtonList";

function Chords({ keyNote, mode, inst }) {
  const [notes, setNotes] = useState(null);

  return (
    <main>
      <ChordButtonList setNotes={setNotes} keyNote={keyNote} mode={mode} />

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
