function Navbar() {

  return (
    <>
      <div className='h-16 w-full bg-blue-800 text-gray-300 flex justify-between items-center pr-10 mb-20'>
        <h1 className="ml-6 text-lg font-bold">@ChatApp</h1>
        <div className="flex gap-5">
          <button className="font-bold cursor-pointer bg-red-800 w-25 h-10 rounded">Register</button>
          <button className="font-bold cursor-pointer bg-red-800 w-25 h-10 rounded">Login</button>
        </div>
      </div>
    </>
  )
}

export default Navbar
