import React from 'react'
import ProductCardData from './ProductCardData';

export default function ProductCard() {

  const productData = [

    {

      id: 1,

      title: "iPhone",

      price: 80000,

      rating: 4.7,

      image: "iphone.png"

    },

    {

      id: 2,

      title: "Laptop",

      price: 65000,

      rating: 4.8,

      image: "laptop.png"

    }

  ];


  return (
    <>

    <ProductCardData productData={productData}/>

    </>
  )
}
