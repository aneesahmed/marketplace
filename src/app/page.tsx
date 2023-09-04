import Image from 'next/image'
import { Button } from '@/components/ui/button'

import Hero from "@/components/hero"
import ProductList from '@/components/ProductList'

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2  px-6">
    <Hero />
    <ProductList/>

    </div>
  )
}
