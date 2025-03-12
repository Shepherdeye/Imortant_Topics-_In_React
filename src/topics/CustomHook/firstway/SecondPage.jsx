import useCount from "./CustomCout"

const SecondPage = () => {

    const [count, handleIncreament, handleDecreament, reset] = useCount(10);

    return (
        <div className='text-white font-bold text-center '>
            <h1>Count :{count}</h1>
            <br />
            <div>
                <button className='bg-red-500 p-2 cursor-pointer mx-2 rounded-sm' onClick={handleIncreament}>+</button>
                <button className='bg-red-500 p-2 cursor-pointer mx-2 rounded-sm' onClick={handleDecreament}>-</button>
                <button className='bg-red-500 p-2 cursor-pointer mx-2 rounded-sm' onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default SecondPage