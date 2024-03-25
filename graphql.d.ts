/**
 * Declares a module for importing .graphql files.
 * The imported file's DocumentNode is assigned to a variable named 'content' and exported as the module default.
 * This allows importing .graphql files containing GraphQL queries and mutations as if they were JavaScript modules.
 */
declare module "*.graphql" {
  import { DocumentNode } from "graphql";

  const content: DocumentNode;
  export default content;
}
