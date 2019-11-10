import React from 'react'
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {checkValidity} from "./index"

configure({adapter: new Adapter()});

describe("Form validator", () => {
    const requiredRule = {required:true};
    const minLengthRule = {...requiredRule, minLength:3};
    const maxLengthRule = {...requiredRule, minLength:6};

    it("should return true if there is not rules", ()=>{
        let isValid = checkValidity('');
        expect(isValid).toBeTruthy();
    })

    it("should retrun false when rules.required", () => {
        let isValid = checkValidity('', requiredRule);
        expect(isValid).toBeFalsy();
    })

    it("should return true when value is 'test' and rules.required", () =>{
        let isValid = checkValidity('test', {required:true})
        expect(isValid).toBeTruthy();
    })

    it("should return false if value is less than defined minimum length", ()=>{     
        let isValid = checkValidity('ab', minLengthRule)
        expect(isValid).toBeFalsy()
    })

    it("should return true if value is greater than or equal to defined minimum length", ()=>{
        let isValid = checkValidity('abcd', minLengthRule)
        expect(isValid).toBeTruthy()

        isValid = checkValidity('abc', minLengthRule)
        expect(isValid).toBeTruthy() 
    })

    it("should return false if value is greater than maximum length", () =>{
        let isValid = checkValidity("1100624", maxLengthRule)
    })
})