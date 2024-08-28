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
            <div className="flex items-end relative mb-10 md:mb-0 ">
                <img src="./assets/image.jpg" alt="image" className="sm:min-w-[200px] max-h-[200px] sm:max-h-full sm:h-[300px] -mb-[100px] -mr-[50px] sm:-mr-[100px] z-10" />
                <img src="./assets/image.jpg" alt="image" className="min-w-[215px] sm:min-w-[250px] max-h-[300px] sm:max-h-[400px]" />
            </div>
        </div>
    </div>
  )
}

export default Hero