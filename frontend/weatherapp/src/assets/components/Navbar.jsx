import React from 'react'

const Navbar = ({search_val,search_fn,weather_fn,loading_fn}) => {
  const handleSearch = async (e) => { 
      loading_fn(true)
      const a = await fetch("https://weatherx-8tov.onrender.com/api", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ searchvalue:search_val }) })
      const b = await a.json()
      if (b){
        loading_fn(false)
      }
      weather_fn(b)
   }

   const handleSet = (e) => { 
    search_fn(e.target.value)
    }

  return (
    <header className='sticky top-0  z-20'>
      <nav className=' flex bg-black justify-between items-center py-5 md:px-8 pl-5 pr-1'>
        <div className='logo font-bold md:text-[20px] text-[18px] flex items-center gap-1 '> <span><img className=' md:w-10 md:h-10 w-8 h-8' src='./images/weather_icon.png' alt='icon'/></span>  <span>WeatherX</span> </div>
        <div className=' relative'>
          <img className=' left-1 top-1.5 absolute w-6 h-6 ' src='./search.svg' />
          <input onChange={handleSet} value={search_val} onKeyDown={(e) => {
            if (e.key === "Enter")
              handleSearch();
          }} className=' bg-[#0e0d0d] rounded-full md:pl-8 md:pr-4 pl-7 pr-[2px] md:w-[22vw] w-[43vw] py-1.5 outline-none border-none' type='search' placeholder='Search City' />
        </div>
      </nav>
    </header>
  )
}

export default Navbar