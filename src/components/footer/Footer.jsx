import React from "react"

function Footer() {
  return (
    <div className='w-full h-48 flex flex-col justify-center items-center p-1 box-border'>
        <div className='w-full flex flex-col items-center justify-center box-border'>
          <h2 className='w-full flex justify-center text-base lg:text-xl font-bold box-border'>
            I am open to take on freelance opportunities.
          </h2>
          <p className='w-full flex justify-center text-base lg:text-xl font-semibold box-border'>
          &copy; Alex Marcell, 2022 
          </p>
        </div>
    </div>
  )
}

export default Footer