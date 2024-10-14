import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate=useNavigate();
  const handleButtonClick=()=>{
    navigate("/Movies");
  }
  return (
    <header className="w-[426px] h-[124vh] bg-purple-200 flex flex-col items-center justify-center gap-y-5 bg-gradient-to-br from-purple-400 via-fuchsia-400 to-blue-400 sm:w-[640px] md:w-[768px] md:h-[90vh] lg:w-full">
    <h1 className='text-5xl text-slate-900 font-bold'>Movie Stream</h1>
    <p className='text-xl text-slate-700'>Your favorite movies, all in one place</p>
    <div className="button text-center">
      <button onClick={handleButtonClick} className='mt-10 px-3 py-1 rounded-md bg-orange-400 text-black-700 font-bold cursor-pointer transition-all hover:bg-orange-500'>Explore Movies</button>
    </div>
</header>
  )
}

export default Home