import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io'
})
const cache = new InMemoryCache();

const client = new ApolloClient({
    link,
    cache
})

export default client;
