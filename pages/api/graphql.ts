import { ApolloServer, gql } from 'apollo-server-micro';
import connectDb from '../../lib/mongoose';

const typeDefs = gql`
    type Query {
        sayHello: String!
    }
`

const resolvers = {
    Query: {
        sayHello: () => {
            return 'Hello, Travis'
        }
    }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false
    }
}

// wrap apollo server with connectDb function
const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDb(server);