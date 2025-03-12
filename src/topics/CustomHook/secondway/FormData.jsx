import React from 'react'
import useFormHook from './CustomFormHook';

const FormData = () => {

    const [userName, userNameData, restuserName] = useFormHook();
    const [userAge, userAgeData, restuserAge] = useFormHook();

    const handleSubmition = (event) => {
        event.preventDefault();
        if (!userAge || !userName) return;
        alert(`Hello Your Name is ${userName} and you are ${userAge} years old`);
        restuserName();
        restuserAge();
    }

    return (
        <div className='text-center text-white py-5 font-bold'>
            <form onSubmit={handleSubmition}>
                <input className='border w-full p-3 my-3' type="text" placeholder='Enter Name'
                    {...userNameData}
                />
                <input className='border w-full p-3 my-3' type="text" placeholder='Enter Age'
                    {...userAgeData}
                />
                <button type='submit' className='bg-blue-600 p-3 rounded-sm w-full cursor-pointer' >view</button>
            </form>

        </div>
    )
}

export default FormData