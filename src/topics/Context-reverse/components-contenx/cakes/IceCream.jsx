import * as actions from "../../context/Actions"
import { useStore } from "../../context/contextData"
const IceCream = () => {
    const { state, dispatch } = useStore();
    return (
        <div className=' bg-gray-600 w-full md:w-[40%] lg:w-[20%]wrap
                p-3 mt-3 flex flex-col justify-center gap-7 items-center rounded  '>
            <h3 className='font-bold text-2xl'>Number Of IceCream</h3>

            <div className='font-bold text-2xl'>
                <button onClick={() => dispatch({ type: actions.INCREMENT_NUMBER_ICECREAM })} className='cursor-pointer bg-blue-500 text-white px-3 m-1 rounded hover:bg-blue-700'>+</button>
                {state.icecreamNumber}
                <button onClick={() => dispatch({ type: actions.DECREMENT_NUMBER_ICECREAM })} className='cursor-pointer bg-blue-500 text-white px-3 m-1 rounded hover:bg-blue-700'>-</button>
            </div>
        </div>
    )
}

export default IceCream