import { Metadata } from "next"
import { Categories } from "../components/common/Categories/Category"
import { ContentBanner } from "../components/common/ContentBanner/ContentBanner"
import { Heading } from "../components/common/Heading/Heading"
import { ProductCard } from "../components/product/ProductCard/ProductCard"
import { GET_CATEGORYPAGE_DATA } from "../lib/graphql/queries"
import { fetchGraphQL } from "../lib/graphqlClient"
import { CategoryPages } from "../lib/types/category"

const queryString = GET_CATEGORYPAGE_DATA.loc?.source.body
// const { templateCategories } = await fetchGraphQL<CategoryPages>(queryString!)

export const dynamicParams = false
/**
 * Generates static params for all categories.
 * This function retrieves the category pages data from the GraphQL API,
 * maps over the array of category pages and extracts only the slug
 * for each category and returns an array of objects with the slug property.
 *
 * @returns {Promise<{slug: string}[]>} An array of objects with the 'slug' property
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const { templateCategories } = await fetchGraphQL<CategoryPages>(queryString!)
    return templateCategories.map((category) => ({
        // Extracts only the slug from each category page
        slug: category.slug,
    }));
}

export default async function CategoryPage({params}: {params: {slug: string}}) {
    // This is a React component function for rendering a category page.
    // It receives the 'params' prop, which is an object containing the 'slug' parameter from the URL.
    const { templateCategories } = await fetchGraphQL<CategoryPages>(queryString!)

    return (
        <>
            {templateCategories.map((item) => (
            // This maps over an array of 'templateCategories' and renders a <main> element for each item.
                <main key={item.id}>
                    {/* This renders a 'Heading' component with 
                    the 'heading' prop set to the 'categoryHeading.heading' value of the current 'item'. */}
                    <Heading key={item.categoryHeading.id} heading={item.categoryHeading.heading} />
                    {/* This maps over the 'productCatalogue' array of the current 'item' and renders a 'ProductCard' component for each product. */}
                    {item.productCatalogue.map((card) => (
                        <ProductCard key={card.id} {...card}/>
                    ))}
                    {item.components.map((component) => {
                        if(component.__typename === 'Category') return <Categories categories={component} key={component.id} />
                        if(component.__typename === 'ContentBanner') return <ContentBanner key={component.id} contentBanner={component}/>
                    })}
                </main>
            ))}
        </>
    )
}

/**
 * Generates metadata based on the provided parameters.
 *
 * @param {Object} params - An object containing the slug parameter of type string
 * @return {Object} An object containing title and description properties
 */
export async function generateMetadata ({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { templateCategories } = await fetchGraphQL<CategoryPages>(queryString!)
    const category = templateCategories.find((item) => item.slug === params.slug)

    if (!category) return {}

    return {
        title: category.pageMeta.pageTitle + '| Audiophile',
        description: category.pageMeta.metaDescription
    }
}
