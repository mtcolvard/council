import './globals.css'
import { Roboto } from 'next/font/google'
import Head from 'next/head'


// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: ['400', '700'],
  normal: ['normal', 'condensed'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Gabriella Furno',
  description: 'This site presents: Sculpture, Painting, Works of Art, and other oeuvre created by Gabriella Furno',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <Head>
        <title>Gabriella Lucky Furno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
