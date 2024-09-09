// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <header className="bg-blue-900 text-white p-4 text-xl flex justify-between items-center">
            <div className="font-bold text-3xl">求人検索アプリ</div>
            <nav className="space-x-4">
              <Link href="/" className="text-white">求人検索</Link>
              <Link href="/post" className="text-white">求人投稿</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}