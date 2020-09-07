import ApolloClient, { NormalizedCacheObject } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';


export function withApollo (PageComponent: () => JSX.Element) {
    const WithApollo = <T extends object>(props: T) => {

        let client: ApolloClient<NormalizedCacheObject> | undefined;
        client = new ApolloClient({
            uri: 'http://localhost:3000/api/graphql',
            fetch
        });

        return (
            <ApolloProvider
                client={client}
            >
                <PageComponent {...props} />
            </ApolloProvider>
        )
    }
    return WithApollo;
};