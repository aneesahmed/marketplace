import {Product} from "./types";
import P1 from "/public/images/p1.jpg";
import P2 from "/public/images/p2.jpg";
import P3 from "/public/images/p3.jpg";

export const Products: Product[] = [
    {
        id: "1",
        name: "Slim Shirt",
        price: 60,
        category: "female",
        image: P1,

    },
    {
        id: "2",
        name: "Shirt",
        price: 70,
        category: "female",
        image: P2,

    }
    ,
    {
        id: "3",
        name: "Shirt",
        price: 80,
        category: "female",
        image: P3,

    },
    {
        id: "4",
        name: "Shirt",
        price:90,
        category: "kids",
        image: P1,

    },
    {
        id: "5",
        name: "Kurta",
        price: 100,
        category: "male",
        image: P2,

    },
    {
        id: "6",
        name: "Regualr Shirt",
        price: 110,
        category: "kids",
        image: P3,

    },
    {
        id: "7",
        name: "Loose Shirt",
        price: 120,
        category: "female",
        image: P1,

    }

]
