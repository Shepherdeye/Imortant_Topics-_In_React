import React from 'react'
import { useStore } from '../../context/contextData'
import * as actions from "../../context/Actions"
const ExpensisCard = ({ id, name, cost }) => {
    const { dispatch } = useStore();
    return (
        <div className=" mt-5 bg-white w-full md:w-[40%] lg:w-[30%] shadow-lg rounded p-2  text-center border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            <strong className="block text-lg text-gray-600 mt-2">${cost}</strong>
            <div className="flex justify-center gap-3 mt-4">
                <button
                    onClick={() => dispatch({ type: actions.BUDGET_REMOVE_EXPENSIS, payload: id })}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
                >
                    Delete
                </button>

            </div>
        </div >
    )
}

export default ExpensisCard