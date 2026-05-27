import Navbar from "../components/Navbar.jsx"
import loginAuth from "../api/auth.js"
import { AuthContext } from '../context/AuthContext.jsx'
import { useContext, useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setToken } = useContext(AuthContext)
  async function handleSubmit() {
    const data = await loginAuth(username, password)
    setToken(data.access)
    console.log(data.access)
  }

  return (
    <>
      <Navbar />
      <div className='flex justify-center h-full'>
        <div className='flex flex-col justify-center p-4 w-120 h-120 bg-gray-500/30 backdrop-blur-2xl shadow-2xl'>
          <input className="h-10 bg-white p-4 rounded-md mb-8 outline-none" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="h-10 bg-white p-4 rounded-md mb-8 outline-none" placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="bg-blue-200 rounded-md h-10 cursor-pointer text-black" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </>
  )
}

export default Login
