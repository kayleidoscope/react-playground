import React from "react";
import './Accordian.css'

//Yes I know I spelled accordion wrong

class Accordian extends React.Component {
    static defaultProps = {
        sections: []
    };

    state = {
        currentTabIndex: null
    }

    handleButtonClick(index) {
        console.log('button clicked!', { index })
        this.setState({currentTabIndex: index })
    }

    renderButtons() {
        return this.props.sections.map((section, index) => (
            <li 
                key={index}>
                <button 
                    className="accordion-button"
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