/**
 * GET_HOMEPAGE_DATA is a GraphQL query that fetches data needed for the homepage.
 *
 * It imports and combines multiple GraphQL fragments:
 * - homepageQuery - main homepage data
 * - heroFragment - data for hero section
 * - metaInfoFragment - site meta info
 */
import { gql } from "graphql-tag";
import homepageQuery from "./queries/homepageQuery.graphql";
import heroFragment from "./queries/fragments/HeroFragment.graphql";
import metaInfoFragment from "./queries/fragments/metaInfoFragment.graphql";

const GET_HOMEPAGE_DATA = gql`
  ${homepageQuery}
  ${heroFragment}
  ${metaInfoFragment}
`;

export default GET_HOMEPAGE_DATA;
