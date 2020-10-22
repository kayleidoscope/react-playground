import React from "react";

/* Notes for Thursday Kay:
Must write tests tomorrow*/

class Accordian extends React.Component {
    static defaultProps = {
        tabs: []
    };

    state = {
        currentTabIndex: 0
    }

    handleButtonClick(index) {
        console.log('button clicked!', { index })
        this.setState({currentTabIndex: index })
    }

    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button 
                
                    onClick={() => this.handleButtonClick(index)}
                >
                    {section.title}
                </button>
                {this.renderContent(section, index)}
            </li>
        ))
    }
    renderContent(section, index) {
        if (this.state.currentTabIndex === index) {
            return (
                <p className='content'>
                    {section.content}
                </p>
            )
        }
    }
  render() {
    return (
        <div>
            <ul>
                {this.renderButtons()}
            </ul>
        </div>
    )}
}

export default Accordian;