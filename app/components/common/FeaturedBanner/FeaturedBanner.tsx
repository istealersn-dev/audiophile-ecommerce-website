import { FeaturedBanner as FeaturedBannerProps } from "@/app/lib/types";
import { breakpoints } from "@/app/lib/utils/breakpoints";
import { Button } from "../Button/Button";
import { MultiImage } from "../MultiImage/MultiImage";

export const FeaturedBanner = ({
  ...FeaturedBannerProps
}: FeaturedBannerProps) => {
  const { banners } = FeaturedBannerProps;

  return (
    <section>
      <div>
        {banners.map((banner, index) => {
          return (
            <div key={banner.id}>
              <div>
                <MultiImage altText={banner.altText} {...banner.bannerImage} />
              </div>
              <div>
                {index === 0 ? (
                  <h2>{banner.heading}</h2>
                ) : (
                  <h3>{banner.heading}</h3>
                )}
                {banner.description && <p>{banner.description}</p>}
                <Button {...banner.button} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
