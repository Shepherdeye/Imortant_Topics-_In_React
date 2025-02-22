import React, { Component } from 'react'
import Counter from '../HOC_wrapper/ShareComponent'

class ClickCounter extends Component {

    render() {
        const { count, incrementcount, name } = this.props
        return (
            <div>
                <button
                    onClick={incrementcount}
                    className='bg-gray-200 p-3 rounded mb-2 text-blue-600 font-bold cursor-pointer  hover:bg-gray-400'>
                    {name} clicked {count} times
                </button>
            </div>
        )
    }
}

export default Counter(ClickCounter)
