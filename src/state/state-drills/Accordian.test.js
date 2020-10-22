import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordian from './Accordian';

//Yes I know I spelled accordion wrong

describe(`Accordian Component`, () => {
    // array of objects, each with a name and content
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ]
    
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordian />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders no section by default', () => {
        const wrapper = shallow(<Accordian sections={sections} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders empty given no tabs', () => {
        const wrapper = shallow(<Accordian />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('closes the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Accordian sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})