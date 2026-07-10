import React, { useEffect, useState } from 'react'

export default function ReactHooks() {


//  const [userName, setUsername] = useState("")
//  const [age, setAge] = useState();
//  const [password, setPassword] = useState("")

// const [userDetails, setUserDetails] = useState({
//   username: "",
//   password: "",
//   email:""
// })

// const handleChange = (e) => {
//   setUserDetails({
//     ...userDetails,
//     [e.target.name]:e.target.value
//   })
// }

// const sendValues = () => {
//   console.log(userDetails,"user detaiilsssssssssss")
// }

const [userDetails, setUserDetails] = useState({
  name:"",
  password:""
})

console.log(userDetails,"user details")

  
  return (
    <div>

      <input type='text' name='name'  placeholder='text write here' onChange={(e) => setUserDetails({...userDetails, [e.target.name]:e.target.value})} />

      <input type='text' name='password'  placeholder='text write here' onChange={(e) => setUserDetails({...userDetails, [e.target.name]:e.target.value})} />

      {/* <h1>{userName}</h1>
      <h1>{age}</h1>
      <h1>{password}</h1>

      <input type='text' placeholder=' text write here' name='username' onChange={(e) => setUsername(e.target.value)}/>

      <input type='number' placeholder=' text write here' name='age' onChange={(e) => setAge(e.target.value)}/>

      <input type='password' placeholder=' text write here' name='password' onChange={(e) => setPassword(e.target.value)}/> */}



      {/* <input type='text' placeholder=' text write here' name='username' onChange={handleChange}/>

      <input type='password' placeholder=' text write here' name='password' onChange={handleChange}/>

      <input type='email' placeholder=' text write here' name='email' onChange={handleChange}/>

      <button onClick={sendValues}>submit</button>

       */}
    </div>
  )
}
