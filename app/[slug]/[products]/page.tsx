import { Categories } from "@/app/components/common/Categories/Category"
import { ContentBanner } from "@/app/components/common/ContentBanner/ContentBanner"
import { AddToCart } from "@/app/components/product/AddToCart/AddToCart"
import { ProductShowcase } from "@/app/components/product/ProductShowcase/ProductShowcase"
import { ProductSummary } from "@/app/components/product/ProductSummary/ProductSummary"
import { RelatedProduct } from "@/app/components/product/RelatedProduct/RelatedProduct"
import { GET_PRODUCTPAGE_DATA } from "@/app/lib/graphql/queries"
import { fetchGraphQL } from "@/app/lib/graphqlClient"
import { ProductDetailsPages } from "@/app/lib/types/products"
import { Metadata } from "next"
import { notFound } from "next/navigation"


const queryString = GET_PRODUCTPAGE_DATA.loc?.source.body

/**
 * Generate parameters based on template product details.
 *
 * @return {Array} An array of objects containing slug and products.
 */
export async function generateParams() {
    const { templateProductDetails } = await fetchGraphQL<ProductDetailsPages>(queryString!)
    return templateProductDetails.map((item) => ({ 
        slug: item.slug,
        products: item.slug
    }))
}

/**
 * ProductDetailPage
 *
 * This is a Next.js page component that renders a product details page based on the slug
 * of the product in the URL parameters.
 *
 * The page retrieves the template data from the GraphQL API and maps over the components
 * to render the related products and other related components like a content banner.
 *
 * If the product is not found, it renders a 404 not found page.
 */
export default async function ProductDetailPage({ params }: { params: { slug: string, products: string } }) {

    const { templateProductDetails } = await fetchGraphQL<ProductDetailsPages>(queryString!, { slug: params.products })
    const products = templateProductDetails.find((item) => item.slug === params.products);

    if (!products) return notFound()

    return (
        <main>
            {/*
             * This maps over the 'components' array of the current product and renders
             * the related product component if the component type is 'RelatedProduct'.
             */}
            {products.components.map((component) => {
                if(component.__typename === 'AddToCart') return <AddToCart key={component.id} {...component}/>
                if(component.__typename === 'ProductSummary') return <ProductSummary key={component.id} {...component}/>
                if(component.__typename === "ProductShowcase") return <ProductShowcase key={component.id} altText={component.altText} productGalleryImages={component.productGalleryImages}/>
                if(component.__typename === "RelatedProduct") return <RelatedProduct sectionHeading={component.sectionHeading} cardGrid={component.cardGrid} key={component.id}/>
                if(component.__typename === 'Category') return <Categories categories={component} key={component.id} />
                if(component.__typename === 'ContentBanner') return <ContentBanner key={component.id} contentBanner={component} />
            })}
        </main>
    )
}

/**
 * Generates metadata based on the provided parameters.
 *
 * @param {Object} params - An object containing the slug and products.
 * @return {Object} An object with title and description for metadata.
 */
export const generateMetadata = async ({ params }: { params: { slug: string, products: string } }): Promise<Metadata> => {
    const { templateProductDetails } = await fetchGraphQL<ProductDetailsPages>(queryString!, { slug: params.products })
    const products = templateProductDetails.find((item) => item.slug === params.products);

    if (!products) return {}

    const { pageMeta } = products

    return {
        title: pageMeta.pageTitle + ' | Audiophile',
        description: pageMeta.metaDescription
    }
}