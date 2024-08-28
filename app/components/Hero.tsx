import React from 'react'

const Hero = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-6 py-10'>
        <div className='w-full flex items-center lg:flex-row flex-col justify-between lg:gap-5 gap-10'>
            <div className='lg:text-left text-center flex flex-col lg:items-start items-center gap-3 sm:gap-5 lg:max-w-[600px] 2xl:max-w-[700px]'>
                <h1 className='text-4xl sm:text-5xl font-medium mb-2 flex flex-col gap-2'>Lorem ipsum dolar <span className='font-orbitron text-5xl'>sit amet</span></h1>
                <p className='text-base sm:text-xl 2xl:text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum provident ratione numquam amet.</p>
                <p className='text-base sm:text-xl 2xl:text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia delectus ullam, labore perspiciatis incidunt quibusdam architecto deserunt facilis cumque.</p>
                <button className='mt-3 uppercase bg-[#441109] text-white w-[160px] md:w-[180px] h-[60px] md:h-[70px] text-sm sm:text-base 2xl:text-lg tracking-[0.2em] font-light'>Get Quote</button>
            </div>
            <div className='flex items-end relative'>
                <img src='/assets/image.jpg' alt='image' className='sm:min-w-[200px] max-h-[200px] sm:max-h-full sm:h-[300px] -mb-[100px] -mr-[50px] sm:-mr-[100px] z-10'/>
                <img src='/assets/image.jpg' alt='image' className='min-w-[250px] sm:min-w-[300px] max-h-[300px] sm:max-h-[400px]'/>
            </div>
        </div>
    </div>
  )
}

export default Hero