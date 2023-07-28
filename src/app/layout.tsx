
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navegacion from '@/components/Navegacion'

import { Providers } from '@/redux/providers'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beelder Avianca',
  description: 'Prueba tecnica',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <body className='flex flex-col md:flex-row gap-10 container'>
        <aside className='ml-10 mt-10'>
          <Navegacion/>
        </aside>
        <div>
          <h1 className='text-center'>Avianca Systems</h1>
          <Providers>
            {children}
          </Providers>
        </div>
        
      </body>
    </html>
  )
}
