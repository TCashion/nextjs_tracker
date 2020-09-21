import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import HabitList from '../components/habitList'
import HabitForm from '../components/habitForm'
import gql from 'graphql-tag'
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'

const HABIT_QUERY = gql`
    query HabitQuery {
        habits {
            _id,
            name
        }
    }
`

const Habits = () => {
    const [habits, setHabits] = useState(['']);
    const { data, loading, error } = useQuery(HABIT_QUERY, {
        onCompleted: () => {
            if (data && data.habits) {
                setHabits(data.habits)
            }
        }
    });

    return (
        <Layout>
            <div className={styles.container}>

                <main className={styles.main}>
                    <h1 className={styles.title}>Habit Tracker</h1>
                    <div className="max-w-screen-md">
                        <HabitForm
                            setHabits={setHabits}
                        />
                    </div>
                    <div className="max-w-screen-md">
                        {loading ?
                            <p>Loading...</p>
                        :
                            <HabitList
                                habits={data.habits}
                            />
                        }
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

export default withApollo(Habits);