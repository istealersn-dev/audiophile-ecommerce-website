import { getData } from './lib/graphqlClient';
import { Homepages } from './lib/types/homepage';
import './styles/globals.scss'

import { Hero } from './components/common/Hero/Hero';
export default async function Home() {

  const homepage: Homepages = await getData();

  // Destructure the homepage data
  const { components, slug, pageMeta } = homepage.homepages[0];
  console.log(components);

  return (
    <main>
      {components.map(component => (
        <Hero key={component.id} {...component} />
      ))
      }
    </main>
  )
}