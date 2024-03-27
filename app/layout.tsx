import { Manrope } from 'next/font/google'

// Font declartion with its weight
const manrope = Manrope({
  weight: ['400', '500','700'],
  subsets: ['latin']
}) 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body className={manrope.className}>
          {children}
        </body>
    </html>
  )
}
