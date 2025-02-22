import React, { Component } from 'react'
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
                </button>
            </div>
        )
    }
}
export default Counter(HoverCounter)
