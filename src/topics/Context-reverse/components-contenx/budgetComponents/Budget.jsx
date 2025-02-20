import React from 'react'
import { useStore } from '../../context/contextData'

const BudgetAmount = () => {
    const { state, dispatch } = useStore();
    return (
        <div className='flex justify-between w-full md:w-2/4 lg:w-1/4 items-center p-3 rounded bg-gray-400 font-semibold'>
            <div>
                Budget
            </div>
            <div>
                {state.budget}
            </div>
        </div>
    )
}

export default BudgetAmount