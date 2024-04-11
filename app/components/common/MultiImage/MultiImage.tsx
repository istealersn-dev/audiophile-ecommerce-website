import { MultiImageProps } from "@/app/lib/types";
import { breakpoints } from "@/app/lib/utils/breakpoints";

interface MultiImages extends MultiImageProps {
  altText: string;
}

export const MultiImage = ({ altText, ...MultiImageProps }: MultiImages) => {
  const { desktopImage, tabletImage, mobileImage } = MultiImageProps;
  return (
    <picture>
      <source
        media={`(min-width: ${breakpoints.large})`}
        srcSet={desktopImage.url}
      />
      <source
        media={`(min-width: ${breakpoints.medium})`}
        srcSet={tabletImage.url}
      />
      <source
        media={`(min-width: ${breakpoints.small})`}
        srcSet={mobileImage.url}
      />
      <img src={desktopImage.url} alt={altText} loading="lazy"/>
    </picture>
  );
};
