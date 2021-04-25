import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eius quae, aliquid sapiente enim fuga! At quisquam dolor accusamus pariatur dignissimos voluptatibus, fuga ipsa molestias laboriosam laborum nostrum consectetur culpa.</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem eius quae, aliquid sapiente enim fuga! At quisquam dolor accusamus pariatur dignissimos voluptatibus, fuga ipsa molestias laboriosam laborum nostrum consectetur culpa.</p>
        <Link href="/ninjas">
          <a class={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
