import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/ui/mode-toggle'

interface RootLayoutProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Video transcriber',
  description: 'Get a description + other suggestions for a video',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <>
            <nav className='flex justify-end p-2'><ModeToggle/></nav>
            {children}
            </>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}