import Head from 'next/head'
import styles from '../styles/Home.module.css'

type Props = {
  title: string
}

export default function Home({ title = 'react nope' }: Props) {
  const b = 'aaaa'

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{title}</a>
        </h1>
      </main>
    </div>
  )
}
