import React, { Component } from 'react'
<<<<<<< HEAD

export default class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button className='bg-gray-200 p-3 rounded mb-2 text-blue-600 font-bold cursor-pointer  hover:bg-gray-400'>
                    User clicked {0} times
=======
import Counter from '../HOC_wrapper/ShareComponent'

class ClickCounter extends Component {

    render() {
        const { count, incrementcount } = this.props
        return (
            <div>
                <button
                    onClick={incrementcount}
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

export default Counter(ClickCounter)
>>>>>>> test
