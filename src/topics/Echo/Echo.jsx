import React from 'react'

const Echo = () => {
    return (
        <div className='m-auto text-white my-10 p-5'>
            <h1 className='text-3xl text-center'>
                This is the Echo Audio Test
            </h1>
            {/*this is the recording Dev*/}
            <div className='flex flex-col items-center justify-center my-8'>
                <div className=' flex items-center justify-around w-5/10'>
                    <div className='bg-red-800 p-3 text-xl w-max rounded-sm '>Start Record</div>
                    <div className='bg-green-800 p-3 text-xl w-max rounded-sm'>Resume Record</div>
                    <div className='bg-gray-400 p-3 text-xl w-max rounded-sm'>Pause Record</div>
                    <div className='bg-yellow-800 p-3 text-xl w-max rounded-sm'>Restart Record</div>
                </div>


                {/* recording Dev */}
                <div className='bg-red-700 text-2xl text-white font-bold'>

                </div>

                {/* recored Or Uploaded Audio */}
                <audio controls src="" className="my-5" ></audio>
            </div>

            {/*this is the Result Dev*/}
            <div>

            </div>
        </div>
    )
}

export default Echo