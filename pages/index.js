import Head from "next/head";

import Modes from "../components/Modes";

export default function Home() {
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

      <Modes />
    </div>
  );
}
