export interface HeaderProps {
    id?: string
    companyLogo: {
        url: string
        height: number
        width: number
    }
    navBarItems: {
        id: string
        label: string
        link: string
    }[]
}
export interface FooterProps {
    id?: string
    companyLogo: {
        url: string
        height: number
        width: number
    }
    footerItems: {
        id: string
        label: string
        link: string
    }[]
    socialChannels: string[]
    summary: string
    copyright: string
}

export interface Layout {
    header: HeaderProps
    footer: FooterProps
}