import React, { Component } from 'react'

export default class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button className='bg-gray-200 p-3 rounded mb-2 text-blue-600 font-bold cursor-pointer  hover:bg-gray-400'>
                    User clicked {0} times
                </button>
            </div>
        )
    }
}
