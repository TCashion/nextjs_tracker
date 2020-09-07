import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';

type PageComponent = {
    props: any,
    children?: ReactNode
}

export function withApollo (PageComponent: PageComponent) {
    const WithApollo = <T extends object>(props: T) => {

        const client = new ApolloClient({
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