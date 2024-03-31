import { Category, ContentBanner, Heading } from "."
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
}

export interface CategoryPages {
    templateCategories: CategoryPage[]
}