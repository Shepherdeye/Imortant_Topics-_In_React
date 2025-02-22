import React, { Component } from 'react'

<<<<<<< HEAD
export default class ShareComponent extends Component {
    render() {
        return (
            <div>ShareComponent</div>
        )
    }
}
=======
const Counter = (WrappedComponent) => {
    return (
        class Counter extends Component {
            constructor(props) {
                super(props)

                this.state = {
                    count: 0
                }
            }

            incrementcount = () => {
                return this.setState({
                    count: this.state.count + 1
                })
            }

            render() {
                return <WrappedComponent
                    count={this.state.count}
                    incrementcount={this.incrementcount} />
            }
        }

    )
}

export default Counter
>>>>>>> test
