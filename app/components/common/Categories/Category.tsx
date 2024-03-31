import { Category as CategoryInteface } from "@/app/lib/types"
import Image from "next/image"
import { Button } from "../Button/Button"

interface CategoriesProps {
    categories: CategoryInteface
}

export const Categories = ({ categories }: CategoriesProps) => {
    return (
        <section>
            {categories.category.map(categoryCard => (
                <Card 
                    key={categoryCard.id} 
                    categoryCard={categoryCard}
                    /> 
            ))}
        </section>
    )
}

// ------------------------ Card Component ------------------------

interface CardProps {
    categoryCard: CategoryInteface["category"][0]
}

const Card = ({ categoryCard }: CardProps) => {
  const { categoryImage, categoryName, categoryButton, altText } = categoryCard;

  return (
    <div>
      <Image
        src={categoryImage.url}
        alt={altText}
        width={categoryImage.width}
        height={categoryImage.height}
      />
      <h2>{categoryName}</h2>
      <Button {...categoryButton} />
    </div>
  );
};
