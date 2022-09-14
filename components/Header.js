import styles from "./Header.module.scss";

import TonicSelector from "./TonicSelector";
import ModeSelector from "./ModeSelector";
import InstrumentSelector from "./InstrumentSelector";

function Header({ setKeyNote, setMode, setInst }) {
  function handleInst(e) {
    const instrument = e.target.value;
    setInst(instrument);
  }

  function handleNote(e) {
    const note = e.target.value;
    setKeyNote(note);
  }

  function handleMode(e) {
    const mode = e.target.value;
    setMode(mode);
  }

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h1>Chordal</h1>
        <h1>&#x2058;</h1>
      </div>

      <h2>Keys, Modes and Chords with Sound</h2>

      <div className={styles.dropDown}>
        <TonicSelector handleNote={handleNote} />

        <ModeSelector handleMode={handleMode} />

        <InstrumentSelector handleInst={handleInst} />
      </div>
    </header>
  );
}

export default Header;
