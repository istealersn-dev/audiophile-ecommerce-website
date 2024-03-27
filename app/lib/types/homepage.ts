import { MetaInfoFragment, HeroFragment } from "./index";

export interface Homepages {
    homepages: [{
        components: ComponentsProp[];
        slug: string;
        pageMeta: MetaInfoFragment;
    }]
}

interface ComponentsProp {
    id: string
    heroProps: HeroFragment;
}
