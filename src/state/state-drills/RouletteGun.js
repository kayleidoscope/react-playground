import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8,
      };
    constructor(props) {
        super(props)
        this.state = {
          chamber: null,
          spinningTheChamber: false,
        }
    }
    // componentDidMount() {
    //     console.log('componentDidMount')
    //     this.interval = setInterval(() => {
    //         console.log('setInterval')
    //         console.log(this.state.count)
    //         const newCount = this.state.count + 1
    //         this.setState({
    //             count: newCount
    //         })
    //     }, 1000)
    // }

    // setMessage(count) {
    //     if (count >= 8) {
    //         clearInterval(this.interval)
    //         return "BOOM!!!!"
    //     } else if (count % 2 === 0) {
    //         return "Tick"
    //     } else if (count % 2 !== 0) {
    //         return "Tock"
    //     }
    // }


    handleButtonClick = () => {
        const newNum = Math.ceil(Math.random() * 8);
        this.setState({
            spinningTheChamber: true
        })
        let timeout = setTimeout(() => {
            this.setState({
                chamber: newNum,
                spinningTheChamber: false
            })
        }, 2000);
    }
    setMessage(chamber, spinning) {
        if (spinning === true) {
            return "spinning the chamber and pulling the trigger!"
        } else if (chamber === this.props.bulletInChamber) {
            console.log(chamber)
            return "BANG!!!!"
        } else {
            console.log(chamber)
            return "You're safe :) "
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
                {this.setMessage(this.state.chamber, this.state.spinningTheChamber)}
                </p>
                <button
                    onClick={this.handleButtonClick}
                >
                    Pull the trigger
                </button>
            </div>
        )
    }
  }

export default RouletteGun