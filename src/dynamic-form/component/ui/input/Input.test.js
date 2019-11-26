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
        let html = wrapper.html();
        expect(html).toBeTruthy();
        expect(html.includes('<input')).toBeTruthy();
        expect(html.includes('value="Pervez"')).toBeTruthy();
        expect(html.includes('placeholder="Your Name"')).toBeTruthy();
        expect(html.includes('data-id="text1"')).toBeTruthy();
    })

    it("should render text area with provided values", ()=>{
        wrapper.setProps(inputTextAreaObject)
        let html = wrapper.html();
        expect(html).toBeTruthy();
        expect(html.includes('<textarea')).toBeTruthy();
        expect(html.includes('Dummy comments')).toBeTruthy();
        expect(html.includes('placeholder="Comments"')).toBeTruthy();
        expect(html.includes('data-id="ta1"')).toBeTruthy();
    })

    it("should render dropdown with provided values", ()=>{
        wrapper.setProps(inputSelectObject);
        let html = wrapper.html();
        expect(html).toBeTruthy();
        expect(html.includes('<select')).toBeTruthy();
        expect(html.includes('<option')).toBeTruthy();
        expect(html.includes('value="india"')).toBeTruthy();
        expect(html.includes('value="australia"')).toBeTruthy();
        expect(html.includes('data-id="sel1"')).toBeTruthy();
    })

    it("should render radio group with the provided values", () => {
        wrapper.setProps(radioGroupObject);
        let html = wrapper.html();
        expect(html).toBeTruthy();
        expect(html.includes('data-id="radio"')).toBeTruthy();
        expect(html.includes('name="gender"')).toBeTruthy();
        expect(html.includes('value="male"')).toBeTruthy();
        expect(html.includes('value="female"')).toBeTruthy();
        expect(html.includes('type="radio"')).toBeTruthy();
    })

    it("should add invalid class if element value is not a valid value", ()=>{
        wrapper.setProps(InvalidIntputTextObject);
        let html = wrapper.html();
        expect(html).toBeTruthy();
        expect(html.includes('<input')).toBeTruthy();
        expect(html.includes('Invalid')).toBeTruthy();
    })
})

const InvalidIntputTextObject = {
    elementType: 'input',
    elementId:"text1",
    elementConfig: {
        type: 'text',
        placeholder: 'Your Name'
    },
    invalid:true,
    shouldValidate:true,
    touched:true,
    changed:function(){},
    value: '',
}

const intputTextObject = {
    elementType: 'input',
    elementId:"text1",
    elementConfig: {
        type: 'text',
        placeholder: 'Your Name'
    },
    changed:function(){},
    value: 'Pervez',
}

const inputTextAreaObject = {
    elementType: 'textarea',
    elementId:"ta1",
    elementConfig: {
        type: 'text',
        placeholder: 'Comments'
    },
    changed:function(){},
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
    changed:function(){},
    value: 'india'

}

const radioGroupObject = {
    elementType: 'inputRadio',
    elementId: "radio",
    group: [
        {
            elementConfig: {
                type: 'radio',
                name: 'gender',
                value: 'male'
            },
            label: 'Male'
        },
        {
            elementConfig: {
                type: 'radio',
                name: 'gender',
                value: 'female'
            },
            label: 'Female'
        }
    ],
    changed:function(){},
    value: '',
}