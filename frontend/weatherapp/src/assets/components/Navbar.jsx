import React from 'react'

const Navbar = ({search_val,search_fn,weather_fn}) => {
  const handleSearch = async (e) => { 
      const a = await fetch("http://localhost:3000/api", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ searchvalue:search_val }) })
      const b = await a.json()
      weather_fn(b)
      console.log(b)
      console.log(search_val)
   }

   const handleSet = (e) => { 
    search_fn(e.target.value)
    }
  return (
    <header className='sticky top-0 '>
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