import { ApolloServer, gql } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from 'graphql-toolkit'
import connectDb from '../../lib/mongoose';
import { habitResolvers } from '../../api/habits/resolvers';
import { habitMutations } from '../../api/habits/mutations';
import Habits from '../../api/habits/Habits.graphql';

const typeDefs = gql`
    type Query {
        sayHello: String!
    }
`

const testResolvers = {
    Query: {
        sayHello: () => {
            return 'Hello, Travis'
        }
    }
}

const resolvers = mergeResolvers([
    testResolvers,
    habitResolvers,
    habitMutations
])

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false
    }
}

// wrap apollo server with connectDb function
const server = apolloServer.createHandler({ path: '/api/graphql' });
export default connectDb(server);