import { AddToCartProps } from "@/app/lib/types/products"
import { MultiImage } from "../../common/MultiImage/MultiImage"
import { Button } from "../../common/Button/Button"
import { getformattedPricing } from "@/app/lib/utils/pricingInfo"

export const AddToCart = ({...AddToCartProps}: AddToCartProps) => {

    const { overline, heading, description, price, productImages, altText, button } = AddToCartProps

    const priceValue = getformattedPricing(price) // Returns the formatted price of the product
    return (
        <section>
            <div>
                <MultiImage altText={altText} {...productImages}/>
            </div>
            <div>
                <span>{overline}</span>
                <h1>{heading}</h1>
                <p>{description}</p>
                <p>{priceValue}</p>
                <div>
                    <Button {...button} />
                </div>
            </div>
        </section>
    )
}