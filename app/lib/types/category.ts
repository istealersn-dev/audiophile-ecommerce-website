import { Category, ContentBanner, Heading, PageMeta } from "."
import { ProductCatalogue } from "./productsCatalogue"

interface CategoryPageComponents extends Category, ContentBanner {
    id: string
    __typename: string
}

interface CategoryPage {
    id: string
    slug: string
    categoryHeading: Heading
    productCatalogue: ProductCatalogue[]
    components: CategoryPageComponents[]
    pageMeta: PageMeta
}

export interface CategoryPages {
    templateCategories: CategoryPage[]
}