import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1 className="title">Home</h1>
      <Link href="/users" className="button" >Users</Link>
      <ProductCard/>
    </main>
  )
}
