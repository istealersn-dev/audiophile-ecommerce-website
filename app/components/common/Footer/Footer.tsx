import {FooterProps} from '@/app/lib/types/layout'

import Image from 'next/image'
import Link from 'next/link'

import facebook from '@/public/icon-facebook.svg'
import instagram from '@/public/icon-instagram.svg'
import twitter from '@/public/icon-twitter.svg'

const socialChannelImages = {
    svg: [ facebook,instagram,twitter],
    alt: [ 'Facebook', 'Instagram', 'Twitter' ]
}

export const Footer = ({...FooterProps}: FooterProps) => {

    const { companyLogo, footerItems, summary, socialChannels, copyright } = FooterProps
    return (
        <footer>
            <div>
            <div>
                <Image 
                    src={companyLogo.url}
                    alt="Audiophile Logo"
                    height={100}
                    width={100}
                />
            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>                
                {footerItems.map((item) => (
                    <li key={item.id}>
                        <Link href={item.link} key={item.id}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
            <div>
                <p>{summary}</p>
                <div>
                    <ul>
                        {socialChannels.map((channel, index) => (
                            <li key={index}>
                                <Link href={channel}>
                                    <Image
                                        src={socialChannelImages.svg[index]}
                                        alt={socialChannelImages.alt[index]}
                                        height={24}
                                        width={24}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p>{copyright}</p>
        </footer>
    )
}