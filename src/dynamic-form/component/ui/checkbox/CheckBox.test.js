import React from "react";
import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CheckBox from "./CheckBox"

configure({adapter: new Adapter()});

describe("Input component", () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<CheckBox />);
    })
    
    it("should render checkbox with the provided values", () => {
        wrapper.setProps(config);
        let html = wrapper.html();
        expect(html).toBeTruthy();
        expect(html.includes('data-id="checkboxId"')).toBeTruthy();
        expect(html.includes('name="agree"')).toBeTruthy();
        expect(html.includes('type="checkbox"')).toBeTruthy();
    })
})

const config = {
    elementType: 'inputCheckbox',
    elementId:"checkboxId",
    elementConfig: {
        type: 'checkbox',
        name:"agree",
        value:"agreed",
        checked:false
    },
    checkBoxLabel:"Agree",
    value: "",
    validation: {
        required: true
    },
    valid: false,
    touched: false,
    changed:function(){}
}
