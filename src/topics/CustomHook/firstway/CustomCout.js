import { useState } from 'react'

const useCount = (value) => {
    const [count, setCount] = useState(value);
    const handleIncreament = () => {
        setCount(prev => prev + 1);
    }
    const handleDecreament = () => {
        setCount(prev => prev - 1);
    }
    const reset = () => {
        setCount(value);
    }
    return [count, handleIncreament, handleDecreament, reset]
}

export default useCount