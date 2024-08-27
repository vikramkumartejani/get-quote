import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='lg:h-screen w-full max-w-[1440px] mx-auto px-4 py-20 flex items-center justify-center'>
        <div className='w-full flex items-center lg:flex-row flex-col justify-between lg:gap-5 gap-10'>
            <div className='lg:text-left text-center flex flex-col lg:items-start items-center gap-5 xl:max-w-[600px] 2xl:max-w-[700px]'>
                <h1 className='text-4xl sm:text-5xl font-medium mb-2'>Lorem ipsum dolar</h1>
                <p className='text-base sm:text-xl 2xl:text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum provident ratione numquam amet.</p>
                <p className='text-base sm:text-xl 2xl:text-2xl font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia delectus ullam, labore perspiciatis incidunt quibusdam architecto deserunt facilis cumque.</p>
                <button className='mt-3 uppercase bg-[#441109] text-white w-[160px] 2xl:w-[200px] h-[50px] sm:h-[60px] text-sm sm:text-base 2xl:text-lg tracking-[0.2em] font-light'>Get Quote</button>
            </div>
            <div className='flex items-end justify-end'>
                <Image src='/assets/image.jpg' alt='image' width={500} height={500} className='lg:min-w-[450px] lg:h-[500px]'/>
            </div>
        </div>
    </div>
  )
}

export default Hero