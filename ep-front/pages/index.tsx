import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Escape-Platform</title>
        <meta name="description" content="Escape-Platform" />
      </Head>
      <h1>Welcome to Escape-Platform</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
        perspiciatis sapiente! Animi quibusdam placeat, deserunt aut saepe
        illum? Hic nihil minima sapiente architecto quod voluptatum, deleniti
        neque debitis modi ad!
      </p>
      <h3>
        <Link href="/games"> Click here to see the games list</Link>
      </h3>
    </div>
  );
};
export default Home;
