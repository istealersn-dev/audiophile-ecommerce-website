import { Manrope } from 'next/font/google'
import { HOMEPAGE_DATA } from './page'
import { Header } from './components/common/Header/Header'
import { Footer } from './components/common/Footer/Footer'
import { GET_HEADER_AND_FOOTER_DATA } from './lib/graphql/queries'
import { fetchGraphQL } from './lib/graphqlClient'
import { Layout } from './lib/types/layout'

import './styles/variables.scss'
import './styles/globals.scss'

const queryString = GET_HEADER_AND_FOOTER_DATA.loc?.source.body

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
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const { header, footer } = await fetchGraphQL<Layout>(queryString!)

  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/icon.png' type='image/png' sizes='32x32' />
      </head>
      <body className={manrope.className}>
        <Header key={header.id} {...header}/>
          {children}
        <Footer {...footer} key={footer.id}/>
        </body>
    </html>
  )
}
