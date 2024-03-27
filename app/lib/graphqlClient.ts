/**
 * Creates a GraphQLClient instance to make requests to the provided endpoint,
 * and exports an async function getData() that uses the client to make a request
 * with the GET_HOMEPAGE_DATA query and returns the data cast to the Homepages type.
 */
import { GraphQLClient } from "graphql-request";
import GET_HOMEPAGE_DATA from "./graphql/queries";
import { Homepages } from "./types/homepage";

// Create a GraphQL client instance
const endpoint = process.env.HYGRAPH_ENDPOINT;
const graphQLClient = new GraphQLClient(endpoint!);

// Execute the query using the GraphQL Client
export async function getData() {
  const data = await graphQLClient.request(GET_HOMEPAGE_DATA);
  return data as Homepages;
}
