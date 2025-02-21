import React, { Component } from 'react'

export default class HoverCounter extends Component {
    render() {
        return (
            <div>
                <button className='bg-gray-200 p-3 rounded mb-2 text-blue-600 font-bold cursor-pointer
                 hover:bg-gray-400'>
                    User Hover {0} times
                </button>
            </div>
        )
    }
}
