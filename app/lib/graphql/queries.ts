/**
 * GET_HOMEPAGE_DATA is a GraphQL query that fetches data needed for the homepage.
 *
 * It imports and combines multiple GraphQL fragments
 */
import { gql } from "graphql-tag";
import homepageQuery from "./queries/homepageQuery.graphql";
import heroFragment from "./queries/fragments/HeroFragment.graphql";
import metaInfoFragment from "./queries/fragments/metaInfoFragment.graphql";
import categoryFragment from './queries/fragments/categoryFragment.graphql'
import featuredBannerFragment from './queries/fragments/featuredBannerFragment.graphql'
import contentBannerFragment from './queries/fragments/contentBannerFragment.graphql'
import sharedFragment from './queries/fragments/sharedFragment.graphql'
import commonFragment from './queries/fragments/commonFragments.graphql'
import templates from './queries/templates.graphql'

const GET_HOMEPAGE_DATA = gql`
  ${homepageQuery}
  ${heroFragment}
  ${categoryFragment}
  ${featuredBannerFragment}
  ${contentBannerFragment}
  ${sharedFragment}
  ${metaInfoFragment}
`;

const GET_CATEGORYPAGE_DATA = gql`
${templates}
${commonFragment}
${categoryFragment}
${contentBannerFragment}
${sharedFragment}
${metaInfoFragment}
`
export { GET_HOMEPAGE_DATA, GET_CATEGORYPAGE_DATA };
