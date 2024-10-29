"use client"
import React, { useState } from 'react'


const Header = () => {
    const [num, setNumber] = useState(0)
    const updateNumber = () => {
        setNumber(num + 1)
    }
    const decreaseNumber = ()=>{
        if(num != 0){
            setNumber(num - 1)
        }
    }
    const resetNumber =()=>{
        setNumber(0)
    }
    return (
        <>
    <div className='flex justify-center items-center h-[90vh] '>
        <div className='bg-[#1c1c1c] p-14 rounded-xl divBody'>
        <h1 className='text-6xl text-white font-semibold mb-5  mainHeading '>Counter Application</h1>
        <h1 className='text-4xl text-white font-medium text-center mb-5 number'>Number: {num} </h1>
        <div className='buttons'>
        <button onClick={updateNumber} className='bg-emerald-400 px-7 py-4 text-lg m-6 rounded uppercase hover:bg-emerald-600 hover:text-white '>
            Increase
        </button>
        <button onClick={decreaseNumber} className='bg-yellow-400 px-7 py-4 text-lg m-6 rounded uppercase   hover:bg-yellow-600 hover:text-white '>
            Decrease
        </button>
        <button onClick={resetNumber} className='bg-red-500 px-7 py-4 text-lg m-6 rounded uppercase  hover:bg-red-600 hover:text-white '>
            Reset
        </button>
        </div>
        </div>

    </div>
        <h1 className='text-3xl text-center text-blue-600'>Created by Ahmed Raza</h1>
    </>

  )
}

export default Header