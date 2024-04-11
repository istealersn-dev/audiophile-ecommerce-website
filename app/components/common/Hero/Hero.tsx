import { Hero } from "@/app/lib/types";
import { Button } from "../Button/Button";
import { MultiImage } from "../MultiImage/MultiImage";

import styles from "./Hero.module.scss";

interface HeroProps {
  hero: Hero;
}

export const HeroComponent = ({ hero }: HeroProps) => {
  return (
    <section>
      <div className={styles.hero}>
        <div className={styles.hero__image}>
          <MultiImage altText={hero.altText} {...hero.heroImage} />
        </div>
        <div className={styles.hero__content}>
          <span role="Overline" className={styles.hero__content__overline}>{hero.overline}</span>
          <h1>{hero.heading}</h1>
          <p>{hero.description}</p>
          <Button {...hero.heroButton} />
        </div>
      </div>
    </section>
  );
};
