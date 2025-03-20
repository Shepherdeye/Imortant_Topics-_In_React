import React, { useEffect, useState } from 'react'
import { axiosDataFetch, getUsersData } from './APIFuncs';

const ForApiCalls = () => {
    const [usersData, setUserData] = useState([]);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => res.json())
    //         .then((data) => setUserData(data))
    //         .catch((error) => console.log(error))
    // }, []);

    const getData = async () => {
        try {
            // const data = await getUsersData();
            const data = await axiosDataFetch();
            if (!data) return [];
            setUserData(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='text-white text-center font-bold text-3xl'>
            <h1>usersData</h1>
            <div className='bg-green-950 text-lg text-gray-400 rounded-sm p-3 flex justify-center'>
                <ul className='flex flex-col items-start   '>
                    {usersData.map((user) => <li key={user.id}>{user.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default ForApiCalls