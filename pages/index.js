import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/products/1">
            <a className={styles.card}>
              <h2>product 1 &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href="/products/2">
            <a className={styles.card}>
              <h2>product 2 &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Link>
          <Link href="/products/3">
            <a className={styles.card}>
              <h2>product 3 &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>
          <Link href="/products/4">
            <a className={styles.card}>
              <h2> product 4 &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
