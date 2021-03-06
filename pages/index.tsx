import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { btnDefaultStyle } from '../components/button'

const Home = () => {

  return (
    <Layout>
      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Habit Tracker
          </h1>
          <p>Welcome to the Habit Tracker!</p>
          <br></br>
          <div className="flex-row">
            <Link 
              href="/habits"
            >
              <a 
                className={ btnDefaultStyle }
              >Click here</a>
            </Link>
            <span
              className="mx-2"
            >to proceed to the tracker.</span>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Layout>
  )
}

export default Home;