import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CssBaseline } from '@mui/material'
import Web3Context from '@/web3/context'
import MuiThemeProvider from '@/themes/context'
import Providers from '@/store/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web3 Next Template',
  description: 'Create web3 next template app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <MuiThemeProvider>
        <CssBaseline enableColorScheme />
        <html lang="en">
          <body className={inter.className}>
            <Web3Context>{children}</Web3Context>
          </body>
        </html>
      </MuiThemeProvider>
    </Providers>
  )
}
