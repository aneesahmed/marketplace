import {Products} from "@/utils/mock"
import ProductCard from "@/components/ProductCard"
import { StaticImageData } from "next/image"

const getProductByCategory = (category: string) => {

}

export default function Page({ params }: { params: { slug: string } }) {
    return <div>Category: {params.slug}</div>
  }