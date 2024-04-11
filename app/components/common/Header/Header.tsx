import Image from "next/image"
import Link from "next/link"
import { HeaderProps } from "@/app/lib/types/layout"

import cart from '@/public/icon-cart.svg'
import hamburger from '@/public/icon-hamburger.svg'
import logo from '@/public/logo.svg'

import styles from './Header.module.scss'

export const Header = ({...HeaderProps}: HeaderProps) => {

    const { navBarItems } = HeaderProps
    return (
        <header className={`${styles.header} container`}>
            <div className={styles.header__content}>
                <Image 
                    src={hamburger}
                    alt="Hamburger icon"
                    priority
                    className={styles.header__content__hamburger}
                    role="button"
                />  
            <div className={styles.header__content__logo}>
                <Link href="/">
                    <Image 
                        src={logo}
                        alt="Audiophile Logo"
                        priority
                    />
                </Link>
            </div>
                <nav role="navigation" aria-label="Navigation">
                    <ul role="list" className={styles.header__content__navBar}>
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
                    priority
                    className={styles.header__content__cart}
                />
                </div>
                <hr className={styles.header__underline}/>
        </header>
    )
}