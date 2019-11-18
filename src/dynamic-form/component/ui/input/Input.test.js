import React from "react";
import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Input from "./Input"

configure({adapter: new Adapter()});

describe("Input component", () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Input />);
    })
    it("Should render input type text with provided values", () => {
        wrapper.setProps(intputTextObject)
        let input = wrapper.find('input').at(0);
        expect(input).toBeTruthy();
        let props = input.props();
        expect(props.value).toEqual('Pervez');
        expect(props.placeholder).toEqual('Your Name');
        expect(props["data-id"]).toEqual('text1')
    })

    it("should render text area with provided values", ()=>{
        wrapper.setProps(inputTextAreaObject)
        let input = wrapper.find('textarea').at(0);
        expect(input).toBeTruthy();
        let props = input.props();
        expect(props.value).toEqual('Dummy comments');
        expect(props.placeholder).toEqual('Comments');
        expect(props["data-id"]).toEqual('ta1')
    })

    it("should render dropdown tag with provided values", ()=>{
        wrapper.setProps(inputSelectObject)
        let input = wrapper.find('select').at(0);
        expect(input).toBeTruthy();
        let props = input.props();
        expect(props.value).toEqual('india');
        expect(props.children[0].key).toEqual('india');
        expect(props.children[1].key).toEqual('australia');
        expect(props["data-id"]).toEqual('sel1')
    })
})

const intputTextObject = {
    elementType: 'input',
    elementId:"text1",
    elementConfig: {
        type: 'text',
        placeholder: 'Your Name'
    },
    value: 'Pervez',
}

const inputTextAreaObject = {
    elementType: 'textarea',
    elementId:"ta1",
    elementConfig: {
        type: 'text',
        placeholder: 'Comments'
    },
    value: 'Dummy comments',
}

const inputSelectObject = {
    elementType: 'select',
    elementId: "sel1",
    elementConfig: {
        options: [
            {value: 'india', displayValue: 'India'},
            {value: 'australia', displayValue: 'Australia'}
        ]
    },
    value: 'india'

}