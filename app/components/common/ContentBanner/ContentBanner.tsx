import { ContentBanner as ContentBannerProps } from "@/app/lib/types"
import { MultiImage } from "../MultiImage/MultiImage"

interface ContentBannerT {
    contentBanner: ContentBannerProps
}
export const ContentBanner = ({contentBanner}: ContentBannerT) => {

    const { heading, description, bannerImage } = contentBanner
    return (
        <section>
            <div>
                <div>
                    <h2>{heading}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <MultiImage altText="" {...bannerImage}/>
                </div>
            </div>
        </section>
    )
}