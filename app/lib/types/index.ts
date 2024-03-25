export interface HeroProps {
    overline: string
    heading: string
    description: string
    heroButton: {
        label: string
        link: string
        variant: string
    }
    heroImage: {
        alt: string
        source: {
            small: string
            medium: string
            large: string
        }
    }
    altText: string
}