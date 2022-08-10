import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          I'm <a href="https://nextjs.org">Albert Bici</a>
        </h1>

        <p className={styles.description}>
          I live in <code className={styles.code}>Italy</code> and during my
          studies &nbsp; 
          <code className={styles.code}>
            at University</code> has grown my interest <code className={styles.code}>for enterprise
            </code> development, and that motivated me to understang what are tools and
            metodologies to build and IT project, to learn the value of <code className={styles.code}>Open
            Source</code> and Why it's so important{" "}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docshttps://www.linkedin.com/in/albert-bici/" className={styles.card}>
            <h2>My Linkedin &rarr;</h2>
            <p>Let's Connect here if we share same passions I will definitly enjoi to talk with you about our same passions</p>
          </a>

          <a href="https://www.fiverr.com/albertb3d" className={styles.card}>
            <h2>Fiverr &rarr;</h2>
            <p>Here is where i put all my projects about programming and 3D modeling, and Graphics Design</p>
          </a>

          

          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
