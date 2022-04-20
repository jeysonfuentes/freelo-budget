import { FC } from 'react'
import Head from 'next/head'

import styles from "./Layout.module.scss";
import {Aside} from '../aside';

interface Props {
  title: string
}

export const Layout: FC<Props> = ({children, title} ) =>  {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="App to create budget IT projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex ">
        <Aside />
        <main className={styles.main}>
           {children}
        </main>
      </div>
    </div>
  )
}


