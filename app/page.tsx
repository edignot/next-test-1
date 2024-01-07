import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
    return (
        <main>
            <h1 className='title'>Home</h1>
            <Link href='/users' className='button'>
                Users
            </Link>
            <ProductCard />
            <SpeedInsights />
            <Analytics />
        </main>
    )
}
