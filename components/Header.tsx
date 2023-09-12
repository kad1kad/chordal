import styles from "./Header.module.scss";

import TonicSelector from "./TonicSelector";
import ModeSelector from "./ModeSelector";
import InstrumentSelector from "./InstrumentSelector";
import { Dispatch, SetStateAction } from "react";
import { InstrumentType } from "reactronica";

type HeaderProps = {
  setKeyNote: Dispatch<SetStateAction<string>>;
  setMode: Dispatch<SetStateAction<string>>;
  setInst: Dispatch<SetStateAction<InstrumentType>>;
};

function Header({ setKeyNote, setMode, setInst }: HeaderProps) {
  function handleInst(e: React.ChangeEvent<HTMLSelectElement>) {
    const instrument = e.target.value as InstrumentType;
    setInst(instrument);
  }

  function handleNote(e: React.ChangeEvent<HTMLSelectElement>) {
    const note = e.target.value;
    setKeyNote(note);
  }

  function handleMode(e: React.ChangeEvent<HTMLSelectElement>) {
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
