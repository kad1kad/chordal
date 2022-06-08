import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Modes from "../components/Modes";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Modulate!</title>
        <meta
          name="description"
          content="Modal Interchange for your chord progressions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modes />
    </div>
  );
}
