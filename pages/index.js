import Head from "next/head";
import Header from "../components/Header";
import Chords from "../components/Chords";
import { useState } from "react";
import startNotes from "../data/startNotes";
import modeNames from "../data/modeNames";

export default function Home() {
  const [keyNote, setKeyNote] = useState(startNotes[0]);
  const [mode, setMode] = useState(modeNames[0]);
  const [inst, setInst] = useState("amSynth");

  return (
    <div className="">
      <Head>
        <title>Chordal</title>
        <meta
          name="description"
          content="Find chords for all keys and modes!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        keyNote={keyNote}
        setKeyNote={setKeyNote}
        setMode={setMode}
        setInst={setInst}
      />

      <Chords keyNote={keyNote} mode={mode} inst={inst} />
    </div>
  );
}
