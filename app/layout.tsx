import { Manrope } from 'next/font/google'
import { data } from './page'

const { pageMeta } = data.homepage

// Font declartion with its weight
const manrope = Manrope({
  weight: ['400', '500','700'],
  subsets: ['latin']
}) 
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
          {children}
        </body>
    </html>
  )
}
