import React, {useState} from "react"

function Login() {

  const [data, setData] = useState({})

  const handleChange = (e) => {
    //
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return(
    <form>
      <input placeholder="username" name="username" onChange={handleChange} />

      <input name="password" type="password" onChange={handleChange} />
      </form>
  )
}

export default Login