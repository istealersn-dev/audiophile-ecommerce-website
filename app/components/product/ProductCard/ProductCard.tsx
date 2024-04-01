import { ProductCatalogue as ProductCatalogueProps } from "@/app/lib/types/productsCatalogue";
import { MultiImage } from "../../common/MultiImage/MultiImage";
import { Button } from "../../common/Button/Button";

export const ProductCard = ({ ...ProductCatalogueProps}: ProductCatalogueProps) => {
    const { overline, heading, description, productImage, button, altText, imageAlignment } = ProductCatalogueProps
    return (
        <div>
            <div>
                <MultiImage {...productImage} altText={altText}/>
            </div>
            <div>
                { overline && <span>{overline}</span>}
                <h2>{heading}</h2>
                <p>{description}</p>
                <Button {...button}/>
            </div>
        </div>
    )
}