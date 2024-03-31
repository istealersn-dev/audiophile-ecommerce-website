import { Category, ContentBanner, FeaturedBanner, Hero, PageMeta } from ".";


/**
 * HomepageCompoent interface extends Hero, Category and FeaturedBanner
 * interfaces. It represents a component on the homepage.
 *
 * id: Unique ID for the component
 * __typename: The name of the component type (e.g. "Hero")
 */
interface HomepageCompoent extends Hero, Category, FeaturedBanner, ContentBanner {
  id: string;
  __typename: string;
}
export interface Homepage {
  slug: string
  components: HomepageCompoent[]
  pageMeta: PageMeta
}

export interface HomepageData {
  homepage: Homepage
}