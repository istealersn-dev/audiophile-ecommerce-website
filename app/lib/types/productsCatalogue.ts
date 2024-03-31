import { Button, MultiImageProps } from "."

export interface ProductCatalogue {
    overline: string
    heading: string
    description: string
    productImage: MultiImageProps
    button: Button
}[]