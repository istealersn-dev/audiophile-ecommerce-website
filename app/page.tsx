import { Categories } from './components/common/Categories/Category'
import { HeroComponent } from './components/common/Hero/Hero'
import { getData } from './lib/graphqlClient'
import { HomepageData } from './lib/types/homepage'
import './styles/globals.scss'

export default async function Home() {

  const hygraphData = await getData()
    const {components, pageMeta} = hygraphData.homepages[0]
  return (
    <main>
      {components.map((component: any) => {
        if(component.__typename === 'Hero') return <HeroComponent hero={component} key={component.id} />
        if(component.__typename === 'Category') return <Categories categories={component} key={component.id} />
      })}
    </main>
  )
    }