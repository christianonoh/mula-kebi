import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { cx } from '@/utils'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter'})

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope'})


export const metadata = {
  title: 'Mula Blog',
  description: 'A simple blog built with Next.js and Tailwind CSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, 'font-manrope')}>
        <Header />
        {children}
      </body>
    </html>
  )
}