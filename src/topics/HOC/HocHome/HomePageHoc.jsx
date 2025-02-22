import React from 'react'
import ClickCounter from '../Hoc_Components/ClickCounter'
import HoverCounter from '../Hoc_Components/HoverCounter'

const HomePageHoc = () => {
    return (
        <div className='bg-gray-600 w-5/10 p-3 flex flex-col justify-around items-center m-auto mt-10 rounded'>
            <h3 className='bg-gray-900 text-white p-3 my-3 rounded font-semibold'>For Learning the HOC Logic</h3>
            <ClickCounter />
            <HoverCounter />
        </div>
    )
}

export default HomePageHoc