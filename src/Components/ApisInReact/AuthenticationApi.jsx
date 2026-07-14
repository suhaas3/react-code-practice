import axios from 'axios';
import React, { useState } from 'react'
import "../ApisInReact/AuthenticationApi.css";

export default function AuthenticationApi() {

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: ""
  });

  const [productsData, setProductsData] = useState([]);

  const [loading, setLoading] = useState(false)

  // const handleUserDetails = (e) => {

  //   const { name, value } = e.target;
  //   setUserDetails(prev => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }

  // const data = {
  //   email: userDetails.username,
  //   password: userDetails.password
  // }

  // const apiData = async () => {
  //   const userData = await axios.post("https://api.escuelajs.co/api/v1/auth/login", data)
  // }




  // const getUserData = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
  //       headers: {
  //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY3Mjc2NjAyOCwiZXhwIjoxNjc0NDk0MDI4fQ.kCak9sLJr74frSRVQp0_27BY4iBCgQSmoT3vQVWKzJg"
  //       }
  //     }
  //     );

  //     console.log(response, "user dataaaaaaaaaaaa");

  //     setLoading(false)
  //   } catch (err) {
  //     console.log(err.response.data.message, "Error")
  //   }


  // }

  const getData = async () => {
    setLoading(true)
    try {
      const response = await axios.get("https://api.escuelajs.co/api/v1/products")
      setProductsData(response.data)
      setLoading(false)
    } catch (err) {
      console.log(err.response.data.message, "Error");
    }
  }

  if (loading) {
    return <h1>Loading....</h1>
  }

  // const createProduct = async () => {
  //   try {
  //   const sendData = await axios.post("https://api.escuelajs.co/api/v1/products/",{
  //   title: `New Product ${Date.now}`,
  //   price: 10,
  //   description: "A description",
  //   categoryId: 2,
  //   images: ["https://placehold.co/600x400"]
  // })

  // console.log(sendData.data,"created dataaaaaaa")
  // } catch (err) {
  //   console.log(err.response.data.message,"Error")
  // }
  // }

  const updateProduct = async () => {
    setLoading(true)
    try {
      const response = await axios.put("https://api.escuelajs.co/api/v1/products/24", {
        "title": `Change title  ${Date.now()}`,
        "price": 100
      })

      setLoading(false)
    } catch (err) {
      console.log(err,"Error")
    }
}

  return (
    <>

      {/* <input type='text' onChange={handleUserDetails} name='username' />

      <input type='text' onChange={handleUserDetails} name='password' /> */}

      {/* <button onClick={getUserData}>get user data</button> */}

      <button onClick={getData}>get products</button>

      {/* <button onClick={createProduct}>Cretate product</button> */}

      <button onClick={updateProduct}>Update product</button>

      {
        productsData.length > 0 &&
        productsData.map((product) => (
          <div className="product-card">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />

            <div className="product-details">
              <h2>{product.title}</h2>

              <p className="description">{product.description}</p>

              <div className="price-section">
                <span className="price">${product.price}</span>
                <span className="discount">
                  {product.discountPercentage}% OFF
                </span>
              </div>

              <div className="rating-stock">
                <span>⭐ {product.rating}</span>
                <span>Stock: {product.stock}</span>
              </div>

              <button className='add-button'>Add to Cart</button>
            </div>
          </div>
        ))
      }






    </>
  )

}