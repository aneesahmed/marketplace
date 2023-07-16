
import React from 'react'
import  logo from '/public/logo.jpg'
import Link from 'next/link'
import Image from 'next/image'
import {Menu, ShoppingCart} from "lucide-react"

// for mobile view nav bar
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

function Nav() {
  return (
<div className='flex justify-between items-center wrapper' >
    <div><Image src={logo} alt="logo"/></div>

    <div className='hidden md:block'>

    <ul className='flex gap-x-4'>
        <li><Link href="/"> Female </Link></li>
        <li><Link href="/"> Male </Link></li>
        <li><Link href="/"> Kids </Link></li>
        <li><Link href="/"> All Products </Link></li>

    </ul>
    </div>
    <div>    <input className='border-2' placeholder='Search' type='text'></input></div>
    <div className="flex gap-x-2">
        <div className=" flex justify-center items-center h-9 w-9 rounded-full bg-gray-300">
            <ShoppingCart className= "w-5 h-5"></ShoppingCart>
        </div>
    <div className='md:hidden'>
            <Sheet>
        <SheetTrigger><Menu className="w-8 h-8"/></SheetTrigger>
        <SheetContent>
           <ul className='flex flex-col gap-x-4'>
            <li><Link href="/"> Female </Link></li>
            <li><Link href="/"> Male </Link></li>
            <li><Link href="/"> Kids </Link></li>
            <li><Link href="/"> All Products </Link></li>
        </ul>
  
        </SheetContent>
        </Sheet>
    </div>
    </div>
</div>
  )
}

export default Nav

