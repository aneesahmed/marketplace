import Reat from "react"
import {Badge} from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import HeroImage from "public/hero.jpg"
import {ShoppingCart} from "lucide-react"
import Image from "next/image"

const Hero = () => {
return (
    <div className="wrapper flex flex-col md:flex-row">
        <div className="flex-l mt-8, px-6">
            {/* left content */}
            <Badge className = "text-lg bg-blue-10 text-blue-100 px-6"></Badge>
                <h1 className="scroll-m-20 mt-4 text-4xl font-extrabold -tracking-wide"> And Indstyrial Take on streetwera</h1>
                <p className="mt-5">anyone cat beatn you but one can beatn our outout as logn as you get it</p>
                <Button className="px-6 h-12 text-lg bg-baclk mt-5">
                    <ShoppingCart className="mr-2 h-6 w-6" />Shop</Button> 
        </div>

        <div> 
            {/* right side */}
            <div className="flex-1">
                <Image src={HeroImage} alt="Hero image"></Image>
            </div>
            
        </div>           
 
    </div>
)
}
export default Hero