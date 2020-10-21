import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = {
          count: 0
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            console.log('setInterval')
            console.log(this.state.count)
            const newCount = this.state.count + 1
            this.setState({
                count: newCount
            })
        }, 1000)
    }

    setMessage(count) {
        if (count >= 8) {
            clearInterval(this.interval)
            return "BOOM!!!!"
        } else if (count % 2 === 0) {
            return "Tick"
        } else if (count % 2 !== 0) {
            return "Tock"
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        console.log('render')
        return (
            <div>
                <p>
                    {this.setMessage(this.state.count)}
                </p>
            </div>
        )
    }
  }

export default Bomb