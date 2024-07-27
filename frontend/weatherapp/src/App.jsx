import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Forecast from './assets/components/Forecast'

function App() {

  const [searchvalue, setsearchvalue] = useState("")

  const [time, setTime] = useState(new Date());
  // console.log(time.toString().split(' ').splice(1,3));

  const [weather, setweather] = useState([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getdata = async () => { 
    const a = await fetch("http://localhost:3000/api", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ searchvalue:"kanpur" }) })
    const b = await a.json()
    console.log(b);
    setweather(b)
   }

   useEffect(() => {
    getdata()
   }, [])


  return (
    <>
      <Navbar search_val={searchvalue} search_fn={setsearchvalue} weather_fn={setweather} />
      <section className=' py-6 px-6'>
        <div className=' flex md:flex-row flex-col gap-6 '>
          <div className=' card bg-[#131313] py-6 px-8 rounded-2xl'>
            <div className=' text-[20px]'><span>{weather.length !== 0 && weather.location.city}</span></div>
            <div className=' text-[17px]'><span>{weather.length !== 0 && weather.location.country}</span> </div>
            <div className=' flex justify-between items-center gap-5'><span className=' text-[40px]'>{weather.length !== 0 && weather.current_observation.condition.temperature}&deg;C</span>  <span><img className=' w-[120px] h-[120px]' src='./sunny.svg' /></span> </div>
            <div><span className=' text-[24px]'>{weather.length !== 0 && weather.current_observation.condition.text}</span></div>
            <div className=' w-full h-[1px] bg-[#747373] my-2'></div>
            <div className=' flex gap-3 my-3.5'> <img className=' w-[24px] h-[24px]' src='./calender.svg' /> <span>{time.toString().split(' ').splice(1, 3).join(" ")}</span> </div>
            <div className=' flex gap-3 my-3.5'> <img className=' w-[24px] h-[24px]' src='./time.svg' /> <span>{time.toString().split(' ')[4]}</span> </div>
            <div className=' '>
              <button className=' bg-green-500 rounded-full md:py-2 py-2  px-6  font-semibold md:mt-3 mt-2'>10-Day Forecast</button>
            </div>
          </div>
          <div className='px-5 py-6 w-full bg-[#131313] rounded-2xl'>
            <div className=' mb-5'><span className=' font-bold'>Todays Highlights</span></div>
            <div className=' flex md:flex-row flex-col gap-6 my-3'>
              <div className=' md:w-1/2 w-full'>
                <div className='innercard md:px-6 px-[13px] py-2.5 rounded-xl shadow-2xl bg-[#0e0d0d]'>
                  <span>Wind</span>
                  <div className=' flex  justify-between items-center py-6'> <img className=' md:w-[80px] md:h-[80px] w-[58px] h-[58px]' src='./windy.svg' alt='wind' />
                    <div className=' flex flex-col'>
                      <span className=' text-[15px] text-gray-500' >Chill</span> <span className=' md:text-[30px] text-[20px]'>{weather.length !== 0 && weather.current_observation.wind.chill}&deg;C</span>
                    </div>
                    <div className=' flex flex-col'>
                      <span className=' text-[15px] text-gray-500' >Direction</span> <span className='md:text-[30px] text-[20px]'>{weather.length !== 0 && weather.current_observation.wind.direction}</span>
                    </div>
                    <div className=' flex flex-col'>
                      <span className=' text-[15px] text-gray-500' >Speed</span> <span className='md:text-[30px] text-[20px]'>{weather.length !== 0 && weather.current_observation.wind.speed}km/h</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=' md:w-1/2 w-full'>
                <div className='innercard md:px-6 px-[13px] py-2.5 rounded-xl shadow-2xl bg-[#0e0d0d]'>
                  <span>Wind</span>
                  <div className=' flex justify-between py-6'>
                    <div className=' flex gap-1 items-center'> <img className=' md:w-[84px] md:h-[84px] w-[54px] h-[54px]' src='./sunny.svg' alt='wind' />
                      <div className=' flex flex-col '>
                        <span className=' text-[15px] text-gray-500'>Sunrise</span> <span className=' md:text-[30px] text-[18px]'><p>{weather.length !== 0 && weather.current_observation.astronomy.sunrise}</p></span>
                      </div>
                    </div>
                    <div className=' flex gap-1 items-center'> <img className=' md:w-[78px] md:h-[78px] w-[50px] h-[50px]' src='./moon.svg' alt='wind' />
                      <div className=' flex flex-col '>
                        <span className=' text-[15px] text-gray-500'>Sunset</span> <span className=' md:text-[30px] text-[18px]'><p>{weather.length !== 0 && weather.current_observation.astronomy.sunset}</p></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=' hidden md:flex gap-6 my-3'>

              <div className=' w-1/4 '>
                <div className='innercard px-6 py-2.5 rounded-xl shadow-2xl bg-[#0e0d0d]'>
                  <span>Humidity</span>
                  <div className=' flex justify-between items-center gap-3 py-4'>
                    <img className=' w-[70px] h-[70px]' src='./humidity.svg' alt='wind' />
                    <span className=' text-[2.5vw]' >{weather.length !== 0 && weather.current_observation.atmosphere.humidity}%</span>
                  </div>
                </div>
              </div>

              <div className=' w-1/4 '>
                <div className='innercard px-6 py-2.5 rounded-xl shadow-2xl bg-[#0e0d0d]'>
                  <span>Pressure</span>
                  <div className=' flex justify-between items-center gap-3 py-4'>
                    <img className=' w-[70px] h-[70px]' src='./pressure.svg' alt='wind' />
                    <span className=' text-[2.25vw]'>{weather.length !== 0 && weather.current_observation.atmosphere.pressure}hPa</span>
                  </div>
                </div>
              </div>

              <div className=' w-1/4'>
                <div className='innercard px-6 py-2.5 rounded-xl shadow-2xl bg-[#0e0d0d]'>
                  <span>Visiblity</span>
                  <div className=' flex justify-between items-center gap-3 py-4'>
                    <img className=' w-[65px] h-[65px]' src='./visiblity.svg' alt='wind' />
                    <span className=' text-[2.5vw]'>{weather.length !== 0 && weather.current_observation.atmosphere.visibility}m</span>
                  </div>
                </div>
              </div>

              <div className=' w-1/4'>
                <div className='innercard px-6 py-2.5 rounded-xl shadow-2xl bg-[#0e0d0d]'>
                  <span>Feels Like</span>
                  <div className=' flex justify-between items-center gap-3 py-4'>
                    <img className=' w-[70px] h-[70px]' src='./temprature.svg' alt='wind' />
                    <span className=' text-[2.5vw]'>5&deg;C</span>
                  </div>
                </div>
              </div>
            </div>

            <div className=' md:hidden flex gap-6 my-6'>
              <div className=' w-1/2 '>
                <div className='innercard px-6 py-2.5 rounded-xl shadow-2xl bg-[#0e0d0d]'>
                  <span>Humidity</span>
                  <div className=' flex justify-between items-center gap-3 py-4'>
                    <img className=' w-[45px] h-[45px]' src='./humidity.svg' alt='wind' />
                    <span className=' text-[19px]' >{weather.length !== 0 && weather.current_observation.atmosphere.humidity}%</span>
                  </div>
                </div>
              </div>

              <div className=' w-1/2 '>
                <div className='innercard px-3 py-2.5 rounded-xl shadow-2xl bg-[#0e0d0d]'>
                  <span>Pressure</span>
                  <div className=' flex justify-between items-center gap-3 py-4'>
                    <img className=' md:w-[70px] md:h-[70px] w-[45px] h-[45px]' src='./pressure.svg' alt='wind' />
                    <span className=' text-[16.5px]'>{weather.length !== 0 && weather.current_observation.atmosphere.pressure}hPa</span>
                  </div>
                </div>
              </div>
            </div>

            <div className=' md:hidden flex gap-6 my-6'>
            <div className=' w-1/2'>
                <div className='innercard px-6 py-2.5 rounded-xl shadow-2xl bg-[#0e0d0d]'>
                  <span>Visiblity</span>
                  <div className=' flex justify-between items-center gap-3 py-4'>
                    <img className=' md:w-[65px] md:h-[65px] w-[42px] h-[42px]' src='./visiblity.svg' alt='wind' />
                    <span className=' text-[19px]'>{weather.length !== 0 && weather.current_observation.atmosphere.visibility}m</span>
                  </div>
                </div>
              </div>

              <div className=' w-1/2'>
                <div className='innercard px-6 py-2.5 rounded-xl shadow-2xl bg-[#0e0d0d]'>
                  <span>Feels Like</span>
                  <div className=' flex justify-between items-center gap-3 py-4'>
                    <img className=' md:w-[70px] md:h-[70px] w-[45px] h-[45px]' src='./temprature.svg' alt='wind' />
                    <span className=' text-[19px]'>5&deg;C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Forecast arr={weather} />
    </>
  )
}

export default App
