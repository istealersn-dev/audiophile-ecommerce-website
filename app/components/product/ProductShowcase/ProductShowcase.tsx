import { ProductShowcase as ProductShowcaseProps } from "@/app/lib/types/products"
import { MultiImage } from "../../common/MultiImage/MultiImage"

export const ProductShowcase = ({...ProductShowcaseProps}: ProductShowcaseProps) => {
    const { productGalleryImages, altText } = ProductShowcaseProps
    return (
        <section>
            {productGalleryImages.map((image) => (
                <div key={image.id}>
                    <MultiImage  altText={altText} {...image}/>
                </div>
            ))}
        </section>
    )
}