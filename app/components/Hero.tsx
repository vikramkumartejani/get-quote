import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-8 sm:px-10 md:px-20 py-10 ">
        <div className="w-full flex items-center lg:flex-row flex-col justify-between lg:gap-5 gap-10">
            <div className="max-w-[350px] w-full lg:text-left text-center flex flex-col lg:items-start items-center gap-3 sm:gap-5">
                <h1 className="text-[33px] sm:text-[36px] font-medium mb-2 flex flex-col gap-2 tracking-normal">
                    Lorem ipsum dolar
                    <span className="font-orbitron text-3xl">sit amet</span>
                </h1>
                <p className=" text-xs font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum provident ratione numquam amet.
                </p>
                <p className="text-xs font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia delectus ullam, labore perspiciatis incidunt quibusdam architecto deserunt facilis cumque.
                </p>
                <button className="mt-3 uppercase bg-[#441109] text-white w-[160px] h-[60px] md:h-[55px] text-sm sm:text-base 2xl:text-lg tracking-[0.2em] font-light">Get Quote</button>
            </div>
            <div className=" relative mb-10 md:mb-0 w-full max-w-[320px] flex items-end justify-end ">
                <img src="/assets/image.jpg" alt="image" className="w-[150px] h-[200px] absolute z-20 -bottom-14 -left-[20px]" style={{objectFit:'cover'}}  />
                <img src="/assets/image.jpg" alt="image" className='w-[250px] h-[400px]' style={{objectFit:'cover'}}  />
            </div>
        </div>
    </div>
  )
}

export default Hero