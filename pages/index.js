import Head from 'next/head'
import styles from '../styles/Index.module.css'

export default function Index() {
  const submitHandler = event => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Open Weather App</title>
        <meta name="description" content="Open Weather App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Open Weather App</h1>
        <form onSubmit={submitHandler}>
          <input type="text" />
        </form>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
