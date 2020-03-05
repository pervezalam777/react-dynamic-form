import React from "react";
import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import RadioGroup from "./RadioGroup" 

configure({adapter: new Adapter()});

describe("Radio Group component", () => {
    let newWrapper;
    beforeEach(()=>{
        newWrapper = shallow(<RadioGroup {...config }/>);
    })
    
    it("should render radio group with the provided values", () => {
        //newWrapper.setProps(config);
        let html = newWrapper.html();
        expect(html).toBeTruthy();
        expect(html.includes('data-id="radio"')).toBeTruthy();
        expect(html.includes('name="gender"')).toBeTruthy();
        expect(html.includes('value="male"')).toBeTruthy();
        expect(html.includes('value="female"')).toBeTruthy();
        expect(html.includes('type="radio"')).toBeTruthy();
    })
})

const config = {
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

