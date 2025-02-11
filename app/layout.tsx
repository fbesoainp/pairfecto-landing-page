import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pairfecto',
  description: 'AI-powered restaurant recommendation app tailored to couples',
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
