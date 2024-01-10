import './globals.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700']})

export const metadata = {
  title: 'Previsão do tempo',
  description: 'Aplicativo de previsão do tempo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
