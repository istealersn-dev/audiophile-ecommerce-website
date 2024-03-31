import { Hero } from "@/app/lib/types";
import { Button } from "../Button/Button";
import { MultiImage } from "../MultiImage/MultiImage";

interface HeroProps {
  hero: Hero;
}

export const HeroComponent = ({ hero }: HeroProps) => {
  const { link, label, variant } = hero.heroButton;
  return (
    <section>
      <div className="hero">
        <div className="hero__image">
          <MultiImage altText={hero.altText} {...hero.heroImage} />
        </div>
        <div className="hero__content">
          <span role="Overline">{hero.overline}</span>
          <h1>{hero.heading}</h1>
          <p>{hero.description}</p>
          <Button {...hero.heroButton} />
        </div>
      </div>
    </section>
  );
};
