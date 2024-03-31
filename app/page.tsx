import { Categories } from './components/common/Categories/Category'
import { ContentBanner } from './components/common/ContentBanner/ContentBanner'
import { FeaturedBanner } from './components/common/FeaturedBanner/FeaturedBanner'
import { HeroComponent } from './components/common/Hero/Hero'
import { GET_HOMEPAGE_DATA } from "./lib/graphql/queries";
import { fetchGraphQL } from './lib/graphqlClient'
import { HomepageData } from './lib/types/homepage'
import './styles/globals.scss'

/**
 * Fetches homepage data from a GraphQL query.
 * @returns Promise resolving to homepage data.
 */
const queryString = GET_HOMEPAGE_DATA.loc?.source.body;
export const HOMEPAGE_DATA = await fetchGraphQL<HomepageData>(queryString!);
export default function Home() {

  const { components } = HOMEPAGE_DATA.homepage

  return (
    <main>
      {components.map((component) => {
        if(component.__typename === 'Hero') return <HeroComponent hero={component} key={component.id} />
        if(component.__typename === 'Category') return <Categories categories={component} key={component.id} />
        if(component.__typename === 'FeaturedBanner') return <FeaturedBanner key={component.id} banners={component.banners} />
        if(component.__typename === 'ContentBanner') return <ContentBanner key={component.id} contentBanner={component}/>
      })} 
    </main>
  )
}