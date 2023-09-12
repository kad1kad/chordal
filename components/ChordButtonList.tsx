import { Mode } from "@tonaljs/tonal";
import styles from "./ChordButtonList.module.scss";
import ChordButton from "./ChordButton";
import { Dispatch, SetStateAction } from "react";

type NoteType = {
  name: string;
  velocity?: number;
  duration?: number | string;
  key?: string | number;
};

type ChordButtonListProps = {
  setNotes: Dispatch<SetStateAction<NoteType[] | undefined>>;
  keyNote: string;
  mode: string;
};

function ChordButtonList({ setNotes, keyNote, mode }: ChordButtonListProps) {
  const keyChords = Mode.seventhChords(mode, keyNote);

  return (
    <div className={styles.btnWrapper}>
      {keyChords.map((chord, index) => (
        <ChordButton
          key={`${chord}-${index}`}
          chord={chord}
          setNotes={setNotes}
        />
      ))}
    </div>
  );
}

export default ChordButtonList;
