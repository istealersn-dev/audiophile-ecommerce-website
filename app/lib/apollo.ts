import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: process.env.HYGRAPH_ENDPOINT,
    cache: new InMemoryCache()
});

export default apolloClient;