import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Pluto Property Management Inc. | Property Maintenance & Cleaning Services GTA',
  description: 'Professional property maintenance, janitorial cleaning, window cleaning, lawn care, and snow removal services across Milton, Mississauga, Oakville, Burlington & the GTA.',
  keywords: 'property management, cleaning services, lawn maintenance, snow removal, GTA, Milton, Mississauga, Oakville, Burlington',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
