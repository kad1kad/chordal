import { useState } from "react";
import styles from "./Modes.module.scss";
import { Song, Track, Instrument, Effect } from "reactronica";
import ChordButton from "./ChordButton";
import startNotes from "../data/startNotes";
import modeNames from "../data/modeNames";

function Chords({ keyNote, setKeyNote, mode, setMode, inst }) {
  const [notes, setNotes] = useState(null);

  return (
    <div className={styles.modesContainer}>
      <ChordButton
        startNotes={startNotes}
        modeNames={modeNames}
        notes={notes}
        setNotes={setNotes}
        keyNote={keyNote}
        setKeyNote={setKeyNote}
        mode={mode}
        setMode={setMode}
      />

      {/* Reactronica Components */}
      <Song volume={0.9}>
        <Track>
          <Instrument type={inst} notes={notes} />
          <Effect type="feedbackDelay" wet={0.07} />
        </Track>
      </Song>
    </div>
  );
}

export default Chords;
