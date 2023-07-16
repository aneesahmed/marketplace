import Image from 'next/image'
import { Button } from '@/components/ui/button'

import Header from "@/components/layout/Header"
import Hero from "@/components/hero"

export default function Home() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Hero />
    </div>
  )
}
