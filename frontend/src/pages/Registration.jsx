import Navbar from "../components/Navbar.jsx"
function Registration() {

  return (
    <>
      <Navbar />
      <div className='flex justify-center h-full'>
        <div className='flex flex-col justify-center p-4 w-120 h-120 bg-gray-500/30 backdrop-blur-2xl shadow-2xl'>
            <input className="h-10 bg-white p-4 rounded-md mb-8 outline-none" placeholder="username"/>
            <input className="h-10 bg-white p-4 rounded-md mb-8 outline-none" placeholder="email"/>
            <input className="h-10 bg-white p-4 rounded-md mb-8 outline-none" placeholder="password"/>
            <input className="h-10 bg-white p-4 rounded-md mb-8 outline-none" placeholder="confirm password"/>
            <button type="submit" className="bg-blue-200 rounded-md h-10 cursor-pointer text-black">Login</button>
        </div>
      </div>
    </>
  )
}

export default Registration
