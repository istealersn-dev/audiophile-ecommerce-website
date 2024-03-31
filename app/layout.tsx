import { Manrope } from 'next/font/google'
import { HOMEPAGE_DATA } from './page'
import { Header } from './components/common/Header/Header'
import { Footer } from './components/common/Footer/Footer'


// Font declartion with its weight
const manrope = Manrope({
  weight: ['400', '500','700'],
  subsets: ['latin']
}) 

const { pageMeta } = HOMEPAGE_DATA.homepage
export const metadata = {
  title: pageMeta.pageTitle,
  description: pageMeta.metaDescription
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/icon.png' type='image/png' sizes='32x32' />
      </head>
      <body className={manrope.className}>
        <Header />
          {children}
        <Footer />
        </body>
    </html>
  )
}
