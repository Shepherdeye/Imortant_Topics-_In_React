import { useState } from 'react'

const useFormHook = () => {
    const [value, setValue] = useState();
    const restValues = () => {
        setValue("");
    }
    const inputData = {
        type: "text",
        value,
        onChange: (e) => setValue(e.target.value)
    }
    return [value, inputData, restValues]
}

export default useFormHook