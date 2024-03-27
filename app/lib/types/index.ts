export interface MetaInfoFragment {
    id: string;
    metaDescription: string;
    pageTitle: string;
  }

export interface Button {
    id: string
    label: string;
    link: string;
    variant: string;
}

export interface HeroImage {
    desktopImage: {
        url: string;
        width?: number;
        height?: number;
    };
    mobileImage: {
        url: string;
        width?: number;
        height?: number;
    };
    tabletImage: {
        url: string;
        height?: number;
        width?: number;
    };
}

export interface HeroFragment {
    id: string
    overline: string;
    heading: string;
    description: string;
    heroImage: HeroImage;
    altText: string;
    heroButton: Button;
}