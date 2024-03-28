import { PageMeta } from ".";

interface HomepageCompoent {
  id: string
  __typename: string // This field indicates the type of component (e.g. "Hero")
}

interface Homepage {
  slug: string
  components: HomepageCompoent[]
  pageMeta: PageMeta
}

export interface HomepageData {
  homepage: Homepage[]
}