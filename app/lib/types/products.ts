import { Button, Category, ContentBanner, ImageProps, MultiImageProps, PageMeta } from "."

export interface AddToCartProps {
    id?: string
    overline?: string
    heading: string
    description: string
    price: string
    productImages: MultiImageProps
    altText: string
    button: Button
}

export interface CardProps {
    id: string
    heading: string
    altText: string
    cardImage: ImageProps
    button: Button
}

export interface RelatedProductsProps {
    id?: string
    sectionHeading: string
    cardGrid: CardProps[]
}

export interface ProductShowcase {
    id?: string
    altText: string
    productGalleryImages: MultiImageProps[]
}


// -------------------------- types for Product Details Page --------------------------

export interface ProductDetailsPageComponents extends AddToCartProps, RelatedProductsProps, Category, ContentBanner, ProductShowcase {
    id?: string
    __typename: string
}

export interface ProductDetailsPage {
    id: string
    slug: string
    components: ProductDetailsPageComponents[]
    pageMeta: PageMeta
}

export interface ProductDetailsPages {
    templateProductDetails: ProductDetailsPage[]
}