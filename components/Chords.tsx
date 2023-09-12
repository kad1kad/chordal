import { useState } from "react";
import { Song, Track, Instrument, Effect, InstrumentType } from "reactronica";
import ChordButtonList from "./ChordButtonList";

type NoteType = {
  name: string;
  velocity?: number;
  duration?: number | string;
  key?: string | number;
};

type ChordsProps = {
  keyNote: string;
  mode: string;
  inst: InstrumentType;
};

function Chords({ keyNote, mode, inst }: ChordsProps) {
  const [notes, setNotes] = useState<NoteType[] | undefined>(undefined);

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
