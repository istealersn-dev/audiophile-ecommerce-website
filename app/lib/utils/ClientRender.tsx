'use client'

import useWindowSize from "@/app/lib/utils/hooks/useWindowSize"

export const ClientDesktopRender = ({ children }: any) => {

    const { innerWidth } = useWindowSize()
    const isDesktop = innerWidth !== undefined && innerWidth > 1110

    return <>{isDesktop && children}</>
}

export const ClientMobileRender = ({ children }: any) => {

    const { innerWidth } = useWindowSize()
    const isMobile = innerWidth !== undefined && innerWidth <= 1110

    return <>{isMobile && children}</>
}