import React from 'react'

export default function ProductCardData(props) {

  console.log(props,"propssssssssssssss")
  return (
    <>

    {props.productData.map((prodata,index) => {

      const {title, price, rating, image} = prodata;
      return (
        <>
        <h2 key={index}>{index}</h2> 
        <h1>{title}</h1>

        <h3>{price}</h3>
        <h3>{rating}</h3>
        <h3>{image}</h3>
        </>
      )
    }
  )}
      
    </>
  )
}
