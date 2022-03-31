import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Aside from "../shared/components/aside/Aside";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>BudgetITProject</title>
        <meta name="description" content="App to create budget IT projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex ">
        <Aside />
        <main className="p-10 px-20 mx-auto my-0">
            <h1>hola</h1>
        </main>
      </div>
    </div>
  );
};

export default Home;
