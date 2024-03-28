import { breakpoints } from '@/app/lib/utils/breakpoints';
import { Hero } from '@/app/lib/types';
import { Button } from '../Button/Button';

interface HeroProps {
  hero: Hero
}

export const HeroComponent = ({hero}: HeroProps) => {
  const { desktopImage, tabletImage, mobileImage } = hero.heroImage;
  const { link, label, variant } = hero.heroButton;
  return (
    <section>
      <div className="hero">
        <div className="hero__image">
          <picture>
            <source media={`(min-width: ${breakpoints.large})`} srcSet={desktopImage.url} />    
            <source media={`(min-width: ${breakpoints.medium})`} srcSet={tabletImage.url} />
            <source media={`(min-width: ${breakpoints.small})`} srcSet={mobileImage.url} />
            <img src={desktopImage.url} alt={hero.altText} />
          </picture>
        </div>
        <div className="hero__content">
            <span role='Overline'>{hero.overline}</span>
            <h1>{hero.heading}</h1>
            <p>{hero.description}</p>
            <Button link={link} label={label} variant={variant} />
        </div>
      </div>
    </section>
  );
};
