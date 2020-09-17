import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import HabitList from '../components/habitList'
import HabitForm from '../components/habitForm'

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`

const REDDIT_QUERY = gql`
  query NextJSReddit {
    reddit {
      subreddit(name: "nextjs") {
        subscribers
      }
    }
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  // const { data, loading, error } = useQuery(REDDIT_QUERY);
  const [habits, setHabits] = useState(['Make the bed.']);

  return (
    <Layout>
      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Habit Tracker
          </h1>
          <h2>GraphQL demo: {loading ? 'Loading...' : data.sayHello }</h2>
          {/* <h2>GraphQL demo: {loading ? 'Loading...' : data.reddit.subreddit.subscribers}</h2> */}
          <h3>STYLE JSX DEMONSTRATION</h3>
          <div className="max-w-screen-md">
            <HabitForm
              setHabits={setHabits}
            />
          </div>
          <div className="max-w-screen-md">
            <HabitList
              habits={habits}
            />
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
      <style jsx>{`
        h3 {
            color: red;
        }
      `}</style>
    </Layout>
  )
}

export default withApollo(Home)