import { Button, ImageProps, MultiImageProps } from "."

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

export interface ProductDetailsPageComponents extends RelatedProductsProps {
    id?: string
    __typename: string
}

export interface ProductDetailsPage {
    id: string
    slug: string
    components: ProductDetailsPageComponents[]
}

export interface ProductDetailsPages {
    templateProductDetails: ProductDetailsPage[]
}