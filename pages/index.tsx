import { Inter } from 'next/font/google'
import Chessboard from '@/components/chessboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-slate-500 w-full h-screen flex justify-center items-center'>
      <Chessboard/>
    </div>
  )
}
