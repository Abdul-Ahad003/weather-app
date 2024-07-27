import React from 'react'


const Forecast = ({ arr }) => {
    console.log(arr.lenght);
    const weather_img = ['./sunny.svg', './cloudy.svg', './showers.svg', './thunderstorms.svg', './partly_cloudy.svg']
    return (

        <section className=' px-6 py-6 '>
            <div className='bg-[#131313] rounded-2xl w-full'>
                <div className=' md:px-7 px-3 py-5 font-bold text-[18px]'><span>10-Day Weather Forecast</span></div>

                {arr.length !== 0 && arr.forecasts.map((item, key) => {
                    return (
                        <>
                            <div className=' bg-gray-600 h-[1px]'></div>
                            <div className=' forecast md:px-12 px-3 py-3 flex justify-between items-center'>
                                <div className=' font-semibold'>{item.day}</div>
                                <div className='  flex items-center gap-1.5'>
                                    <div className=' w-10 h-10'>
                                        {item.text == "Sunny" && <img src={weather_img[0]} alt='sunny' />}
                                        {item.text == "Cloudy" && <img src={weather_img[1]} alt='cloudy' />}
                                        {item.text == "Mostly Cloudy" && <img src={weather_img[1]} alt='mostly cloudy' />}
                                        {item.text == "Showers" && <img src={weather_img[2]} alt='showers' />}
                                        {item.text == "Thunderstorms" && <img src={weather_img[3]} alt='thunderstorms' />}
                                        {item.text == "Partly Cloudy" && <img src={weather_img[4]} alt='partly cloudy' />}
                                    </div>
                                    <span className=' md:text-[16px] text-[15px]'>{item.text}</span>
                                </div>
                                <div>{item.high}&deg;C / {item.low}&deg;C</div>
                            </div>
                        </>
                    )
                })}

            </div>
        </section>
    )
}

export default Forecast