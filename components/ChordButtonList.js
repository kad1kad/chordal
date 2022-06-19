import { Mode } from "@tonaljs/tonal";
import styles from "./ChordButtonList.module.scss";
import ChordButton from "./ChordButton";

function ChordButtonList({ setNotes, keyNote, mode }) {
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
