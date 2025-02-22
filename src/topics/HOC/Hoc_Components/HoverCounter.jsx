import React, { Component } from 'react'
<<<<<<< HEAD

export default class HoverCounter extends Component {
    render() {
        return (
            <div>
                <button className='bg-gray-200 p-3 rounded mb-2 text-blue-600 font-bold cursor-pointer
                 hover:bg-gray-400'>
                    User Hover {0} times
=======
import Counter from '../HOC_wrapper/ShareComponent'

class HoverCounter extends Component {

    render() {
        const { count, incrementcount } = this.props
        return (
            <div>
                <button
                    onMouseMove={incrementcount}
                    className='bg-gray-200 p-3 rounded mb-2 text-blue-600 font-bold cursor-pointer  hover:bg-gray-400'>
                    User clicked {count} times
>>>>>>> test
                </button>
            </div>
        )
    }
}
<<<<<<< HEAD
=======
export default Counter(HoverCounter)
>>>>>>> test
