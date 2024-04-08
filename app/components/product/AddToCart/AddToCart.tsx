import { AddToCartProps } from "@/app/lib/types/products"
import { MultiImage } from "../../common/MultiImage/MultiImage"
import { Button } from "../../common/Button/Button"
import { getformattedPricing } from "@/app/lib/utils/pricingInfo"
import { Counter } from "@/app/lib/utils/counter"

export const AddToCart = ({...AddToCartProps}: AddToCartProps) => {

    const { overline, heading, description, price, productImages, altText, button } = AddToCartProps

    const priceValue = getformattedPricing(price) // Returns the price of the product in USD as a string
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
                    <Counter />
                    <Button {...button} />
                </div>
            </div>
        </section>
    )
}