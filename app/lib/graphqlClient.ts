/**
 * Creates a GraphQLClient instance to make requests to the provided endpoint,
 * and exports an async function getData() that uses the client to make a request
 * with the GET_HOMEPAGE_DATA query and returns the data cast to the Homepages type.
 */
import { GraphQLClient } from "graphql-request";
import { cache } from "react";

// Create a GraphQL client instance
const endpoint = process.env.HYGRAPH_ENDPOINT;
const graphQLClient = new GraphQLClient(endpoint!);

/**
 * Fetches data from the GraphQL endpoint using the provided query and variables.
 * Uses the cached graphQLClient instance to make the request.
 *
 * @param query - The GraphQL query string
 * @param variables - Optional GraphQL query variables
 * @returns The data from the GraphQL response, cast to the generic type T
 */
export const fetchGraphQL = cache(
  async <T>(
    query: string,
    variables?: Record<string, string | number>
  ): Promise<T> => {
    const data = await graphQLClient.request<T>(query, variables);
    return data;
  }
);
