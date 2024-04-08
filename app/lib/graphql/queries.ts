/**
 * GET_****_DATA is a GraphQL query that fetches data needed for the respective template such as Homepage, Category Page, Product Page.
 *
 * It imports and combines multiple GraphQL fragments
 */
import { gql } from "graphql-tag";
import heroFragment from "./queries/fragments/HeroFragment.graphql";
import metaInfoFragment from "./queries/fragments/metaInfoFragment.graphql";
import categoryFragment from './queries/fragments/categoryFragment.graphql'
import featuredBannerFragment from './queries/fragments/featuredBannerFragment.graphql'
import contentBannerFragment from './queries/fragments/contentBannerFragment.graphql'
import sharedFragment from './queries/fragments/sharedFragment.graphql'
import commonFragment from './queries/fragments/commonFragments.graphql'
import productFragments from './queries/fragments/productFragments.graphql'

import layout from "./queries/layout.graphql"
import homepageQuery from "./queries/homepageQuery.graphql";
import templates from './queries/templates.graphql'
import productDetailsPage from './queries/productDetailsPage.graphql'

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

const GET_PRODUCTPAGE_DATA = gql`
${productDetailsPage}
${categoryFragment}
${productFragments}
${contentBannerFragment}
${metaInfoFragment}
`

const GET_HEADER_AND_FOOTER_DATA = gql`
${layout}
`

export { 
  GET_HEADER_AND_FOOTER_DATA, 
  GET_HOMEPAGE_DATA, 
  GET_CATEGORYPAGE_DATA, 
  GET_PRODUCTPAGE_DATA 
};
