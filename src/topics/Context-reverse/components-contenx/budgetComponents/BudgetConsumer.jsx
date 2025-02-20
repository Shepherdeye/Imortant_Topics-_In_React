import React from 'react'
// import { consumption } from '../../context/Reducer'
import { useStore } from '../../context/contextData';
const BudgetConsumer = () => {
    const { consumption } = useStore()



    return (
        <div className='flex justify-between w-full md:w-2/4 lg:w-1/4 items-center p-3 rounded bg-green-400 font-semibold'>
            <div>
                Consumtion
            </div>
            <div>
                {consumption()}
            </div>
        </div>
    )
}

export default BudgetConsumer