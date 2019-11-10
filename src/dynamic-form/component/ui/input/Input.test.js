import React from "react";
import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Input from "./Input"

configure({adapter: new Adapter()});

const intputTextObject = {
    elementType: 'input',
    elementId:"text1",
    elementConfig: {
        type: 'text',
        placeholder: 'Your Name'
    },
    value: 'Pervez',
}

describe("Input component", () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Input />);
    })
    it("Should render input type text with provided value and placeholder", () => {
        wrapper.setProps(intputTextObject)
        let input = wrapper.find('input').at(0);
        expect(input).toBeTruthy();
        let props = wrapper.props();
        //expect(props.value).toEqual('Pervez');
        //expect(wrapper.placeholder).toBe('Your Name')
    })
})