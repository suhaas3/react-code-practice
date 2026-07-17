import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function LifeCyclePhases() {

  const [products, setProducts] = useState([]);
  // const [selectCategory, setSelectCategory] = useState({
  //   category: ""
  // })
  const [selectCategory, setSelectCategory] = useState("")
  const [filteredProducts, setFilterProducts] = useState([])

  useEffect(() => {
    getProducts();
  }, [])

   const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products)
  }

  const handleSelect = (e) => {
    const { name, value } = e.target;

    setSelectCategory(value);
    // setSelectCategory(prev => ({
    //   ...prev,
    //   [name]: value
    // }))
  }

  useEffect(() => {
      if (selectCategory === "") {
        setFilterProducts(products);
      } else {
        const items = products.filter(product => {
          return product.category === selectCategory
        })

        setFilterProducts(items);
      }
  }, [products, selectCategory]);

  return (
    <>
      <h1>life cycle phases in react js</h1>


      <label>Choose category here:</label>
      <select name='category' value={selectCategory} onChange={handleSelect}>
        <option value="">All</option>
        <option value="beauty">beauty</option>
        <option value="fragrances">fragrances</option>
        <option value="furniture">furniture</option>
        <option value="groceries">groceries</option>
      </select>

      <div className='container-fluid'>
        <div className='row'>

          {filteredProducts.map((product, index) => {
            return (
              <>
                <div className='col-2' style={{ border: "solid 2px black", margin: "2px" }}>
                  <h1 key={product.index}>{product.title}</h1>
                  <h2>{product.category}</h2>
                  <h3>{product.price}</h3>
                  <h3>{product.discountPercentage}</h3>
                  <h3>{product.rating}</h3>
                  {product.tags.map(tag => {
                    return (
                      <>
                        <h1>{tag}</h1>
                      </>
                    )
                  })}

                </div>
              </>
            )

          })}

        </div>
      </div>

    </>
  )
}
