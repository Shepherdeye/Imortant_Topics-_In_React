import React from 'react'
import { useStore } from '../../context/contextData';

const RemainingFromBudget = () => {

    const { remaining } = useStore();


    return (
        <div className='flex justify-between w-full md:w-2/4 lg:w-1/4 items-center p-3 rounded bg-red-300 font-semibold'>
            <div>
                Remaining
            </div>
            <div>
                {remaining()}
            </div>
        </div>
    )
}

export default RemainingFromBudget