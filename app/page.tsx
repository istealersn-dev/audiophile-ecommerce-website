import { Categories } from './components/common/Categories/Category'
import { FeaturedBanner } from './components/common/FeaturedBanner/FeaturedBanner'
import { HeroComponent } from './components/common/Hero/Hero'
import { getData } from './lib/graphqlClient'
import './styles/globals.scss'

export const data = await getData()
const { components } = data.homepage
export default function Home() {

  return (
    <main>
      {components.map((component) => {
        if(component.__typename === 'Hero') return <HeroComponent hero={component} key={component.id} />
        if(component.__typename === 'Category') return <Categories categories={component} key={component.id} />
        if(component.__typename === 'FeaturedBanner') return <FeaturedBanner key={component.id} banners={component.banners}/>
      })}
    </main>
  )
}