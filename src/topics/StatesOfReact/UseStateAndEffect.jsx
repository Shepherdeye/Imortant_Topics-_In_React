import React, { useEffect, useState } from 'react'

const UseStateAndEffect = () => {

    const [count, setCount] = useState(0);

    const counter = () => {
        setCount(count + 1)
    };

    useEffect(() => {
        const interval = setInterval(counter, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [count]);

    return (
        <div className='text-white my-20 mx-20 '>
            <h1>timer</h1>
            <div className='bg-green-500 p-1 my-4 w-max  text-black font-bold rounded' >
                {count}
            </div>
            <hr />
        </div>
    )
}

export default UseStateAndEffect