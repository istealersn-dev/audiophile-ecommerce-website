
export interface PageMeta {
    id: string;
    metaDescription: string;
    pageTitle: string;
  }

export interface MultiImageProps {
  id?: string;
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
export interface ImageProps {
    id?: string;
    height: number;
    width: number;
    url: string;
    alt: string
  }
export interface Button {
    id?: string
    label: string;
    link: string;
    variant: string;
}

/**
 * HeroImage defines the structure for desktop, mobile and tablet hero images.
 *
 * HeroFragment defines the structure of a hero section, containing an image,
 * text, button and other metadata.
 */
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

export interface Hero {
  id: string;
  heroImage: HeroImage;
  altText: string;
  description: string;
  heading: string;
  heroButton: Button;
  overline: string;
}

// -----------Category Component------------------------------------------ //

export interface Category {
  id?: string
  category: {
    id: string
    categoryName: string
    categoryImage: ImageProps
    altText: string
    categoryButton: Button
  }[]
}

// -----------Featured Banner Component------------------------------------------ //
export interface FeaturedBanner {
  id?: string
  banners: {
    id: string;
    heading: string;
    description?: string;
    bannerImage: MultiImageProps;
    altText: string
    button: Button;
  }[]
}

// -----------Content Banner Component------------------------------------------ //
export interface ContentBanner {
  id?: string
  heading: string
  description: string
  bannerImage: MultiImageProps
  altText: string
}

// -----------Heading Component------------------------------------------ //
export interface Heading {
  id?: string
  heading: string
}