import React from 'react';

class HelloWorld extends React.Component {
    // static defaultProps = {
    //     step: 1,
    //   };
    constructor(props) {
        super(props)
        this.state = {
          who: "world",
        }
    }
    handleWorldClick = () => {
        // const newWho = this.state.state + this.props.step
        this.setState({
            who: "World"
        })
    }
    handleFriendClick = () => {
        // const newCount = this.state.count + this.props.step
        this.setState({
            who: "Friend"
        })
    }
    handleReactClick = () => {
        // const newCount = this.state.count + this.props.step
        this.setState({
            who: "React"
        })
    }
    render() {
      return (
        <div>
          <p>Hello, {this.state.who}</p>
          <button
            onClick={this.handleWorldClick}
            >
            World
          </button>
          <button
            onClick={this.handleFriendClick}
            >
            Friend
          </button>
          <button
            onClick={this.handleReactClick}
            >
            React
          </button>
        </div>
      )
    }
}

export default HelloWorld