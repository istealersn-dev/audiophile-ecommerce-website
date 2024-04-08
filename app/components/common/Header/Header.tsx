import Image from "next/image"
import Link from "next/link"
import { HeaderProps } from "@/app/lib/types/layout"
import cart from '@/public/icon-cart.svg'

export const Header = ({...HeaderProps}: HeaderProps) => {

    const { companyLogo, navBarItems } = HeaderProps
    return (
        <header>
            <div>
                <Image 
                    src={companyLogo.url}
                    alt="Audiophile Logo"
                    height={25}
                    width={companyLogo.width}
                />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    {navBarItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link} key={index}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
                <Image 
                    src={cart}
                    alt="Shopping cart icon"
                />
        </header>
    )
}