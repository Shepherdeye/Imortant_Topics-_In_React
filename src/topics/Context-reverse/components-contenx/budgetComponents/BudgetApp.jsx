import React from 'react'
import BudgetAmount from './Budget'
import BudgetConsumer from './BudgetConsumer'
import RemainingFromBudget from './Remaining'
import { useStore } from '../../context/contextData'
import ExpensisCard from './ExpensisCard'
import ProductForm from './ProductForm'

const BudgetApp = () => {
    const { state } = useStore();
    return (
        <div className='w-full flex flex-col justify-around   items-center'>
            <div>
                <h1 className='text-gray-200 bg-green-2000 p-4 font-bold text-center text-3xl'>Welcome To Our Simple Budget App</h1>
            </div>
            <div className='  w-8/12 flex gap-3 justify-around items-center flex-wrap mt-5'>
                <BudgetAmount />
                <BudgetConsumer />
                <RemainingFromBudget />
            </div>

            {/* form */}
            <div>
                <ProductForm />
            </div>

            {/* cards */}
            <div className='flex justify-around items-center gap-5 flex-wrap w-8/12'>
                {state.expensis.length > 0 ? state.expensis.map(({ id, cost, exName }) => {
                    return <ExpensisCard key={id} id={id} cost={cost} name={exName} />
                }) : <h1 className='bg-red-300 font-bold p-2 rounded'> there is no data</h1>}
            </div>
        </div>
    )
}

export default BudgetApp