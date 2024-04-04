import { RelatedProduct } from "@/app/components/product/RelatedProduct/RelatedProduct"
import { GET_PRODUCTPAGE_DATA } from "@/app/lib/graphql/queries"
import { fetchGraphQL } from "@/app/lib/graphqlClient"
import { ProductDetailsPage, ProductDetailsPages } from "@/app/lib/types/products"
import { notFound } from "next/navigation"


const queryString = GET_PRODUCTPAGE_DATA.loc?.source.body

export const generateParams = async () => {
    const { templateProductDetails } = await fetchGraphQL<ProductDetailsPages>(queryString!)
    return templateProductDetails.map((item) => ({ 
        slug: item.slug,
        products: item.slug
    }))
}

export default async function ProductDetailPage({ params }: { params: { slug: string, products: string } }) {

    const { templateProductDetails } = await fetchGraphQL<ProductDetailsPages>(queryString!, { slug: params.products })
    const products = templateProductDetails.find((item) => item.slug === params.products);

    if (!products) return notFound()

    return (
        <main>
            {products.components.map((component) => (
                component.__typename == "RelatedProduct" && <RelatedProduct sectionHeading={component.sectionHeading} cardGrid={component.cardGrid} key={component.id} />
            ))} 
        </main>
    )
}
