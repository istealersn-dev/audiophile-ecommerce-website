import { Category as CategoryInteface } from "@/app/lib/types"
import Image from "next/image"
import { Button } from "../Button/Button"

interface CategoriesProps {
    categories: CategoryInteface
}

export const Categories = ({ categories }: CategoriesProps) => {
    return (
        <section>
            {categories.category.map(card => (
                <Card 
                    key={card.id} 
                    categoryCard={card}
                    /> 
            ))}
        </section>
    )
}

// ---- Card Component ----

interface CardProps {
    categoryCard: CategoryInteface["category"][0]
}

const Card = ({ categoryCard }: CardProps) => {

    const { categoryImage, categoryName, categoryButton } = categoryCard
    const { link, label, variant } = categoryButton

  return (
        <div className="cgory-card">
         <Image 
                src={categoryImage.url}
                alt={categoryImage.alt}
                width={categoryImage.width}
                height={categoryImage.height}
            />
            <h2>{categoryName}</h2>
            <Button link={link} label={label} variant={variant} />
        </div>
    )
}