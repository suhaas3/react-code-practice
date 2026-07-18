import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function LifeCyclePhases() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [selectCategory, setSelectCategory] = useState({
  //   category: ""
  // })
  const [selectCategory, setSelectCategory] = useState("")
  const [filteredProducts, setFilterProducts] = useState([])

  //price filter state
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    setLoading(true);
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products)

    setLoading(false);
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

    const filteredItems = products.filter(product => {

      //category filter
      const categoryFilter = selectCategory === "" || product.category === selectCategory;

      //price filter
      const priceFilter = selectedPrices.length === 0 || selectedPrices.some(range => {
        const [min, max] = range.split("-");

        return (
          product.price >= Number(min) && product.price <= Number(max)
        )
      })

      return categoryFilter && priceFilter;
    })
    setFilterProducts(filteredItems)
  }, [products, selectCategory, selectedPrices])



  if (loading) {
    return <h1>Loading.........</h1>
  }

  const handlePrice = (e) => {

    const { value, checked } = e.target;
    if (checked) {
      setSelectedPrices(prev => [...prev, value])
    } else {
      setSelectedPrices(prev =>
        prev.filter(item => item !== value)
      )
    }

  }

  console.log(selectedPrices, "selected pricesssss")
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

      <label>Price:

        <input type='checkbox' value="5-10" onChange={handlePrice} />₹5 - ₹10
      </label>
      <label>
        <input type='checkbox' value="10-20" onChange={handlePrice} />₹10 - ₹20
      </label>
      <label>
        <input type='checkbox' value="20-30" onChange={handlePrice} />₹20 - ₹30
      </label>
      <label>
        <input type='checkbox' value="30-300" onChange={handlePrice} />₹30 - ₹300
      </label>

      <label>
        <input type='checkbox' value="300-1000" onChange={handlePrice} />₹300 - ₹1000
      </label>




      <div className='container-fluid'>
        <div className='row'>

          {filteredProducts.map((product, index) => {
            const { title, category, price, discountPercentage, rating, tags } = product;
            return (
              <>
                <div className='col-2' style={{ border: "solid 2px black", margin: "2px" }}>
                  <h1 key={index}>{title}</h1>
                  <h2>category: {category}</h2>
                  <h3>price: {price}</h3>
                  <h3>discout: {discountPercentage}</h3>
                  <h3>rating: {rating}</h3>
                  <h3>Tags: {tags.join(", ")}</h3>

                  {/* {tags.map(tag => {
                    return (
                      <>
                        <h3>tag :{tag}</h3>
                      </>
                    )
                  })} */}

                </div>
              </>
            )

          })}

        </div>
      </div>

    </>
  )
}
