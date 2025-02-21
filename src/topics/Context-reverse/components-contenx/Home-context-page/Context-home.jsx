import React from 'react'
import Cakes from '../cakes/Cakes'
import IceCream from '../cakes/IceCream'

const ContextHome = () => {

    return (
        <div>
            <h1 className='  ml-10 text-3xl mt-20 text-white font-bold'>We Will Make More Than Function Using The Context Api</h1>
            <div className='w-full flex flex-wrap gap-4 p-4 justify-around '>
                <Cakes />
                <IceCream />
            </div>
        </div>
    )
}

export default ContextHome