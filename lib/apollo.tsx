import Head from 'next/Head';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    HttpLink,
} from '@apollo/client'

export function withApollo (PageComponent: any) {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }: any) => {

        const client: any = apolloClient || initApolloClient();

        return (
            <ApolloProvider
                client={client}
            >
                <PageComponent {...pageProps} />
            </ApolloProvider>
        )
    }

    // allows us to set the initial props, with context (res, req) passed along
    WithApollo.getInitialProps = async (ctx: any) => {
        // this is the entire tree of our application
        const { AppTree } = ctx;
        const apolloClient = ( ctx.apolloClient = initApolloClient() );

        let pageProps = {};
        if (PageComponent.getInitialProps) {
            pageProps = await PageComponent.getInitialProps(ctx);
        };

        // if query is on the server
        if (typeof window === 'undefined') {
            if ( ctx.res && ctx.res.finished ) {
                return pageProps;
            }

            try {
                // gets all data from the tree before application is rendered
                const { getDataFromTree } = await import('@apollo/react-ssr');
                await getDataFromTree(
                    // this instructs to render the whole tree, but only after
                    // adding the apollo data to the tree
                    <AppTree 
                        pageProps={{
                            ...pageProps,
                            apolloClient
                        }}
                    />
                )
            } catch (e) {
                console.error(e);
            }

            // manually clears a Head sideffect 
            Head.rewind(); 
        }
        
        const apolloState = apolloClient.cache.extract();
        return {
            ... pageProps,
            apolloState
        }
    };


    return WithApollo;
};

const initApolloClient = (initialState: NormalizedCacheObject = {}) => {
    const cache = new InMemoryCache().restore(initialState); 
    const link = new HttpLink({
        uri: 'http://localhost:3000/api/graphql', // for setup confirmation
        // uri: 'https://www.graphqlhub.com/graphql', // for testing third party APIs
        fetch
    });
    const ssrMode = typeof window === 'undefined';
    const client = new ApolloClient({
        ssrMode,
        link,
        cache,
    });
    return client;
};