import Layout from '../components/layout';
import Card from '../components/card';
import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'


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

const About = () => {
    const { data, loading, error } = useQuery(HELLO_QUERY);
    // const { data, loading, error } = useQuery(REDDIT_QUERY);

    return (
        <Layout>
            <div className="flex justify-center flex-col">
                <Card title="About">
                    <p>This app is a demonstration of NextJS, which is a React framework that implements an Apollo server and GraphQL queries.</p>
                    <p>See below for more demonstrations!</p>
                </Card>
                <Card title='NextJS specific demonstrations: '>
                    <h2>GraphQL demo: {loading ? 'Loading...' : data.sayHello}</h2>
                    {/* <h2>GraphQL demo: {loading ? 'Loading...' : data.reddit.subreddit.subscribers}</h2> */}
                    <h3>STYLE JSX DEMONSTRATION</h3>
                </Card>
            </div>
            <style jsx>{`
                h3 {
                    color: red;
                }
            `}</style>
        </Layout>
    );
};

export default withApollo(About);