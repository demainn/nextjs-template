import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: process.env.CMS_GRAPHQL_ENDPOINT,
	cache: new InMemoryCache(),
});

export default client;
