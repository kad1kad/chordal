import { Key } from "@tonaljs/tonal";
import styles from "./ChordProgression.module.scss";

function ChordProgression() {
  const keyChords = Key.majorKey("C");

  console.log(keyChords);

  return (
    <div className={styles.chordsContainer}>
      <h2>Chords in the key of {keyChords.tonic}</h2>
      {keyChords.chords.map((chord, i) => (
        <div key={i}>
          <button className={styles.chordBtn}>
            {keyChords.grades[i]} {chord}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ChordProgression;
