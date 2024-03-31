import { Button, MultiImageProps } from "."

export interface ProductCatalogue {
    id: string
    overline?: string
    heading: string
    description: string
    productImage: MultiImageProps
    button: Button
    altText: string
    imageAlignment: string
}[]