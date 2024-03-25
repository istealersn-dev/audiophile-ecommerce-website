import { breakpoints } from '@/app/lib/utils/breakpoints';
import { HeroProps } from '@/app/lib/types';
import { FC } from 'react';

export const Hero: FC<HeroProps> = ({...HeroProps}
) => {
  const { small, medium, large } = HeroProps.heroImage.source;
  return (
    <section>
      <div className="hero">
        <div className="hero__image">
          <picture>
            <source media={`(min-width: ${breakpoints.small})`} srcSet={small} />
            <source media={`(min-width: ${breakpoints.medium})`} srcSet={medium} />
            <source media={`(min-width: ${breakpoints.large})`} srcSet={large} />
            <img src={large} alt={HeroProps.altText} />
          </picture>
        </div>
        <div className="hero__content">
            <span role='Overline'>{HeroProps.overline}</span>
            <h1>{HeroProps.heading}</h1>
            <p>{HeroProps.description}</p>
            <a href={HeroProps.heroButton.link} className=''>{HeroProps.heroButton.label}</a>
        </div>
      </div>
    </section>
  );
};
