import { CardProps, RelatedProductsProps } from "@/app/lib/types/products"
import { Button } from "../../common/Button/Button"
import Image from "next/image"

export const RelatedProduct = ({sectionHeading, cardGrid}: RelatedProductsProps) => {
    return (
        <section>
            <h2>{sectionHeading}</h2>
            {cardGrid && cardGrid.map((card) => (
                <Card
                    key={card.id}
                    {...card}
                />
            ))}
        </section>
    )
}

function Card({ ...CardProps }: CardProps) {

    const { cardImage, altText, heading, button } = CardProps

    return (
        <div>
            <div>
                <Image
                    src={cardImage.url}
                    alt={altText}
                    height={parseInt(cardImage.height)}
                    width={parseInt(cardImage.width)}
                    />
            </div>
            <h3>{heading}</h3>
            <Button {...button} />
        </div>
    )
}