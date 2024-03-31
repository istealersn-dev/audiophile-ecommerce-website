import { Heading } from "../components/common/Heading/Heading"
import { ProductCard } from "../components/product/ProductCard/ProductCard"
import { GET_CATEGORYPAGE_DATA } from "../lib/graphql/queries"
import { fetchGraphQL } from "../lib/graphqlClient"
import { CategoryPages } from "../lib/types/category"

const queryString = GET_CATEGORYPAGE_DATA.loc?.source.body
const { templateCategories } = await fetchGraphQL<CategoryPages>(queryString!)

export const dynamicParams = false
export async function generateStaticParams() {
    const { templateCategories } = await fetchGraphQL<CategoryPages>(queryString!)
    return templateCategories.map((category) => ({
        slug: category.slug,
    }))
}

export default function CategoryPage({params}: {params: {slug: string}}) {
    return (
        <>
            {templateCategories.map((item) => (
                <main key={item.id}>
                    <Heading key={item.categoryHeading.id} heading={item.categoryHeading.heading} />
                    {item.productCatalogue.map((card) => (
                        <ProductCard key={card.id} {...card}/>
                    ))}
                </main>
            ))}
        </>
    )
}