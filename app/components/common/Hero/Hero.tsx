import { breakpoints } from '@/app/lib/utils/breakpoints';
import { HeroFragment } from '@/app/lib/types';

export const Hero = ({overline, heading, description, heroImage, altText, heroButton}: HeroFragment) => {
  const { desktopImage, tabletImage, mobileImage } = heroImage;
  return (
    <section>
      <div className="hero">
        <div className="hero__image">
          <picture>
            <source media={`(min-width: ${breakpoints.large})`} srcSet={desktopImage.url} />    
            <source media={`(min-width: ${breakpoints.medium})`} srcSet={tabletImage.url} />
            <source media={`(min-width: ${breakpoints.small})`} srcSet={mobileImage.url} />
            <img src={desktopImage.url} alt={altText} />
          </picture>
        </div>
        <div className="hero__content">
            <span role='Overline'>{overline}</span>
            <h1>{heading}</h1>
            <p>{description}</p>
            <a href={heroButton.link} className=''>{heroButton.label}</a>
        </div>
      </div>
    </section>
  );
};
